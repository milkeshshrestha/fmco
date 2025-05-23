"use client";
import AdAndBsDateInputWithToggle from "@/components/adAndBsDateInputWithToggle";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LoaderCircleIcon } from "lucide-react";
import { getTransactionSummaryBySecurityAndDateWithClassification } from "@/data/trade";
import { DataTable } from "@/components/table/data-table";
import {
  getSecurityBalanceWithClassification,
  getTransactionResultBySecurityAndDateWithClassification,
  SecurityBalanceWithClassification,
} from "@/services/transactionDetail";

export default function BalanceSecurityPage() {
  const columns: ColumnDef<SecurityBalanceWithClassification>[] = [
    { accessorKey: "securityName", header: "Name" },
    { accessorKey: "securityShortName", header: "Short Name" },
    {
      accessorKey: "securityClassificationAsPerNFRS",
      header: "Classification",
    },
    { accessorKey: "remainingQuantity", header: "Remaining Qty" },
    { accessorKey: "remainingCost", header: "Cost of Remaining Qty" },
    { accessorKey: "wacc", header: "Closing WACC" },
  ];
  const exportHeaderName = [
    "Name",
    "Short Name",
    "Classification",
    "Remaining Qty",
    "Cost of Remaining Qty",
    "Closing WACC",
  ];
  const [data, setData] = useState<SecurityBalanceWithClassification[]>([]);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [toDate, setToDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [loading, setLoading] = useState<boolean>(false);
  const onClickHandler = async () => {
    setLoading(true);
    setShowTable(false);
    const transactionDetail =
      await getTransactionSummaryBySecurityAndDateWithClassification(toDate);
    const resultAfterCostCalc =
      getTransactionResultBySecurityAndDateWithClassification(
        transactionDetail
      );

    const grouped = getSecurityBalanceWithClassification(resultAfterCostCalc);
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
          title="Gain Loss calculation"
        />
      </div>
    </div>
  );
}
