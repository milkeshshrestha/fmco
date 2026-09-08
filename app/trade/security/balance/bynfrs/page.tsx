"use client";
import AdAndBsDateInputWithToggle from "@/components/adAndBsDateInputWithToggle";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LoaderCircleIcon } from "lucide-react";
import {
  DataTable,
  getNumberFormattedWithDiv,
  numericFilter,
} from "@/components/table/data-table";
import { SecurityBalanceWithClassification } from "@/services/transactionDetail";
import { toast } from "sonner";
import { getSecurityDetailWithNfrsClassificationAsOnDateWithMarketData } from "@/data/getSecurityDetail";

export default function BalanceSecurityPage() {
  const columns: ColumnDef<SecurityBalanceWithClassification>[] = [
    { accessorKey: "securityName", header: "Name" },
    { accessorKey: "securityShortName", header: "Short Name" },
    {
      accessorKey: "securityClassificationAsPerNFRS",
      header: "Classification",
    },
    {
      accessorKey: "remainingQuantity",
      header: "Remaining Qty",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      footer: (info) => {
        const total = info.table
          .getFilteredRowModel()
          .rows.reduce((sum, row) => sum + row.original.remainingQuantity, 0);
        return getNumberFormattedWithDiv(total);
      },
    },
    {
      accessorKey: "remainingCost",
      header: "Cost of Remaining Qty",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      footer: (info) => {
        const total = info.table
          .getFilteredRowModel()
          .rows.reduce((sum, row) => sum + row.original.remainingCost, 0);
        return getNumberFormattedWithDiv(total);
      },
    },
    {
      accessorKey: "wacc",
      header: "Closing WACC",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "closingMarketRate",
      header: "Closing Market Rate",
      filterFn: numericFilter,
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "closingMarketValue",
      header: "Closing Market Value",
      accessorFn: (row) => {
        // Check if the primary column is NaN or missing
        if (isNaN(row.closingMarketRate as number)) {
          return row.remainingCost; // Fallback to the other column
        }
        return row.closingMarketRate;
      },
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      footer: (info) => {
        const total = info.table
          .getFilteredRowModel()
          .rows.reduce(
            (sum, row) =>
              sum +
              (isNaN(row.original.closingMarketRate as number)
                ? (row.original.remainingCost as number)
                : (row.original.closingMarketRate as number)),
            0,
          );
        return getNumberFormattedWithDiv(total);
      },
    },
  ];
  const exportHeaderName = [
    "Name",
    "Short Name",
    "Classification",
    "Remaining Qty",
    "Cost of Remaining Qty",
    "Closing WACC",
    "Closing Market Rate",
    "Closing Market Value",
  ];
  const [data, setData] = useState<SecurityBalanceWithClassification[]>([]);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [toDate, setToDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );
  const [loading, setLoading] = useState<boolean>(false);
  const onClickHandler = async () => {
    setLoading(true);
    setShowTable(false);

    const response =
      await getSecurityDetailWithNfrsClassificationAsOnDateWithMarketData(
        new Date(toDate),
      );
    //console.log("response", response);
    if (!response.success) {
      toast.error(response.message);
      setData(response.data);
      setShowTable(false);
      setLoading(false);
    } else {
      setData(response.data);
    }
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
      {showTable}
      <Separator />
      <div className="pt-6" hidden={!showTable}>
        {showTable}
        <DataTable
          columns={columns}
          data={data}
          exportHeaderNames={exportHeaderName}
          exportFileName="Gain loss detail"
          title="Security Balance as per NFRS Classification"
        />
      </div>
    </div>
  );
}
