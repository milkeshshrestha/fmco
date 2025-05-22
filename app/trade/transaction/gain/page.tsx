"use client";
import AdAndBsDateInputWithToggle from "@/components/adAndBsDateInputWithToggle";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { ADToBS, BSToAD } from "bikram-sambat-js";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LoaderCircleIcon } from "lucide-react";
import {
  getTransactionDetailBySecurity,
  TransactionSummaryBySecurity,
} from "@/data/trade";
type TransactionData = Prisma.SecurityTransactionGetPayload<{
  include: { securityTransactionDetail: { include: { security: true } } };
}>;
import { DataTable } from "@/components/table/data-table";
import { Prisma } from "@prisma/client";
type SecurityDetailWithGain = {
  securityName: string;
  securityShortName: string;
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
export default function TradeSecuritySummaryBySecurityPage() {
  const columns: ColumnDef<SecurityDetailWithGain>[] = [
    { accessorKey: "securityName", header: "Name" },
    { accessorKey: "securityShortName", header: "Short Name" },
    {
      accessorKey: "securityClassificationAsPerNFRS",
      header: "Classification",
    },
    { accessorKey: "transactionDate", header: "Date" },
    { accessorKey: "additionQuantity", header: "Purchase Quantity" },
    { accessorKey: "additionAmount", header: "Cost of Purchase" },
    { accessorKey: "cumQuantity", header: "Total Quantity" },
    { accessorKey: "cumCost", header: "Total Cost" },
    { accessorKey: "wacc", header: "WACC" },
    { accessorKey: "salesQuantity", header: "Sold Quantity" },
    { accessorKey: "salesAmount", header: "Sales Revenue" },
    { accessorKey: "gain", header: "Gain (loss)" },
  ];
  const exportHeaderName = [
    "Name",
    "Short Name",
    "classification",
    "Date",
    "Purchase Quantity",
    "Cost of Purchase",
    "Total Quantity",
    "Total cost",
    "WACC",
    "Sold Quantity",
    "Sales revenue",
    "Gain (Loss)",
  ];
  const todayBSDate = ADToBS(new Date());
  const todayBSMonth = Number(todayBSDate.split("-")[1]);
  const fyStartDate = BSToAD(
    todayBSMonth > 3
      ? todayBSDate.split("-")[0]
      : Number(todayBSDate.split("-")[0]) - 1 + "-04-01"
  );
  const [data, setData] = useState<SecurityDetailWithGain[]>([]);
  const [fromDate, setFromDate] = useState<string>(fyStartDate);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [toDate, setToDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [loading, setLoading] = useState<boolean>(false);
  const onClickHandler = async () => {
    setLoading(true);
    setShowTable(false);
    const transactionDetail = await getTransactionDetailBySecurity(
      fromDate,
      toDate
    );
    console.log("transaction", transactionDetail);
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

        prevRecord = {
          securityShortName: security.securityShortName,
          securityClassificationAsPerNFRS:
            security.securityClassificationAsPerNFRS,
          remainingQuantity: security.additionQuantity - security.salesQuantity,
          remainingCost:
            (security.additionAmount / security.additionQuantity) *
            (security.additionQuantity - security.salesQuantity),
        };
        const wacc =
          security.additionQuantity > 0
            ? security.additionAmount / security.additionQuantity
            : 0;
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
    const filteredForDate = resultAfterCostCalc.filter(
      (s) => s.transactionDate >= fromDate
    );

    setData(filteredForDate);
    setLoading(false);
    setShowTable(true);
  };

  return (
    <div className="space-y-4">
      <div className="lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-3 flex gap-4">
        <div>
          <Label htmlFor="fromDate" className="pb-2">
            From Date
          </Label>
          <AdAndBsDateInputWithToggle
            value={fromDate}
            required={true}
            id="fromDate"
            onChange={(value: any) => setFromDate(value)}
          />
        </div>
        <div>
          <Label htmlFor="toDate" className="pb-2">
            To Date
          </Label>
          <AdAndBsDateInputWithToggle
            value={toDate}
            required={true}
            id="toDate"
            onChange={(value: any) => setToDate(value)}
          />
        </div>
        <div className="place-content-center">
          <Button onClick={onClickHandler} disabled={loading}>
            Load{" "}
            <span hidden={!loading}>
              <LoaderCircleIcon className={`animate-spin`} />
            </span>
          </Button>
        </div>
      </div>
      <Separator />
      <div className="pt-6" hidden={!showTable}>
        <DataTable
          columns={columns}
          data={data}
          exportHeaderNames={exportHeaderName}
          exportFileName="Gain loss detail"
          title="Gain Loss calculation"
        />
      </div>
    </div>
  );
}
