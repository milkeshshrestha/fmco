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

  // Create the dividend entry
  await prisma.dividend.create({
    data: {
      ...dividendForDb,
      amount: parseFloat(dividendForDb.amount.toFixed(2)),
      shareholderId: sh.id,
    },
  });

  // Update the shareholder's dividend balance
  await prisma.shareholder.update({
    where: { id: sh.id },
    data: {
      dividendBalance: {
        increment: parseFloat(dividendForDb.amount.toFixed(2)),
      },
    },
  });

  return { success: true, message: "Dividend entry created successfully" };
}
