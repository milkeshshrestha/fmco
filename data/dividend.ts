"use server";
import prisma from "@/prisma/client";

export async function getAllDividendWithShareholder() {
  return await prisma.dividend.findMany({
    orderBy: [{ transactionDate: "asc" }, { entryDate: "asc" }],
    include: { shareholder: true },
  });
}
export async function getAllDividendUploadList() {
  return await prisma.dividendUploadHistory.findMany();
}
