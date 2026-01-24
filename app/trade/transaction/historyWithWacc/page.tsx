"use client";
import AdAndBsDateInputWithToggle from "@/components/adAndBsDateInputWithToggle";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { ADToBS, BSToAD } from "bikram-sambat-js";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LoaderCircleIcon } from "lucide-react";
import { getTransactionHistoryBySecurityDateClassificationToDate } from "@/data/trade";
import {
  DataTable,
  getNumberFormattedWithDiv,
} from "@/components/table/data-table";
import {
  getTransactionResultBySecurityAndDateWithClassification,
  TransactionResultBySecurityAndDateWithClassification,
} from "@/services/transactionDetail";
type TransactionResultBySecurityAndDateWithClassificationWithBsDate =
  TransactionResultBySecurityAndDateWithClassification & {
    transactionDateBs: string;
  };
export default function TradeSecuritySummaryBySecurityPage() {
  const columns: ColumnDef<TransactionResultBySecurityAndDateWithClassificationWithBsDate>[] =
    [
      { accessorKey: "transactionDate", header: "Date" },
      { accessorKey: "transactionDateBs", header: "Date (BS)" },

      { accessorKey: "securityName", header: "Name" },
      { accessorKey: "securityShortName", header: "Short Name" },
      {
        accessorKey: "securityClassificationAsPerNFRS",
        header: "NFRS Classification",
      },
      {
        accessorKey: "additionQuantity",
        header: "Purchase Quantity",
        cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      },
      {
        accessorKey: "salesQuantity",
        //  accessorFn: (data) => -data.salesQuantity,
        header: "Sold Quantity",
        cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      },
      {
        accessorKey: "remainingQuantity",
        //  accessorFn: (data) => -data.salesQuantity,
        header: "Balance Quantity",
        cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      },
      //{ accessorKey: "balanceQuantity", header: "Balance Quantity" },

      {
        accessorKey: "additionAmount",
        header: "Cost of Purchase",
        cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      },
      {
        accessorKey: "wacc",
        //  accessorFn: (data) => -data.salesQuantity,
        header: "WACC",
        cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      },
      {
        accessorKey: "salesAmount",
        header: "Sales Revenue",
        cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      },
      {
        accessorKey: "remainingCost",
        //  accessorFn: (data) => -data.salesQuantity,
        header: "Remaining Cost",
        cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      },
    ];
  const exportHeaderName = [
    "Transaction Date",
    "Transaction Date (BS)",
    "Name",
    "Short Name",
    "NFRS Classification",
    "Purchase Quantity",
    "Sold Quantity",
    "Balance Quantity",
    "Purchase Cost",
    "WACC",
    "Sales revenue",
    "Remaining Cost",
  ];
  const todayBSDate = ADToBS(new Date());
  const todayBSMonth = Number(todayBSDate.split("-")[1]);
  const fyStartDate = BSToAD(
    todayBSMonth > 3
      ? todayBSDate.split("-")[0] + "-04-01"
      : Number(todayBSDate.split("-")[0]) - 1 + "-04-01",
  );
  const [data, setData] = useState<
    TransactionResultBySecurityAndDateWithClassificationWithBsDate[]
  >([]);
  const [fromDate, setFromDate] = useState<string>(fyStartDate);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [toDate, setToDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );
  const [loading, setLoading] = useState<boolean>(false);
  const onClickHandler = async () => {
    setLoading(true);
    setShowTable(false);

    const transactionDetail =
      await getTransactionHistoryBySecurityDateClassificationToDate(toDate);
    const resultAfterCostCalc =
      getTransactionResultBySecurityAndDateWithClassification(
        transactionDetail,
      );
    const sortedResultAfterCostCalc = resultAfterCostCalc.sort((a, b) =>
      a.transactionDate.localeCompare(b.transactionDate),
    );
    const result = sortedResultAfterCostCalc.filter((item) => {
      const itemDate = item.transactionDate;
      return itemDate >= fromDate;
    });
    const resultWithBsDate: TransactionResultBySecurityAndDateWithClassificationWithBsDate[] =
      result.map((item) => {
        return {
          ...item,
          transactionDateBs: ADToBS(new Date(item.transactionDate)),
        };
      });
    setData(resultWithBsDate);
    setLoading(false);
    setShowTable(true);
  };

  return (
    <div className="space-y-4">
      <div className="sm:grid sm:grid-cols-3 flex flex-wrap gap-4">
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
          exportFileName="Security transaction report"
          title="Security transaction report"
        />
      </div>
    </div>
  );
}
