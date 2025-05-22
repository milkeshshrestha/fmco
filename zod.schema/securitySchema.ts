import { SecurityClassification } from "@prisma/client";
import { z } from "zod";

const secClassification = Object.keys(SecurityClassification) as [
  string,
  ...string[]
]; //["Equity","Bond","Mutual_Fund","Other"];

export const SecuritySchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  shortName: z.string().regex(/^\S+$/, {
    message: "Enter short name without spaces",
  }),
  securityClassification: z.enum(secClassification),
});
