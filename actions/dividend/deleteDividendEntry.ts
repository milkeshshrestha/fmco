"use server";
import prisma from "@/prisma/client";

export default async function deleteDividendEntry(dividendId: number) {
  //deletemany dont return error if id not found
  await prisma.dividend.deleteMany({
    where: { id: dividendId },
  });
  return {
    success: true,
    message: "Dividend entry deleted successfully.",
  };
}
