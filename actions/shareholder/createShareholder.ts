"use server";
import { Shareholder } from "@prisma/client";
import prisma from "@/prisma/client";
import { shareholderSchema } from "@/zod.schema/shareholderSchema";
import { z } from "zod";
export default async function saveShareholder(
  shareholder: z.infer<typeof shareholderSchema>
) {
  const validationResponse = shareholderSchema.safeParse(shareholder);
  if (validationResponse.success) {
    await prisma.shareholder.upsert({
      where: { id: shareholder.id ?? 0 }, //id: shareholder.id ?? 0 number: shareholder.number
      update: { ...shareholder },
      create: {
        ...shareholder,
        wacc: 0,
        ownedUnitsOfShare: 0,
        dividendBalance: 0,
      },
    });
    return { success: true, message: "Shareholder saved successfully" };
  } else {
    return { success: false, messsage: "Incomplete data provided" };
  }
}
