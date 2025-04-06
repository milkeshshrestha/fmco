"use server";
import UploadedSharesDetailComponent from "@/components/uploadDetail";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
export default async function viewSharesUploadedById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (isNaN(Number(id))) return notFound();
  const sharesUploaded = await prisma.shareHistory.findMany({
    where: { shareUploadHistoryId: Number(id) },
    include: { shareholder: true },
  });
  return <UploadedSharesDetailComponent shareHistoryList={sharesUploaded} />;
}
