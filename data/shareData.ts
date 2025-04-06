"use server";
import prisma from "@/prisma/client";
import { Prisma, Share, Shareholder } from "@prisma/client";
type ShareholderDb = Prisma.ShareholderGetPayload<{ include: { share: true } }>;
export async function getAllShare(): Promise<ShareholderWithShare[]> {
  const shareholderDb = await prisma.shareholder.findMany({
    include: { share: true },
  });
  const ss = shareholderDb.map((shareholder) => {
    const { share, ...rest } = shareholder;
    return share.map((s) => ({ ...rest, ...s }));
  });
  //console.log(ss.flat());
  return ss.flat();
}
export type ShareholderWithShare = Share & Omit<Shareholder, "id">;

export type ShareDataFromDb = {
  shareholderId: number;
  shareholder: { name: string; number: number };
  balanceUnitsOfShare: number;
  transactionDate: String;
};
export async function getAllShareAsOn(
  date: String
): Promise<ShareDataFromDb[]> {
  const shareData = (await prisma.shareHistory.findMany({
    where: { transactionDate: { lte: date.toString() } },
    distinct: ["shareholderId"], //this is diff than distinct of sql, prisma inmemory process this
    orderBy: [
      { shareholderId: "asc" },
      { transactionDate: "desc" },
      { entryDateTime: "desc" },
    ],
    select: {
      shareholderId: true,
      balanceUnitsOfShare: true,
      transactionDate: true,
      shareholder: { select: { name: true, number: true } },
    },
  })) as ShareDataFromDb[] | [];

  return shareData;
}
