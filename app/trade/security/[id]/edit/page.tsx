"use server";

import CreateEditSecurity from "@/components/createEditSecurity";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

export default async function EditSecurityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: securityId } = await params;
  const security = await prisma.security.findFirst({
    where: { id: Number(securityId) },
  });
  if (security) return <CreateEditSecurity security={security} />;
  else return notFound();
}
