import * as xlsx from "xlsx";
import { NextRequest, NextResponse } from "next/server";

import { aggregateErrors } from "@/util/zodErrorAggregator";
import { shareholderSchema } from "@/zod.schema/shareholderSchema";
import { shareholderUploadFormSchema } from "@/zod.schema/shareholderUploadFormSchema";
import prisma from "@/prisma/client";
export async function POST(request: NextRequest, res: NextResponse) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const uploadType = formData.get("uploadType");
    let error: string;
    let message: string;
    let success: boolean = false;
    let fields: { number?: string; dob?: string } | undefined;

    const validationResponse = shareholderUploadFormSchema.safeParse({
      uploadType,
      file,
    });

    if (!validationResponse.success) {
      message = "Input Error.";
      fields = validationResponse.data;
      error = aggregateErrors(validationResponse.error.flatten().fieldErrors);
    }
    // Object.fromEntries(
    //   Object.entries(validationResponse.error.flatten().fieldErrors).map(
    //     ([key, value]) => [key, value.join(", ")]
    //   )
    // ),

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Read the file using xlsx
    const workbook = xlsx.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet, {
      header: 1,
      defval: null, // to consider empty cell value
      blankrows: false,
    });
    //console.log(data);
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
    for (const [index, row] of rows.entries()) {
      const validationResponse = await shareholderSchema.safeParseAsync(row);
      validationResponse.success
        ? true
        : errorRows.push(
            `Error at Row: ${
              index +
              1 +
              ". Shareholder Number:" +
              row.number +
              ". Message:" +
              aggregateErrors(validationResponse.error.flatten().fieldErrors)
            }`
          );
    }

    //console.log(errorRows);
    if (errorRows.length > 0) {
      error = errorRows.join(" \n ").toString();
      message = "Excel upload failed";
    } else {
      // save to database
      error = "";
      for (var shareholder of rows) {
        //console.log(shareholder);
        try {
          await prisma.shareholder.upsert({
            where: { number: shareholder.number },
            update: { ...shareholder },
            create: {
              ...shareholder,
              wacc: 0,
              ownedUnitsOfShare: 0,
              dividendBalance: 0,
            },
          });
        } catch (error: any) {
          //console.log("got error");
          //console.log(error);
        }
      }

      success = true;
      message =
        "Saved " + rows.length + " number of rows to database successfully";
    }

    return NextResponse.json(
      {
        success,
        error,
        message,
      },
      { status: success ? 200 : 500 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
