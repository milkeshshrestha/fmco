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
  getTransactionSummaryBySecurityAndDateWithClassification,
  getTransactionHistoryBySecurityDateClassificationBetween,
  TransactionHistoryBySecurityDateClassification,
  TransactionHistoryBySecurityDateClassificationWithBalance,
} from "@/data/trade";
import {
  DataTable,
  getNumberFormattedWithDiv,
} from "@/components/table/data-table";

export default function TradeSecuritySummaryBySecurityPage() {
  const columns: ColumnDef<TransactionHistoryBySecurityDateClassification>[] = [
    { accessorKey: "transactionDate", header: "Date" },
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
    //{ accessorKey: "balanceQuantity", header: "Balance Quantity" },

    {
      accessorKey: "additionAmount",
      header: "Cost of Purchase",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "salesAmount",
      header: "Sales Revenue",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
  ];
  const exportHeaderName = [
    "Name",
    "Short Name",
    "NFRS Classification",
    "Purchase Quantity",
    "Sold Quantity",
    //"Balance Quantity",
    "Purchase Cost",
    "Sales revenue",
  ];
  const todayBSDate = ADToBS(new Date());
  const todayBSMonth = Number(todayBSDate.split("-")[1]);
  const fyStartDate = BSToAD(
    todayBSMonth > 3
      ? todayBSDate.split("-")[0] + "-04-01"
      : Number(todayBSDate.split("-")[0]) - 1 + "-04-01"
  );
  const [data, setData] = useState<
    TransactionHistoryBySecurityDateClassification[]
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

    let result = await getTransactionHistoryBySecurityDateClassificationBetween(
      fromDate,
      toDate
    );
    // let balanceQuantity = 0;
    // const resultWithBalance: TransactionHistoryBySecurityDateClassificationWithBalance[] =
    //   [];

    // for (let i = 0; i < result.length; i++) {
    //   if (
    //     result[i].securityId === result[i - 1]?.securityId &&
    //     result[i].securityClassificationAsPerNFRS ===
    //       result[i - 1]?.securityClassificationAsPerNFRS
    //   ) {
    //     balanceQuantity += result[i].additionQuantity - result[i].salesQuantity;
    //   } else {
    //     balanceQuantity = result[i].additionQuantity - result[i].salesQuantity;
    //   }
    //   resultWithBalance.push({ ...result[i], balanceQuantity });
    // }
    setData(result);
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
