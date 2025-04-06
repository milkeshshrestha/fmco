import prisma from "@/prisma/client";
import { z } from "zod";

export const dividendUploadFormSchema = z.object({
  dividendUploadType: z.enum(["Dividend_Allocation", "Dividend_Payment"]),
  remarks: z.string().min(1, "Remarks is required"),
  transactionDateRange: z.string({
    message: "Required in format: from YYYY-MM-DD to YYYY-MM-DD",
  }),
  file: z
    .instanceof(File)
    .refine(
      (file) =>
        file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      {
        message: "Only Excel files are allowed",
      }
    ),
});

export const dividendSchema = z
  .object({
    amount: z.coerce.number({ message: "Amount is required" }),

    transactionDate: z
      .string({ message: "Transaction Date is missing." })
      .min(1, { message: "Transaction Date is missing." }),
    remarks: z
      .string({ message: "Remarks is missing." })
      .min(1, { message: "Remarks is missing." }),
    sendingBankName: z.string().nullable(),
    sendingBankAccount: z.string().nullable(),
    receivingBankName: z.string().nullable(),
    receivingBankAccount: z.string().nullable(),
    shareholderNumber: z.coerce.number({
      message: "Shareholder number is required.",
    }),
    // .refine(
    //   async (number) => {
    //     const shareholder = await prisma.shareholder.findUnique({
    //       where: { number: Number(number) },
    //     });

    //     return !!shareholder;
    //   },
    //   {
    //     message: "Invalid shareholder number",
    //   }
    // ),
  })
  .refine(
    (data) => {
      return (
        data.amount > 0 ||
        (data.amount < 0 &&
          data.sendingBankName &&
          data.sendingBankName.trim().length > 0)
      );
    },
    {
      message: "Sending Bank name for dividend payment required",
      path: ["sendingBankName"], // path of error
    }
  )
  .refine(
    (data) => {
      return data.amount > 0 || (data.amount < 0 && !!data.sendingBankAccount);
    },
    {
      message: "Sending Bank account no. for dividend payment required",
      path: ["sendingBankAccount"], // path of error
    }
  )
  .refine(
    (data) => {
      return data.amount > 0 || (data.amount < 0 && !!data.receivingBankName);
    },
    {
      message: "Receiving Bank name for dividend payment required",
      path: ["receivingBankName"], // path of error
    }
  )
  .refine(
    (data) => {
      return (
        data.amount > 0 || (data.amount < 0 && !!data.receivingBankAccount)
      );
    },
    {
      message: "Receiving Bank account no. for dividend payment required",
      path: ["receivingBankAccount"], // path of error
    }
  );

export const dividendArraySchema = z.array(dividendSchema);
export const dividendSchemaForClient = z.object({
  shareQuantity: z
    .number({ message: "Share Quantity is required" })
    .min(0, "Share Quantity cannot be negative"),
  declaredRate: z
    .number({ message: "Declared rate is required" })
    .min(0, "Declared rate cannot be negative"),
  declaredAmount: z
    .number({ message: "Declared Amount is required" })
    .min(0, "Declared Amount cannot be negative"),
  paidToDateAmount: z
    .number({ message: "Dividend Paid to date is required" })
    .min(0, "Dividend Paid to date cannot be negative"),

  declaredDate: z
    .string({ message: "Declared Date is missing." })
    .min(1, { message: "Declared Date is missing." }),
  shareholderNumber: z.string({ message: "Shareholder number is required." }),
});
