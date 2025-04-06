"use server";
import CreateEditShareholder from "@/components/createEditShareholder";
import ShareholderInformation from "@/components/shareholderInformation";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
export default async function ShareholderEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: shareholderId } = await params;

  if (isNaN(Number(shareholderId)) && shareholderId.trim() == "")
    return notFound();

  const shareholder = await prisma.shareholder.findFirst({
    where: { id: Number(shareholderId) },
  });
  if (!shareholder) return notFound();
  return <CreateEditShareholder initialValues={shareholder} />;
}
