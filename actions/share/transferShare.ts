"use server";
import prisma from "@/prisma/client";
import { ShareTransferFormSchema } from "@/zod.schema/shareTransferSchema";
import { ShareTransferHistory } from "@prisma/client";

export default async function transferShares(
  shareTransferHistory: ShareTransferHistory
) {
  const validationResponse =
    ShareTransferFormSchema.safeParse(shareTransferHistory);
  if (!validationResponse.success)
    return { success: false, message: "Invalid input provided" };

  const transferingShareholder = await prisma.shareholder.findFirst({
    where: { id: shareTransferHistory.transferingShareholderId },
    include: {
      share: { orderBy: { ownershipDate: "asc" } },
    },
  });
  if (!transferingShareholder)
    return { success: false, message: "Transfering shareholder not found" };
  const sharesOfTransferingShareholder = transferingShareholder.share;

  const receivingShareholder = await prisma.shareholder.findFirst({
    where: { id: shareTransferHistory.receivingShareholderId },
    //include: { waccHistory: { take: 1, orderBy: { calculationDate: "desc" } } },
  });

  if (!receivingShareholder)
    return { success: false, message: "Receiver shareholder dont exists" };

  //   const costOfSharesWithTransferingShareholder =
  //     sharesOfTransferingShareholder.reduce(
  //       (prevValue, currentValue) =>
  //         prevValue + currentValue.unitsOfShare * currentValue.costOrWacc,
  //       0
  //     );
  if (
    transferingShareholder.ownedUnitsOfShare >=
    shareTransferHistory.transferredUnitsOfShare
  ) {
    const shareTransferHistoryFromDatabase =
      await prisma.shareTransferHistory.create({
        data: {
          ...shareTransferHistory,
          wacc: transferingShareholder.wacc,
          totalGain: Number(
            (
              shareTransferHistory.transferredUnitsOfShare *
              (shareTransferHistory.transferRate - transferingShareholder.wacc)
            ).toFixed(2)
          ),
          remarks: `sale @${shareTransferHistory.transferRate} by ${transferingShareholder.name} (${transferingShareholder.number}) with wacc @${transferingShareholder.wacc} to ${receivingShareholder.name} (${receivingShareholder.number})|${shareTransferHistory.remarks}`,
        },
      });

    //delete shares of existing shareholder

    let remainingUnitsToBeTransferred =
      shareTransferHistory.transferredUnitsOfShare;
    let i = 0;
    do {
      if (
        sharesOfTransferingShareholder[i].unitsOfShare <=
        remainingUnitsToBeTransferred
      ) {
        //delete existing share
        remainingUnitsToBeTransferred = Number(
          (
            remainingUnitsToBeTransferred -
            sharesOfTransferingShareholder[i].unitsOfShare
          ).toFixed(2)
        );
        await prisma.share.delete({
          where: { id: sharesOfTransferingShareholder[i].id },
        });
      } else {
        // reduce units of shares

        await prisma.share.update({
          where: { id: sharesOfTransferingShareholder[i].id },
          data: {
            ...sharesOfTransferingShareholder[i],
            unitsOfShare: Number(
              (
                sharesOfTransferingShareholder[i].unitsOfShare -
                remainingUnitsToBeTransferred
              ).toFixed(2)
            ),
          },
        });
        remainingUnitsToBeTransferred = 0;
      }
      i++;
    } while (remainingUnitsToBeTransferred > 0);

    const remainingSharesWithTransferingShareholderAfterTransfer = Number(
      (
        transferingShareholder.ownedUnitsOfShare -
        shareTransferHistory.transferredUnitsOfShare
      ).toFixed(2)
    );
    const remainingSharesWithReceivingShareholderAfterTransfer = Number(
      (
        receivingShareholder.ownedUnitsOfShare +
        shareTransferHistory.transferredUnitsOfShare
      ).toFixed(2)
    );
    //update receiving shareholder data
    await prisma.shareholder.update({
      where: { id: shareTransferHistory.transferingShareholderId },
      data: {
        ownedUnitsOfShare:
          remainingSharesWithTransferingShareholderAfterTransfer,
        shareHistory: {
          create: {
            ownershipType: shareTransferHistory.transferType,
            unitsOfShareChanged: -shareTransferHistory.transferredUnitsOfShare,
            balanceUnitsOfShare: Number(
              (
                transferingShareholder.ownedUnitsOfShare -
                shareTransferHistory.transferredUnitsOfShare
              ).toFixed(2)
            ),
            ratePerShare: shareTransferHistory.transferRate,
            transactionDate: shareTransferHistory.transferDate,
            shareTransferHistoryId: shareTransferHistoryFromDatabase.id,
            remarks: `sale @${shareTransferHistory.transferRate} wacc @${receivingShareholder.wacc} to ${receivingShareholder.name} (${receivingShareholder.number})|${shareTransferHistory.remarks}`,
          },
        },
      },
    });
    /*
     ******************************************************
     */
    //adjust wacc  for receiving shareholder
    const totalCostOfAllSharesAfterTransferOfReceivingShareholder = Number(
      (
        receivingShareholder.wacc * receivingShareholder.ownedUnitsOfShare +
        shareTransferHistory.transferredUnitsOfShare *
          shareTransferHistory.transferRate
      ).toFixed(2)
    );
    const waccRevisedOfReceivingShareholder = Number(
      (
        totalCostOfAllSharesAfterTransferOfReceivingShareholder /
        remainingSharesWithReceivingShareholderAfterTransfer
      ).toFixed(4)
    );
    //update receiving shareholder data
    await prisma.shareholder.update({
      where: { id: shareTransferHistory.receivingShareholderId },
      data: {
        ownedUnitsOfShare: remainingSharesWithReceivingShareholderAfterTransfer,
        wacc: waccRevisedOfReceivingShareholder,
        waccHistory: {
          create: {
            calculationDate: shareTransferHistory.transferDate,
            totalUnitsOfShare:
              remainingSharesWithReceivingShareholderAfterTransfer,
            totalCost: totalCostOfAllSharesAfterTransferOfReceivingShareholder,
            wacc: waccRevisedOfReceivingShareholder,
          },
        },
        share: {
          create: {
            ownershipType: shareTransferHistory.transferType,
            ownershipDate: shareTransferHistory.transferDate,
            cost: shareTransferHistory.transferRate,
            unitsOfShare: shareTransferHistory.transferredUnitsOfShare,
            remarks: `purchase @${shareTransferHistory.transferRate} from ${transferingShareholder.name} (${transferingShareholder.number}) |${shareTransferHistory.remarks}`,
          },
        },
        shareHistory: {
          create: {
            ownershipType: shareTransferHistory.transferType,
            unitsOfShareChanged: shareTransferHistory.transferredUnitsOfShare,
            balanceUnitsOfShare: Number(
              (
                receivingShareholder.ownedUnitsOfShare +
                shareTransferHistory.transferredUnitsOfShare
              ).toFixed(2)
            ),
            ratePerShare: shareTransferHistory.transferRate,
            transactionDate: shareTransferHistory.transferDate,
            shareTransferHistoryId: shareTransferHistoryFromDatabase.id,
            remarks: `purchase @${shareTransferHistory.transferRate} from ${transferingShareholder.name} (${transferingShareholder.number}) |${shareTransferHistory.remarks}`,
          },
        },
      },
    });

    return { success: true, message: "Transfer share completed" };
  } else {
    return {
      success: false,
      message: "Transfering shareholder dont have sufficient shares",
    };
  }
}
