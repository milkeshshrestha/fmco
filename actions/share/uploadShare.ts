"use server";

import { aggregateErrors } from "@/util/zodErrorAggregator";
import { join } from "path";
import prisma from "@/prisma/client";
import * as xlsx from "xlsx";
import { z } from "zod";
import { ShareUploadSchema } from "@/zod.schema/shareSchema";
import { Share } from "@prisma/client";

export async function uploadShareData(
  formData: z.infer<typeof ShareUploadSchema>
) {
  //   const file = formData.get("file") as File | null;
  //   if (!file) {
  //     return { message: "No file uploaded." };
  //   }

  //   const filePath = join(process.cwd(), "public/uploads", file.name);
  //return { message: "File uploaded successfully!" };
  //   try {
  //     await writeFile(filePath, buffer);
  //     return { message: "File uploaded successfully!" };
  //   } catch (error) {
  //     console.error("Upload error:", error);
  //     return { message: "Upload failed." };
  //   }
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
    error = errorRows.join(" \n ").toString();
    message = "Excel upload failed";
  } else {
    // save to database
    error = "";
    //rows.map((row))
    const allCreationPromise = rows.map((row) =>
      prisma.shareholder.update({
        where: { number: row.shareholderNumber },
        data: {
          share: {
            create: {
              ...row,
              ownershipType: formData.ownershipType,
              ownershipDate: formData.ownershipDate,
            },
          },
        },
      })
    );
    const result = await prisma.$transaction(allCreationPromise);
    console.log(result);
    //delete existing data
  }
}
