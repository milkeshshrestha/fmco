"use server";

import prisma from "@/prisma/client";
import {
  TransactionSummaryBySecurityAndDateWithClassification,
  TransactionSummaryBySecurityAndDateWithoutClassification,
} from "@/services/transactionDetail";

export async function getTransactionsOfTheDay(date: Date) {
  const transactionDate = date.toISOString().split("T")[0];
  const transactionsOfTheDay = await prisma.securityTransaction.findFirst({
    where: { transactionDate },
    include: { securityTransactionDetail: { include: { security: true } } },
  });
  return transactionsOfTheDay;
}
export async function getTransactionsOfRange(fromDate: Date, toDate: Date) {
  const transactions = await prisma.security.findMany({
    where: {
      securityTransactionDetail: {
        some: {
          securityTransaction: {
            transactionDate: {
              gte: fromDate.toISOString().split("T")[0],
              lte: toDate.toISOString().split("T")[0],
            },
          },
        },
      },
    },
    include: {
      securityTransactionDetail: { include: { securityTransaction: true } },
    },
  });

  return transactions;
}
export async function getSecuritiesList() {
  const securities = await prisma.security.findMany({
    orderBy: { name: "asc" },
  });
  return securities;
}

export async function getTransactionSummaryByDate(
  fromDate: string,
  toDate: string
) {
  const result = await prisma.$queryRawUnsafe<
    {
      transactionDate: string;
      additionQuantity: number;
      salesQuantity: number;
      additionAmount: number;
      salesAmount: number;
    }[]
  >(
    `
  SELECT st."transactionDate",  
  sum(CASE WHEN sd.quantity >= 0 THEN sd."quantity" END) AS "additionQuantity",
  sum(CASE WHEN sd.quantity <= 0 THEN sd."quantity" END) AS "salesQuantity",
  sum(CASE WHEN sd.quantity >= 0 THEN sd."amount" END) AS "additionAmount",
  sum(CASE WHEN sd.quantity <= 0 THEN sd."amount" END) AS "salesAmount"
FROM public."SecurityTransaction" as st 
join "SecurityTransactionDetail" as sd on sd."securityTransactionId"=st."id" where st."transactionDate">=$1 and st."transactionDate"<=$2
group by st."transactionDate" order by st."transactionDate"
  `,
    fromDate,
    toDate
  );
  return result;
}
export type TransactionSummaryBySecurityWithClassification = {
  securityId: number;
  securityName: string;
  securityShortName: string;
  securityClassificationAsPerNFRS: string;
  additionQuantity: number;
  salesQuantity: number;
  additionAmount: number;
  salesAmount: number;
};
export async function getTransactionSummaryBySecurityWithClassification(
  fromDate: string,
  toDate: string
) {
  const result = await prisma.$queryRawUnsafe<
    TransactionSummaryBySecurityWithClassification[]
  >(
    `
  SELECT s."id" as "securityId", s."name" as "securityName", s."shortName" as "securityShortName" , sd."securityClassificationAsPerNFRS" as "securityClassificationAsPerNFRS",
  sum(CASE WHEN sd.quantity >= 0 THEN sd."quantity" END) AS "additionQuantity",
  sum(CASE WHEN sd.quantity <= 0 THEN sd."quantity" END) AS "salesQuantity",
  sum(CASE WHEN sd.quantity >= 0 THEN sd."amount" END) AS "additionAmount",
  sum(CASE WHEN sd.quantity <= 0 THEN sd."amount" END) AS "salesAmount"
FROM public."SecurityTransaction" as st 
join "SecurityTransactionDetail" as sd on sd."securityTransactionId"=st."id" 
join "Security" as s on s.id= sd."securityId" where st."transactionDate">=$1 and st."transactionDate"<=$2
group by s.id, s.name,s."shortName",sd."securityClassificationAsPerNFRS" order by s."name", sd."securityClassificationAsPerNFRS"
  `,
    fromDate,
    toDate
  );
  return result;
}

export async function getTransactionSummaryBySecurityAndDateWithClassification(
  toDate: string
) {
  const result = await prisma.$queryRawUnsafe<
    TransactionSummaryBySecurityAndDateWithClassification[]
  >(
    `
  SELECT s."id" as "securityId", s."name" as "securityName", s."shortName" as "securityShortName",sd."securityClassificationAsPerNFRS" as "securityClassificationAsPerNFRS", st."transactionDate",
  COALESCE(sum(CASE WHEN sd.quantity >= 0 THEN sd."quantity" END),0) AS "additionQuantity",
  COALESCE(sum(CASE WHEN sd.quantity <= 0 THEN -sd."quantity" END),0) AS "salesQuantity",
  COALESCE(sum(CASE WHEN sd.quantity >= 0 THEN sd."amount" END),0) AS "additionAmount",
  COALESCE(sum(CASE WHEN sd.quantity <= 0 THEN sd."amount" END),0) AS "salesAmount"
FROM public."SecurityTransaction" as st 
join "SecurityTransactionDetail" as sd on sd."securityTransactionId"=st."id" 
join "Security" as s on s.id= sd."securityId" where  st."transactionDate"<=$1
group by s.id, s.name,s."shortName",sd."securityClassificationAsPerNFRS" ,st."transactionDate" order by s."name" asc,sd."securityClassificationAsPerNFRS" asc, st."transactionDate" asc
  `,
    toDate
  );
  return result;
}

export async function getTransactionSummaryBySecurityAndDateWithoutClassification(
  toDate: string
) {
  const result = await prisma.$queryRawUnsafe<
    TransactionSummaryBySecurityAndDateWithoutClassification[]
  >(
    `
  SELECT s."id" as "securityId", s."name" as "securityName", s."shortName" as "securityShortName", st."transactionDate",
  COALESCE(sum(CASE WHEN sd.quantity >= 0 THEN sd."quantity" END),0) AS "additionQuantity",
  COALESCE(sum(CASE WHEN sd.quantity <= 0 THEN -sd."quantity" END),0) AS "salesQuantity",
  COALESCE(sum(CASE WHEN sd.quantity >= 0 THEN sd."amount" END),0) AS "additionAmount",
  COALESCE(sum(CASE WHEN sd.quantity <= 0 THEN sd."amount" END),0) AS "salesAmount"
FROM public."SecurityTransaction" as st 
join "SecurityTransactionDetail" as sd on sd."securityTransactionId"=st."id" 
join "Security" as s on s.id= sd."securityId" where  st."transactionDate"<=$1
group by s.id, s.name, s."shortName" ,st."transactionDate" order by s."name" asc, st."transactionDate" asc
  `,
    toDate
  );
  return result;
}
