"use client";
import AdAndBsDateInputWithToggle from "@/components/adAndBsDateInputWithToggle";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { ADToBS, BSToAD } from "bikram-sambat-js";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LoaderCircleIcon } from "lucide-react";
import { getTransactionSummaryBySecurityAndDateWithoutClassification } from "@/data/trade";
import { DataTable } from "@/components/table/data-table";
import {
  getTransactionResultBySecurityAndDateWithoutClassification,
  getTransactionResultGroupedBySecurityWithoutClassification,
  TransactionResultBySecurityWithoutClassification,
} from "@/services/transactionDetail";

export default function TradeSecuritySummaryBySecurityPage() {
  const columns: ColumnDef<TransactionResultBySecurityWithoutClassification>[] =
    [
      { accessorKey: "securityName", header: "Name" },
      { accessorKey: "securityShortName", header: "Short Name" },
      { accessorKey: "additionQuantity", header: "Purchase Quantity" },
      { accessorKey: "additionAmount", header: "Cost of Purchase" },
      { accessorKey: "salesQuantity", header: "Sold Quantity" },
      { accessorKey: "salesAmount", header: "Sales Revenue" },
      { accessorKey: "gain", header: "Gain (loss)" },
      { accessorKey: "remainingQuantity", header: "Remaining Qty" },
      { accessorKey: "remainingCost", header: "Cost of Remaining Qty" },
      { accessorKey: "wacc", header: "Closing WACC" },
    ];
  const exportHeaderName = [
    "Name",
    "Short Name",
    "Purchase Quantity",
    "Cost of Purchase",
    "Sold Quantity",
    "Sales revenue",
    "Gain (Loss)",
    "Remaining Qty",
    "Cost of Remaining Qty",
    "Closing WACC",
  ];
  const todayBSDate = ADToBS(new Date());
  const todayBSMonth = Number(todayBSDate.split("-")[1]);
  const fyStartDate = BSToAD(
    todayBSMonth > 3
      ? todayBSDate.split("-")[0]
      : Number(todayBSDate.split("-")[0]) - 1 + "-04-01"
  );
  const [data, setData] = useState<
    TransactionResultBySecurityWithoutClassification[]
  >([]);
  const [fromDate, setFromDate] = useState<string>(fyStartDate);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [toDate, setToDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [loading, setLoading] = useState<boolean>(false);
  const onClickHandler = async () => {
    setLoading(true);
    setShowTable(false);
    const transactionDetail =
      await getTransactionSummaryBySecurityAndDateWithoutClassification(toDate);
    const resultAfterCostCalc =
      getTransactionResultBySecurityAndDateWithoutClassification(
        transactionDetail
      );
    //console.log("transaction", transactionDetail);

    const filteredForDate = resultAfterCostCalc.filter(
      (s) => s.transactionDate >= fromDate
    );

    const grouped =
      getTransactionResultGroupedBySecurityWithoutClassification(
        filteredForDate
      );
    setData(grouped);
    //console.log("grouped", grouped);
    setLoading(false);
    setShowTable(true);
  };

  return (
    <div className="space-y-4">
      <div className="sm:grid sm:grid-cols-3 flex gap-4">
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
