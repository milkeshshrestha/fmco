"use server";
import prisma from "@/prisma/client";

export default async function deleteDividendUploadHistory(
  dividendUploadHistoryId: number
) {
  await prisma.dividend.deleteMany({
    where: { dividendUploadHistoryId: dividendUploadHistoryId },
  });

  //deletemany dont return error if id not found
  await prisma.dividendUploadHistory.deleteMany({
    where: { id: dividendUploadHistoryId },
  });
  return {
    success: true,
    message: "Dividend upload history deleted successfully.",
  };
}
