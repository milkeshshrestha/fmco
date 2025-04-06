import { z } from "zod";

export const shareholderUploadFormSchema = z.object({
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
