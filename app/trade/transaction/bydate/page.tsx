"use client";
import AdAndBsDateInputWithToggle from "@/components/adAndBsDateInputWithToggle";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { ADToBS, BSToAD } from "bikram-sambat-js";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LoaderCircleIcon } from "lucide-react";
import { getTransactionSummaryByDate } from "@/data/trade";
import { DataTable } from "@/components/table/data-table";

export default function TradeSecuritySummaryByDatePage() {
  const columns: ColumnDef<{
    transactionDate: string;
    additionQuantity: number;
    salesQuantity: number;
    additionAmount: number;
    salesAmount: number;
  }>[] = [
    { accessorKey: "transactionDate", header: "Transaction Date" },
    {
      accessorFn: (data) => ADToBS(data.transactionDate),
      header: "Date BS",
    },
    {
      accessorKey: "additionQuantity",
      header: "Added Quantity",
    },
    {
      accessorKey: "salesQuantity",
      accessorFn: (data) => -data.salesQuantity,
      header: "Sold Quantity",
    },
    { accessorKey: "additionAmount", header: "Cost of Purchase" },
    { accessorKey: "salesAmount", header: "Sales Revenue" },
  ];
  const exportHeaderName = [
    "Date",
    "Date BS",
    "Purchase Quantity",
    "Sold Quantity",
    "Purchase Cost",
    "Sales revenue",
  ];
  const todayBSDate = ADToBS(new Date());
  const todayBSMonth = Number(todayBSDate.split("-")[1]);
  const fyStartDate = BSToAD(
    todayBSMonth > 3
      ? todayBSDate.split("-")[0]
      : Number(todayBSDate.split("-")[0]) - 1 + "-04-01"
  );
  const [data, setData] = useState<
    {
      transactionDate: string;
      additionQuantity: number;
      salesQuantity: number;
      additionAmount: number;
      salesAmount: number;
    }[]
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
    const result = await getTransactionSummaryByDate(fromDate, toDate);
    setData(result);
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
          exportFileName="Datewise report"
          title="Datewise report"
        />
      </div>
    </div>
  );
}
