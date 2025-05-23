export type TransactionSummaryBySecurityAndDateWithClassification = {
  securityName: string;
  securityShortName: string;
  securityClassificationAsPerNFRS: string;
  transactionDate: string;
  additionQuantity: number;
  salesQuantity: number;
  additionAmount: number;
  salesAmount: number;
};
export type TransactionSummaryBySecurityAndDateWithoutClassification = Omit<
  TransactionSummaryBySecurityAndDateWithClassification,
  "securityClassificationAsPerNFRS"
>;

export type TransactionResultBySecurityAndDateWithClassification = {
  securityName: string;
  securityShortName: string;
  securityClassificationAsPerNFRS: string;
  transactionDate: string;
  additionQuantity: number;
  salesQuantity: number;
  additionAmount: number;
  salesAmount: number;
  cumQuantity: number;
  cumCost: number;
  remainingCost: number;
  remainingQuantity: number;
  wacc: number;
  gain: number | null;
};
export type TransactionResultBySecurityAndDateWithoutClassification = Omit<
  TransactionResultBySecurityAndDateWithClassification,
  "cumCost" | "cumQuantity" | "securityClassificationAsPerNFRS"
>;
export type TransactionResultBySecurityWithClassification = Omit<
  TransactionResultBySecurityAndDateWithoutClassification,
  "transactionDate" | "cumCost" | "cumQuantity"
>;
export type TransactionResultBySecurityWithoutClassification = Omit<
  TransactionResultBySecurityWithClassification,
  "transactionDate"
>;

export type SecutiyBalanceWithoutClassification = Omit<
  SecurityBalanceWithClassification,
  "securityClassificationAsPerNFRS"
>;
export type SecurityBalanceWithClassification = {
  securityName: string;
  securityShortName: string;
  securityClassificationAsPerNFRS: string;
  remainingCost: number;
  remainingQuantity: number;
  wacc: number;
};
export type SecurityBalanceWithoutClassification = {
  securityName: string;
  securityShortName: string;
  remainingCost: number;
  remainingQuantity: number;
  wacc: number;
};
export const getTransactionResultBySecurityAndDateWithClassification = (
  transactionDetail: TransactionSummaryBySecurityAndDateWithClassification[]
) => {
  let prevRecord: {
    securityShortName: string;
    securityClassificationAsPerNFRS: string;
    remainingQuantity: number;
    remainingCost: number;
  } | null = null;
  const resultAfterCostCalc = transactionDetail.map((security, index) => {
    if (
      !prevRecord ||
      prevRecord?.securityShortName != security.securityShortName ||
      prevRecord?.securityClassificationAsPerNFRS !=
        security.securityClassificationAsPerNFRS
    ) {
      //first item for the security
      const wacc =
        security.additionQuantity > 0
          ? security.additionAmount / security.additionQuantity
          : 0;
      prevRecord = {
        securityShortName: security.securityShortName,
        securityClassificationAsPerNFRS:
          security.securityClassificationAsPerNFRS,
        remainingQuantity: security.additionQuantity - security.salesQuantity,
        remainingCost:
          wacc * (security.additionQuantity - security.salesQuantity),
      };

      return {
        ...security,
        cumQuantity: security.additionQuantity,
        cumCost: security.additionAmount,
        remainingQuantity: prevRecord.remainingQuantity,
        remainingCost: prevRecord.remainingCost,
        wacc: wacc,
        gain:
          security.salesQuantity > 0
            ? security.salesAmount - wacc * security.salesQuantity
            : null,
      };
    } else {
      //purchase affects wacc not sales
      const securityQuantityAfterAddition =
        prevRecord.remainingQuantity + security.additionQuantity;
      const remainingSecurityAtEnd =
        securityQuantityAfterAddition - security.salesQuantity;

      const wacc =
        (prevRecord.remainingCost + security.additionAmount) /
        securityQuantityAfterAddition;
      const remainingCost = wacc * remainingSecurityAtEnd;

      const result = {
        ...security,
        cumQuantity: securityQuantityAfterAddition,
        cumCost: prevRecord.remainingCost + security.additionAmount,
        remainingCost: remainingCost,
        remainingQuantity: remainingSecurityAtEnd,
        wacc: remainingCost / remainingSecurityAtEnd,
        gain:
          security.salesQuantity > 0
            ? security.salesAmount - wacc * security.salesQuantity
            : null,
      };
      prevRecord = {
        securityShortName: security.securityShortName,
        securityClassificationAsPerNFRS:
          security.securityClassificationAsPerNFRS,
        remainingCost: remainingCost,
        remainingQuantity: remainingSecurityAtEnd,
      };
      return result;
    }
  });
  return resultAfterCostCalc;
};

export const getTransactionResultBySecurityAndDateWithoutClassification = (
  transactionDetail: TransactionSummaryBySecurityAndDateWithoutClassification[]
) => {
  let prevRecord: {
    securityShortName: string;
    remainingQuantity: number;
    remainingCost: number;
  } | null = null;
  const resultAfterCostCalc = transactionDetail.map((security, index) => {
    if (
      !prevRecord ||
      prevRecord?.securityShortName != security.securityShortName
    ) {
      //first item for the security
      const wacc =
        security.additionQuantity > 0
          ? security.additionAmount / security.additionQuantity
          : 0;
      prevRecord = {
        securityShortName: security.securityShortName,
        remainingQuantity: security.additionQuantity - security.salesQuantity,
        remainingCost:
          wacc * (security.additionQuantity - security.salesQuantity),
      };

      return {
        ...security,
        cumQuantity: security.additionQuantity,
        cumCost: security.additionAmount,
        remainingQuantity: prevRecord.remainingQuantity,
        remainingCost: prevRecord.remainingCost,
        wacc: wacc,
        gain:
          security.salesQuantity > 0
            ? security.salesAmount - wacc * security.salesQuantity
            : null,
      };
    } else {
      //purchase affects wacc not sales
      const securityQuantityAfterAddition =
        prevRecord.remainingQuantity + security.additionQuantity;
      const remainingSecurityAtEnd =
        securityQuantityAfterAddition - security.salesQuantity;

      const wacc =
        (prevRecord.remainingCost + security.additionAmount) /
        securityQuantityAfterAddition;
      const remainingCost = wacc * remainingSecurityAtEnd;

      const result = {
        ...security,
        cumQuantity: securityQuantityAfterAddition,
        cumCost: prevRecord.remainingCost + security.additionAmount,
        remainingCost: remainingCost,
        remainingQuantity: remainingSecurityAtEnd,
        wacc: remainingCost / remainingSecurityAtEnd,
        gain:
          security.salesQuantity > 0
            ? security.salesAmount - wacc * security.salesQuantity
            : null,
      };
      prevRecord = {
        securityShortName: security.securityShortName,
        remainingCost: remainingCost,
        remainingQuantity: remainingSecurityAtEnd,
      };
      return result;
    }
  });
  return resultAfterCostCalc;
};

export const getTransactionResultGroupedBySecurityWithClassification = (
  transactionDetail: TransactionResultBySecurityAndDateWithClassification[]
) => {
  const grouped = Object.values(
    transactionDetail.reduce((acc, item) => {
      const key = `${item.securityShortName}-${item.securityClassificationAsPerNFRS}`;
      if (!acc[key]) {
        const { cumCost, cumQuantity, gain, transactionDate, ...rem } = item;
        acc[key] = { ...rem, gain: item.gain ?? 0 };
      } else {
        acc[key].additionAmount += item.additionAmount;
        acc[key].additionQuantity += item.additionQuantity;
        acc[key].salesQuantity += item.salesQuantity;
        acc[key].salesAmount += item.salesAmount;
        acc[key].gain! += item.gain ?? 0;
        acc[key].remainingCost = item.remainingCost;
        acc[key].remainingQuantity = item.remainingQuantity;
        acc[key].wacc = item.wacc;
      }
      return acc;
    }, {} as Record<string, TransactionResultBySecurityWithClassification>)
  );
  return grouped;
};
export const getTransactionResultGroupedBySecurityWithoutClassification = (
  transactionDetail: TransactionResultBySecurityAndDateWithoutClassification[]
) => {
  const grouped = Object.values(
    transactionDetail.reduce((acc, item) => {
      const key = `${item.securityShortName}`;
      if (!acc[key]) {
        const { gain, transactionDate, ...rem } = item;
        acc[key] = { ...rem, gain: item.gain ?? 0 };
      } else {
        acc[key].additionAmount += item.additionAmount;
        acc[key].additionQuantity += item.additionQuantity;
        acc[key].salesQuantity += item.salesQuantity;
        acc[key].salesAmount += item.salesAmount;
        acc[key].gain! += item.gain ?? 0;
        acc[key].remainingCost = item.remainingCost;
        acc[key].remainingQuantity = item.remainingQuantity;
        acc[key].wacc = item.wacc;
      }
      return acc;
    }, {} as Record<string, TransactionResultBySecurityWithoutClassification>)
  );
  return grouped;
};

export const getSecurityBalanceWithClassification = (
  transactionDetail: TransactionResultBySecurityAndDateWithClassification[]
) => {
  const grouped = Object.values(
    transactionDetail.reduce((acc, item) => {
      const key = `${item.securityShortName}-${item.securityClassificationAsPerNFRS}`;
      if (!acc[key]) {
        acc[key] = {
          securityName: item.securityName,
          securityShortName: item.securityShortName,
          securityClassificationAsPerNFRS: item.securityClassificationAsPerNFRS,
          remainingCost: item.remainingCost,
          remainingQuantity: item.remainingQuantity,
          wacc: item.wacc,
        };
      } else {
        acc[key].wacc = item.wacc;
        acc[key].remainingCost = item.remainingCost;
        acc[key].remainingQuantity = item.remainingQuantity;
      }
      return acc;
    }, {} as Record<string, SecurityBalanceWithClassification>)
  );
  return grouped;
};

export const getSecurityBalanceWithoutClassification = (
  transactionDetail: TransactionResultBySecurityWithoutClassification[]
) => {
  const grouped = Object.values(
    transactionDetail.reduce((acc, item) => {
      const key = `${item.securityShortName}`;
      if (!acc[key]) {
        acc[key] = {
          securityName: item.securityName,
          securityShortName: item.securityShortName,
          remainingCost: item.remainingCost,
          remainingQuantity: item.remainingQuantity,
          wacc: item.wacc,
        };
      } else {
        acc[key].wacc = item.wacc;
        acc[key].remainingCost = item.remainingCost;
        acc[key].remainingQuantity = item.remainingQuantity;
      }
      return acc;
    }, {} as Record<string, SecutiyBalanceWithoutClassification>)
  );
  return grouped;
};
