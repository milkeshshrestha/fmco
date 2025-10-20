"use server";

import prisma from "@/prisma/client";
import { SecurityTransactionSaveSchema } from "@/zod.schema/securityTransactionSchema";
import { z } from "zod";

export const saveSecurityTransaction = async (
  securityTransactionDetail: z.infer<typeof SecurityTransactionSaveSchema>
) => {
  const securityTransactionValidationResponse =
    SecurityTransactionSaveSchema.safeParse(securityTransactionDetail);
  if (securityTransactionValidationResponse.error)
    return { success: false, message: "Incomplete or error data provided" };
  const transactionData = securityTransactionValidationResponse.data;
  let existingRecord = await prisma.securityTransaction.findFirst({
    where: {
      transactionDate: transactionData.transactionDate
        .toISOString()
        .split("T")[0],
    },
  });
  if (existingRecord) {
    //delete prev record
    await prisma.securityTransactionDetail.deleteMany({
      where: { securityTransactionId: existingRecord.id },
    });
    await prisma.securityTransaction.update({
      where: { id: existingRecord.id },
      data: { entryDate: new Date() },
    });
  } else {
    //create new
    existingRecord = await prisma.securityTransaction.create({
      data: {
        transactionDate: transactionData.transactionDate
          .toISOString()
          .split("T")[0],
      },
    });
  }
  const transactionDataForDb = transactionData.transactionDetail.map((td) => {
    return {
      securityId: td.securityId,
      quantity: td.isAdditionTransaction ? td.quantity : -td.quantity,
      price: td.price,
      amount: td.amount,
      securityAdditionNature: td.isAdditionTransaction
        ? td.securityAdditionNature
        : null,
      securityClassificationAsPerNFRS: td.securityClassificationAsPerNFRS,
      securityTransactionId: existingRecord.id,
      remarks: td.remarks,
    };
  });
  //create new record
  await prisma.securityTransactionDetail.createMany({
    data: transactionDataForDb,
  });
  return { success: true, message: "Record saved successfully" };
};
//const savedRecord = prisma.securityTransaction.create({data:})
