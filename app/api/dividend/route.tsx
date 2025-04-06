import * as xlsx from "xlsx";
import { NextRequest, NextResponse } from "next/server";
import {
  dividendSchema,
  dividendUploadFormSchema,
} from "@/zod.schema/dividendSchema";
import { aggregateErrors } from "@/util/zodErrorAggregator";
import prisma from "@/prisma/client";
type DividendDataFromExcel = {
  shareholderNumber: number;
  amount: number;
  transactionDate: string;
  sendingBankName: string | null;
  sendingBankAccount: string | null;
  receivingBankName: string | null;
  receivingBankAccount: string | null;
  remarks: string;
};
export async function POST(request: NextRequest, res: NextResponse) {
  let message: string = "";
  let success: boolean = false;
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const dividendUploadType = formData.get("dividendUploadType");
    const remarks = formData.get("remarks");
    const transactionDateRange = formData.get("transactionDateRange");

    //let fields: { number?: string; dob?: string } | undefined;

    const dividendUploadFormValidationResponse =
      dividendUploadFormSchema.safeParse({
        dividendUploadType,
        file,
        remarks,
        transactionDateRange,
      });

    if (!dividendUploadFormValidationResponse.success) {
      message = aggregateErrors(
        dividendUploadFormValidationResponse.error.flatten().fieldErrors
      );
      throw new Error();
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
      transactionDate: row[0],

      shareholderNumber: row[1],
      amount: row[2],
      sendingBankName: row[3],
      sendingBankAccount: row[4],
      receivingBankName: row[5],
      receivingBankAccount: row[6],
      remarks: row[7],
      shareholderId: 0,
    }));
    if (rows.length == 0) {
      message = "No data to save.";
      throw new Error();
    }

    // Validate each row against the schema
    var errorRows: any = [];
    let validatedDataFromExcel: DividendDataFromExcel[] = [];
    for (const [index, row] of rows.entries()) {
      const validationResponse = await dividendSchema.safeParseAsync(row);
      validationResponse.success
        ? validatedDataFromExcel.push(validationResponse.data)
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
    //check if shareholder number exists
    const shareholderNumberListInExcelFile = validatedDataFromExcel.map(
      (r) => r.shareholderNumber
    );

    const shareholdersFromDb = await prisma.shareholder.findMany({
      where: { number: { in: shareholderNumberListInExcelFile } },
    });
    if (shareholdersFromDb.length !== rows.length) {
      const shareholderNumbersFromDB = shareholdersFromDb.map(
        (sh) => sh.number
      );
      const shareholderNotFoundInDb = shareholderNumberListInExcelFile.filter(
        (numberInExcel) => shareholderNumbersFromDB.includes(numberInExcel)
      );
      let nf: string[] = [];
      validatedDataFromExcel.forEach((dividendFromExcel, index) => {
        const sh = shareholdersFromDb.find(
          (shFromDb) => shFromDb.number == dividendFromExcel.shareholderNumber
        );
        if (!sh)
          nf.push(
            dividendFromExcel.shareholderNumber + " at SNo. " + (index + 1)
          );
        if (sh) sh.dividendBalance += dividendFromExcel.amount;
      });
      if (nf.length > 0)
        errorRows.push("Shareholders not found for number:" + nf.join(", "));
    }

    //console.log(errorRows);
    if (errorRows.length > 0) {
      message = errorRows.join(" \n ").toString();
      throw new Error();
    } else {
      // save to database
      const dividendListToSave = rows.map(({ shareholderNumber, ...rest }) => {
        return {
          ...rest,
          shareholderId: shareholdersFromDb.find(
            (sh) => sh.number == shareholderNumber
          )!.id, //! for making sure that shareholder exists
        };
      });
      const { file, ...dividendUploadHistory } =
        dividendUploadFormValidationResponse.data!;
      //create new div upload history and save dividends
      const newDividendUploadHistory =
        await prisma.dividendUploadHistory.create({
          data: {
            ...dividendUploadHistory,
            dividend: { createMany: { data: dividendListToSave } },
          },
        });
      await Promise.all(
        shareholdersFromDb.map((updatedSh) =>
          prisma.shareholder.update({
            where: { id: updatedSh.id },
            data: { dividendBalance: updatedSh.dividendBalance },
          })
        )
      );

      success = true;
      message =
        "Saved " + rows.length + " number of rows to database successfully";
    }

    return NextResponse.json(
      {
        success,
        message,
      },
      { status: success ? 200 : 500 }
    );
  } catch (error: any) {
    return NextResponse.json({ success, message }, { status: 400 });
  }
}
