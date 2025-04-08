import { NextRequest, NextResponse } from "next/server";
import { aggregateErrors } from "@/util/zodErrorAggregator";
import { shareholderSchema } from "@/zod.schema/shareholderSchema";
import { shareholderUploadFormSchema } from "@/zod.schema/shareholderUploadFormSchema";
import prisma from "@/prisma/client";
import getDataFromExcel from "@/data/extractExcel";
import { z } from "zod";
import getDuplicateArray from "@/services/getDuplicate";

export async function POST(request: NextRequest, res: NextResponse) {
  let message: string = "";
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const uploadType = formData.get("uploadType");

    const validationResponse = shareholderUploadFormSchema.safeParse({
      uploadType,
      file,
    });

    if (!validationResponse.success) {
      message = aggregateErrors(validationResponse.error.flatten().fieldErrors);
      throw new Error();
    }

    const data = await getDataFromExcel(validationResponse.data!.file);

    // Convert the data to JSON
    const rows = data.slice(1).map((row: any) => ({
      id: undefined,
      number: row[0],
      name: row[1],
      ctzOrRegNumber: row[2],
      ctzIssueDateOrRegDate: row[3],
      fatherName: row[4],
      address: row[5],
      contact: row[6],
      type: row[7],
      bankName: row[8],
      bankAccount: row[9],
      remarks: row[10],
    }));

    // Validate each row against the schema
    var errorRows: any = [];
    const validatedDataFromExcel: z.infer<typeof shareholderSchema>[] = [];
    for (const [index, row] of rows.entries()) {
      const validationResponse = await shareholderSchema.safeParseAsync(row);
      if (!validationResponse.success) {
        errorRows.push(
          `Error at Row: ${index + 1}. Shareholder Number: ${
            row.number
          }. Message:
              ${aggregateErrors(
                validationResponse.error.flatten().fieldErrors
              )}`
        );
      } else validatedDataFromExcel.push(validationResponse.data);
    }

    //console.log(errorRows);
    if (errorRows.length > 0) {
      message = errorRows.join(" \n ").toString();
      throw new Error();
    }
    //identify dupliate shareholder number
    //find and restrct duplicate shareholder number
    const duplicateShareholderInExcel = getDuplicateArray(
      validatedDataFromExcel,
      "number"
    );
    if (duplicateShareholderInExcel.length > 0) {
      message = `Error: Duplicate shareholder number found: ${duplicateShareholderInExcel
        .map((share) => share.id)
        .join(", ")}`;
      throw new Error();
    }

    // save to database
    const operations = validatedDataFromExcel.map((shareholder) =>
      prisma.shareholder.upsert({
        where: { number: shareholder.number },
        update: { ...shareholder },
        create: {
          ...shareholder,
          wacc: 0,
          ownedUnitsOfShare: 0,
          dividendBalance: 0,
        },
      })
    );

    await prisma.$transaction(operations);
    message =
      "Saved " + rows.length + " number of rows to database successfully";

    return NextResponse.json({ success: true, message }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: message },
      { status: 400 }
    );
  }
}
