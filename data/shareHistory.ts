"use server";
import prisma from "@/prisma/client";
import { ShareHistory, Shareholder } from "@prisma/client";

export async function getAllShareHistory(): Promise<
  ShareholderWithShareHistory[]
> {
  const shareholderShareHisotryDb = await prisma.shareholder.findMany({
    include: { shareHistory: true },
  });
  const ss = shareholderShareHisotryDb.map((shareholder) => {
    const { shareHistory, ...rest } = shareholder;
    return shareHistory.map((s) => ({ ...rest, ...s }));
  });
  console.log(ss.flat());
  return ss.flat();
}
export type ShareholderWithShareHistory = ShareHistory &
  Omit<Shareholder, "id">;
