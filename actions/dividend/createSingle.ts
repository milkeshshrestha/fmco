"use server";
import prisma from "@/prisma/client";
import { dividendSchema } from "@/zod.schema/dividendSchema";
import { z } from "zod";

export default async function createSingleDividend(
  dividend: z.infer<typeof dividendSchema>
) {
  const sh = await prisma.shareholder.findFirst({
    where: { number: dividend.shareholderNumber },
  });
  if (!sh) return { success: false, message: "Shareholder not found" };
  const { shareholderNumber, ...dividendForDb } = dividend;
  await prisma.dividend.create({
    data: { ...dividendForDb, shareholderId: sh.id },
  });
  return { success: true, message: "Dividend entry created successfully" };
}
