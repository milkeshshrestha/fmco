"use server";
import prisma from "@/prisma/client";
import { Shareholder } from "@prisma/client";

export async function getAllShareholders(): Promise<Shareholder[]> {
  return await prisma.shareholder.findMany();
}

export async function getAllShareholdersWithDividend() {
  return await prisma.shareholder.findMany({ include: { dividend: true } });
}
