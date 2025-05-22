"use server";

import prisma from "@/prisma/client";

export async function deleteSecurity(securityId: number) {
  const existingRecordNumber = await prisma.securityTransactionDetail.count({
    where: { securityId },
  });
  if (existingRecordNumber > 0)
    return {
      success: false,
      message: "Security transaction record exists. Cannot delete security.",
    };
  else {
    await prisma.security.deleteMany({ where: { id: securityId } });
    return {
      success: true,
      message: "Security deleted.",
    };
  }
}
