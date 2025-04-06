"use server";
import prisma from "@/prisma/client";
export default async function getAllUploadHistory() {
  const uploadData = await prisma.shareUploadHistory.findMany({});
  return uploadData;
}
