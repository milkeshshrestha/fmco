import { z } from "zod";

export const ShareUploadSchema = z.object({
  file: z.instanceof(File, { message: "File is required" }).refine(
    (file) =>
      [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
        "application/vnd.ms-excel", // .xls
      ].includes(file.type),
    {
      message: "Only .xls or .xlsx files are allowed",
    }
  ),
  ownershipType: z.enum([
    "Promoter_Share_Purchase",
    "Ipo_Purchase",
    "Bonus_Share",
    "Right_Share",
    "Other",
  ]),
  ownershipDate: z.string().date(), // Corrected to use datetime for validation
  remarks: z.string(),
});

export const shareSchema = z.object({
  shareholderNumber: z.coerce.number(),
  unitsOfShare: z.coerce.number(),
  cost: z.coerce.number(),
  remarks: z.string().nullable(),
});
