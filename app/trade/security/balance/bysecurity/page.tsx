"use client";
import AdAndBsDateInputWithToggle from "@/components/adAndBsDateInputWithToggle";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LoaderCircleIcon } from "lucide-react";
import { getTransactionSummaryBySecurityAndDateWithoutClassification } from "@/data/trade";
import {
  DataTable,
  getNumberFormattedWithDiv,
} from "@/components/table/data-table";
import {
  getSecurityBalanceWithoutClassification,
  getTransactionResultBySecurityAndDateWithoutClassification,
  SecurityBalanceWithoutClassification,
} from "@/services/transactionDetail";

export default function BalanceSecurityPage() {
  const columns: ColumnDef<SecurityBalanceWithoutClassification>[] = [
    { accessorKey: "securityName", header: "Name" },
    { accessorKey: "securityShortName", header: "Short Name" },
    {
      accessorKey: "remainingQuantity",
      header: "Remaining Qty",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "remainingCost",
      header: "Cost of Remaining Qty",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "wacc",
      header: "Closing WACC",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
  ];
  const exportHeaderName = [
    "Name",
    "Short Name",
    "Remaining Qty",
    "Cost of Remaining Qty",
    "Closing WACC",
  ];
  const [data, setData] = useState<SecurityBalanceWithoutClassification[]>([]);
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

    const grouped =
      getSecurityBalanceWithoutClassification(resultAfterCostCalc);
    setData(grouped);
    //console.log("grouped", grouped);
    setLoading(false);
    setShowTable(true);
  };

  return (
    <div className="space-y-4">
      <div className="sm:grid sm:grid-cols-3 flex gap-4">
        <div>
          <Label htmlFor="toDate" className="pb-2">
            As on Date
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
          title="Security Balance by Cost"
        />
      </div>
    </div>
  );
}
