import { NextRequest, NextResponse } from "next/server";
import { aggregateErrors } from "@/util/zodErrorAggregator";
import prisma from "@/prisma/client";
import * as xlsx from "xlsx";
import { z } from "zod";
import { ShareUploadSchema } from "@/zod.schema/shareSchema";

export async function POST(request: NextRequest, res: NextResponse) {
  try {
    const formData = Object.fromEntries(await request.formData()) as z.infer<
      typeof ShareUploadSchema
    >;
    const file = formData.file;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Read the file using xlsx
    const workbook = xlsx.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet, {
      header: 1,
      defval: "", // to consider empty cell value
      blankrows: false,
    });
    //console.log(data);
    // Convert the data to JSON
    const rows = data.slice(1).map((row: any) => ({
      shareholderNumber: row[0],
      unitsOfShare: row[1],
      cost: row[2],
      remarks: row[3],
    }));
    const shareSchema = z.object({
      shareholderNumber: z.coerce.number(),
      unitsOfShare: z.coerce.number(),
      cost: z.coerce.number(),
      remarks: z.string().nullable(),
    });
    // Validate each row against the schema
    var errorRows: any = [];
    for (const [index, row] of rows.entries()) {
      const validationResponse = await shareSchema.safeParseAsync(row);
      validationResponse.success
        ? true
        : errorRows.push(
            `Error at Row: ${
              index +
              1 +
              ". Shareholder Number:" +
              row.shareholderNumber +
              ". Message:" +
              aggregateErrors(validationResponse.error.flatten().fieldErrors)
            }`
          );
    }
    let error = "";
    let message = "";
    //console.log(errorRows);
    if (errorRows.length > 0) {
      message = errorRows.join(" \n ").toString();
    } else {
      //create shareUploadHistory

      let successCount = 0;
      const shareUploadHistory = await prisma.shareUploadHistory.create({
        data: {
          ownershipType: formData.ownershipType,
          ownershipDate: formData.ownershipDate,
          remarks: formData.remarks,
        },
      });
      rows.forEach(async (row) => {
        const shareholder = await prisma.shareholder.findUnique({
          where: { number: row.shareholderNumber },
          //   include: {
          //     waccHistory: { take: 1, orderBy: { calculationDate: "desc" } },
          //   },
        });
        if (shareholder) {
          const revisedUnitsOfShare = Number(
            (shareholder.ownedUnitsOfShare + row.unitsOfShare).toFixed(2)
          );
          const revisedWacc = Number(
            (
              (shareholder.wacc * shareholder.ownedUnitsOfShare +
                row.cost * row.unitsOfShare) /
              revisedUnitsOfShare
            ).toFixed(4)
          );
          await prisma.shareholder.update({
            where: { number: row.shareholderNumber },
            data: {
              ownedUnitsOfShare: revisedUnitsOfShare,
              wacc: revisedWacc,
              share: {
                create: {
                  unitsOfShare: row.unitsOfShare,
                  cost: row.cost,
                  remarks: row.remarks + "|" + formData.remarks,
                  ownershipType: formData.ownershipType,
                  ownershipDate: formData.ownershipDate,
                },
              },
              shareHistory: {
                create: {
                  ownershipType: formData.ownershipType,
                  unitsOfShareChanged: row.unitsOfShare,
                  balanceUnitsOfShare: revisedUnitsOfShare,
                  ratePerShare: row.cost,
                  transactionDate: formData.ownershipDate,
                  remarks: row.remarks + "|" + formData.remarks,

                  shareUploadHistory: {
                    connect: { id: shareUploadHistory.id },
                  },
                },
              },
              waccHistory: {
                create: {
                  totalCost: Number(
                    (revisedWacc * revisedUnitsOfShare).toFixed(2)
                  ),
                  totalUnitsOfShare: revisedUnitsOfShare,
                  wacc: revisedWacc,
                  calculationDate: formData.ownershipDate,
                },
              },
            },
          });
          successCount++;
        } else {
          message =
            message +
            "\n Error: Shareholder not found with number: " +
            row.shareholderNumber;
        }
      });

      message =
        message +
        "Saved " +
        successCount +
        " number of rows to database successfully";

      return NextResponse.json(
        { success: true, message: message },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { success: false, message: message },
      { status: 400 }
    );
  } catch (e) {
    console.log(e);
  }
}
