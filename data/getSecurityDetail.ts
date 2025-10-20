"use server";
import { getTransactionSummaryBySecurityAndDateWithClassification } from "@/data/trade";
import {
  getSecurityBalanceWithClassification,
  getTransactionResultBySecurityAndDateWithClassification,
} from "@/services/transactionDetail";
import { getClosingPriceForSecurities } from "@/data/marketData";

import prisma from "@/prisma/client";

export async function getSecurityDetailWithNfrsClassificationAsOnDate(
  toDate: Date
) {
  const transactionDetail =
    await getTransactionSummaryBySecurityAndDateWithClassification(
      toDate.toISOString().split("T")[0]
    );
  const resultAfterCostCalc =
    getTransactionResultBySecurityAndDateWithClassification(transactionDetail);

  const grouped = getSecurityBalanceWithClassification(resultAfterCostCalc);

  return grouped;
}
export async function getSecurityDetailWithNfrsClassificationAsOnDateWithMarketData(
  toDate: Date
) {
  const data = await getSecurityDetailWithNfrsClassificationAsOnDate(toDate);
  const marketData = await getClosingPriceForSecurities(toDate, data);
  return marketData;
}
export type NfrsGainDetail = {
  securityId: number;
  name: string;
  shortName: string;
  securityClassificationAsPerNFRS: string;
  openingQuantity: number;
  openingAmount: number;
  purchaseQuantity: number;
  purchaseAmount: number;
  soldQuantity: number;
  soldAmount: number;
  closingQuantity: number;
  closingAmount: number;
  gain: number;
};
export async function calculateNfrsGainForSecurityAsOnDate(
  fromDate: Date,
  toDate: Date
): Promise<NfrsGainDetail[]> {
  const beginingPortfolio =
    await getSecurityDetailWithNfrsClassificationAsOnDateWithMarketData(
      fromDate
    );
  //console.log("beginingPortfolio", beginingPortfolio);
  const endingPortfolio =
    await getSecurityDetailWithNfrsClassificationAsOnDateWithMarketData(toDate);
  //console.log("endingPortfolio", endingPortfolio);
  const purchaseTransactionSummaryBySecurity =
    await getSecuritiesPurchasedBetweenDates(fromDate, toDate);
  // console.log(
  //   "purchaseTransactionSummaryBySecurity",
  //   purchaseTransactionSummaryBySecurity
  // );
  const soldTransactionSummaryBySecurity = await getSecuritiesSoldBetweenDates(
    fromDate,
    toDate
  );
  // console.log(
  //   "soldTransactionSummaryBySecurity",
  //   soldTransactionSummaryBySecurity
  // );
  const securityListRelatedToPeriod = Array.from(
    new Map(
      [
        ...beginingPortfolio.data.map((s) => [
          s.securityId,
          s.securityClassificationAsPerNFRS,
        ]),
        ...purchaseTransactionSummaryBySecurity.map((s) => [
          s.securityId,
          s.securityClassificationAsPerNFRS,
        ]),
      ].map((a) => [JSON.stringify(a), a])
    ).values()
  );

  //console.log("securityListRelatedToPeriod", securityListRelatedToPeriod);
  const securities = await prisma.security.findMany();
  const result = securityListRelatedToPeriod.map((s) => {
    const beginingDetail = beginingPortfolio.data.find(
      (b) =>
        b.securityId == Number(s[0]) &&
        b.securityClassificationAsPerNFRS == String(s[1])
    );
    const purchaseDetail = purchaseTransactionSummaryBySecurity.find(
      (p) =>
        p.securityId == Number(s[0]) &&
        p.securityClassificationAsPerNFRS == String(s[1])
    );
    const soldDetail = soldTransactionSummaryBySecurity.find(
      (sd) =>
        sd.securityId == Number(s[0]) &&
        sd.securityClassificationAsPerNFRS == String(s[1])
    );
    const closingDetail = endingPortfolio.data.find(
      (e) =>
        e.securityId == Number(s[0]) &&
        e.securityClassificationAsPerNFRS == String(s[1])
    );
    //console.log(s[0]);
    return {
      securityId: Number(s[0]),
      name: securities.find((sec) => sec.id == Number(s[0]))?.name || "",
      shortName:
        securities.find((sec) => sec.id == Number(s[0]))?.shortName || "",
      securityClassificationAsPerNFRS: String(s[1]),
      openingQuantity: beginingDetail ? beginingDetail.remainingQuantity : 0,
      openingAmount: beginingDetail ? beginingDetail.closingMarketValue : 0,
      purchaseQuantity: purchaseDetail ? purchaseDetail._sum.quantity || 0 : 0,
      purchaseAmount: purchaseDetail ? purchaseDetail._sum.amount || 0 : 0,
      soldQuantity: soldDetail ? -(soldDetail._sum.quantity || 0) : 0,
      soldAmount: soldDetail ? -(soldDetail._sum.amount || 0) : 0,
      closingQuantity: closingDetail ? closingDetail.remainingQuantity : 0,
      closingAmount: closingDetail ? closingDetail.closingMarketValue : 0,
      gain: 0,
    } as NfrsGainDetail;
  });
  //console.log(result);
  result.forEach(
    (r) =>
      (r.gain =
        r.soldAmount + r.closingAmount - (r.openingAmount + r.purchaseAmount))
  );
  //console.log(result);
  return result;
}

export async function getSecuritiesPurchasedBetweenDates(
  fromDate: Date,
  toDate: Date
) {
  const purchaseTransactionSummaryBySecurity =
    await prisma.securityTransactionDetail.groupBy({
      by: ["securityId", "securityClassificationAsPerNFRS"],
      where: {
        quantity: { gt: 0 },
        securityTransaction: {
          transactionDate: {
            gte: fromDate.toISOString().split("T")[0],
            lte: toDate.toISOString().split("T")[0],
          },
        },
      },
      _sum: { amount: true, quantity: true },
    });
  return purchaseTransactionSummaryBySecurity;
}
export async function getSecuritiesSoldBetweenDates(
  fromDate: Date,
  toDate: Date
) {
  const soldTransactionSummaryBySecurity =
    await prisma.securityTransactionDetail.groupBy({
      by: ["securityId", "securityClassificationAsPerNFRS"],
      where: {
        quantity: { lt: 0 },
        securityTransaction: {
          transactionDate: {
            gte: fromDate.toISOString().split("T")[0],
            lte: toDate.toISOString().split("T")[0],
          },
        },
      },
      _sum: { amount: true, quantity: true },
    });
  return soldTransactionSummaryBySecurity;
}
