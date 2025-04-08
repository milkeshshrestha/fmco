import { NextRequest, NextResponse } from "next/server";
import { aggregateErrors } from "@/util/zodErrorAggregator";
import prisma from "@/prisma/client";
import * as xlsx from "xlsx";
import { z } from "zod";
import { shareSchema, ShareUploadSchema } from "@/zod.schema/shareSchema";
import { Share, ShareHistory } from "@prisma/client";
import getDataFromExcel from "@/data/extractExcel";
import getDuplicateArray from "@/services/getDuplicate";

export async function POST(request: NextRequest, res: NextResponse) {
  let message = "";
  try {
    const formData = Object.fromEntries(await request.formData()) as z.infer<
      typeof ShareUploadSchema
    >;
    const data = await getDataFromExcel(formData.file);
    const rows = data.slice(1).map((row: any) => ({
      shareholderNumber: row[0],
      unitsOfShare: row[1],
      cost: row[2],
      remarks: row[3],
    }));

    // Validate each row against the schema
    var validatedDataFromExcel: z.infer<typeof shareSchema>[] = [];
    var errorRows: any = [];
    for (const [index, row] of rows.entries()) {
      const validationResponse = await shareSchema.safeParseAsync(row);
      validationResponse.success
        ? validatedDataFromExcel.push(validationResponse.data)
        : errorRows.push(
            `Error at Row: ${index + 1} Shareholder Number:  ${
              row.shareholderNumber
            } 
              . Message:${aggregateErrors(
                validationResponse.error.flatten().fieldErrors
              )}`
          );
    }
    //console.log(errorRows);
    if (errorRows.length > 0) {
      message = errorRows.join(" \n ").toString();
      throw new Error();
    }
    //find and restrct duplicate shareholder number
    const duplicateShareholderInExcel = getDuplicateArray(
      validatedDataFromExcel,
      "shareholderNumber"
    );
    if (duplicateShareholderInExcel.length > 0) {
      message = `Error: Duplicate shareholder number found: ${duplicateShareholderInExcel
        .map((share) => share.id)
        .join(", ")}`;
      throw new Error();
    }

    const shareholdersFromDb = await prisma.shareholder.findMany({
      where: {
        number: {
          in: validatedDataFromExcel.map((share) => share.shareholderNumber),
        },
      },
    });
    if (shareholdersFromDb.length !== rows.length) {
      const shareholderNumbersFromDB = shareholdersFromDb.map(
        (sh) => sh.number
      );
      const nf = validatedDataFromExcel
        .filter(
          (shareFromExcel) =>
            !shareholderNumbersFromDB.includes(shareFromExcel.shareholderNumber)
        )
        .map(
          (shareFromExcel) =>
            `Shareholders not found for number: ${shareFromExcel.shareholderNumber}`
        );

      message = nf.join(", ");
      throw new Error();
    }
    const shareUploadHistory = await prisma.shareUploadHistory.create({
      data: {
        ownershipType: formData.ownershipType,
        ownershipDate: formData.ownershipDate,
        remarks: formData.remarks,
      },
    });
    const sharesToCreate: Omit<Share, "id">[] = [];
    const shareHistoryToCreate: Omit<ShareHistory, "id">[] = [];
    const operations: any = [];
    for (const [index, share] of validatedDataFromExcel.entries()) {
      {
        const shareholder = shareholdersFromDb.find(
          (shFromDb) => shFromDb.number == share.shareholderNumber
        );

        const revisedUnitsOfShare = Number(
          (shareholder!.ownedUnitsOfShare + share.unitsOfShare).toFixed(2)
        );
        const revisedWacc = Number(
          (
            (shareholder!.wacc * shareholder!.ownedUnitsOfShare +
              share.cost * share.unitsOfShare) /
            revisedUnitsOfShare
          ).toFixed(4)
        );

        operations.push(
          prisma.shareholder.updateMany({
            where: { id: shareholder!.id },
            data: {
              ownedUnitsOfShare: revisedUnitsOfShare,
              wacc: revisedWacc,
            },
          })
        );
        sharesToCreate.push({
          unitsOfShare: share.unitsOfShare,
          cost: share.cost,
          remarks: share.remarks + "|" + formData.remarks,
          ownershipType: formData.ownershipType,
          ownershipDate: formData.ownershipDate,
          shareholderId: shareholder!.id,
        });
        const date = new Date();
        shareHistoryToCreate.push({
          ownershipType: formData.ownershipType,
          unitsOfShareChanged: share.unitsOfShare,
          balanceUnitsOfShare: revisedUnitsOfShare,
          ratePerShare: share.cost,
          transactionDate: formData.ownershipDate,
          remarks: share.remarks + "|" + formData.remarks,
          shareholderId: shareholder!.id,
          shareUploadHistoryId: shareUploadHistory.id,
          shareTransferHistoryId: null,
          entryDateTime: date,
        });
      }
    }
    operations.push(
      prisma.share.createMany({
        data: sharesToCreate,
      })
    );
    operations.push(
      prisma.shareHistory.createMany({
        data: shareHistoryToCreate,
      })
    );

    const results = await prisma.$transaction(operations);
    message += `Saved ${shareholdersFromDb.length} records to database successfully`;

    return NextResponse.json(
      { success: true, message: message },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { success: false, message: message },
      { status: 400 }
    );
  }
}
