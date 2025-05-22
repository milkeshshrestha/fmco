"use server";
import { SecurityListTable } from "@/components/securityList";
import prisma from "@/prisma/client";

export default async function SecurityListPage() {
  const data = await prisma.security.findMany();
  return <SecurityListTable securityList={data} />;
}
