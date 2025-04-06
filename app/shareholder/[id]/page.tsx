"use server";
import ShareholderInformation from "@/components/shareholderInformation";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
export default async function ShareholderInformationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: shareholderId } = await params;
  // Check if the shareholderId is a valid number
  if (isNaN(Number(shareholderId)) || shareholderId.trim() == "")
    return notFound();
  const shareholderInformation = await prisma.shareholder.findFirst({
    where: { id: Number(shareholderId) },
    include: {
      dividend: true,
      share: true,
      shareHistory: {
        include: { shareTransferHistory: true },
      },
      waccHistory: true,
    },
  });
  if (!shareholderInformation) return notFound();
  return (
    <div className="">
      <ShareholderInformation shareholderInformation={shareholderInformation} />
    </div>
  );
}
