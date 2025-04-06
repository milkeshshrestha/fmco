"use server";
import prisma from "@/prisma/client";
export default async function getAllShareholder() {
  const shareholderList = await prisma.shareholder.findMany();
}
