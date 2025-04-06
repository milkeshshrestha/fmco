import { z } from "zod";

export const ShareTransferFormSchema = z
  .object({
    transferingShareholderId: z
      .number()
      .min(1, "Select transfering shareholder"),
    receivingShareholderId: z.number().min(1, "Select receiving shareholder"),
    transferredUnitsOfShare: z.coerce
      .number()
      .min(0.01, "Invalid number of shares"),

    transferType: z.enum(["Purchase_Sale", "Other"]),
    transferRate: z.coerce.number().min(0),
    remarks: z.string().min(1),
    transferDate: z.string().date(),
  })
  .refine(
    (shareholder) =>
      shareholder.receivingShareholderId !==
        shareholder.transferingShareholderId &&
      !!shareholder.receivingShareholderId &&
      !!shareholder.transferingShareholderId,
    {
      message: "Sender and receiver cannot be same",
      path: ["receivingShareholderId"],
    }
  );
