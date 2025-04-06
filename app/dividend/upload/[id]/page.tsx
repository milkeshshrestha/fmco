"use server";
import DividendHistoryList from "@/components/dividendList";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
export default async function DividendDetailByUploadIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  try {
    const dividendList = await prisma.dividend.findMany({
      where: { dividendUploadHistoryId: Number(id) },
      include: { shareholder: true },
    });

    return (
      <DividendHistoryList
        dividendListFromDbWithShareholder={dividendList}
        title="Dividend Upload List"
      />
    );
  } catch (e) {
    return notFound();
  }
}
