"use server";
import DividendHistoryList from "@/components/dividendList";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
export default async function SingleDividendPaymentListPage() {
  try {
    const dividendListWithoutUploadConnection = await prisma.dividend.findMany({
      where: { dividendUploadHistoryId: null },
      include: { shareholder: true },
    });
    return (
      <DividendHistoryList
        dividendListFromDbWithShareholder={dividendListWithoutUploadConnection}
        title="Dividend list (single entries) "
      />
    );
  } catch (e) {
    return notFound();
  }
}
