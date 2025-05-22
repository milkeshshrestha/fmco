"use server";
import prisma from "@/prisma/client";
import { SecuritySchema } from "@/zod.schema/securitySchema";

export async function createEditSecurity(security: any) {
  //validate
  const validationResponse = SecuritySchema.safeParse(security);
  if (validationResponse.success) {
    const existingData = await prisma.security.findFirst({
      where: { shortName: validationResponse.data.shortName },
    });
    if (existingData && existingData.id !== validationResponse.data.id) {
      return { success: false, message: "Short name already exists." };
    }

    const { id, ...securityData } = security;
    await prisma.security.upsert({
      where: { id: security.id || 0 },
      update: securityData,
      create: security,
    });
    return { success: true, message: "Saved successfully" };
  } else {
    return { success: false, message: "Save failed" };
  }
}
