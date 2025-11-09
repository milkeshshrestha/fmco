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
  DataTable,
  getNumberFormattedWithDiv,
} from "@/components/table/data-table";

import {
  calculateNfrsGainForSecurityAsOnDate,
  NfrsGainDetail,
} from "@/data/getSecurityDetail";

export default function TradeSecuritySummaryBySecurityPage() {
  const columns: ColumnDef<NfrsGainDetail>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "shortName", header: "Short Name" },
    {
      accessorKey: "securityClassificationAsPerNFRS",
      header: "Classification",
    },

    {
      accessorKey: "openingQuantity",
      header: "Opening Quantity",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "openingMarketRate",
      header: "Opening Rate",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "openingAmount",
      header: "Opening Market Value",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      footer: (info) => {
        const total = info.table
          .getFilteredRowModel()
          .rows.reduce((sum, row) => sum + row.original.openingAmount, 0);
        return getNumberFormattedWithDiv(total);
      },
    },
    {
      accessorKey: "purchaseQuantity",
      header: "Purchase Quantity",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "purchaseAmount",
      header: "Purchase Cost",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      footer: (info) => {
        const total = info.table
          .getFilteredRowModel()
          .rows.reduce((sum, row) => sum + row.original.purchaseAmount, 0);
        return getNumberFormattedWithDiv(total);
      },
    },
    {
      accessorKey: "soldQuantity",
      header: "Sold Quantity",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "soldAmount",
      header: "Sold Value",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      footer: (info) => {
        const total = info.table
          .getFilteredRowModel()
          .rows.reduce((sum, row) => sum + row.original.soldAmount, 0);
        return getNumberFormattedWithDiv(total);
      },
    },
    {
      accessorKey: "closingQuantity",
      header: "Closing Quantity",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "closingMarketRate",
      header: "Closing Rate",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
    },
    {
      accessorKey: "closingAmount",
      header: "Closing Market Value",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      footer: (info) => {
        const total = info.table
          .getFilteredRowModel()
          .rows.reduce((sum, row) => sum + row.original.openingAmount, 0);
        return getNumberFormattedWithDiv(total);
      },
    },
    {
      accessorKey: "gain",
      header: "Gain (loss)",
      cell: (info) => getNumberFormattedWithDiv(info.getValue<number>()),
      footer: (info) => {
        const total = info.table
          .getFilteredRowModel()
          .rows.reduce((sum, row) => sum + row.original.gain, 0);
        return getNumberFormattedWithDiv(total);
      },
    },
  ];
  const exportHeaderName = [
    "Name",
    "Short Name",
    "Classification",
    "Opening Quantity",
    "Opening Market Rate",
    "Opening Market Value",
    "Purchase Quantity",
    "Purchase Cost",
    "Sold Quantity",
    "Sales Value",
    "Closing Quantity",
    "Closing Market Rate",
    "Closing Market Value",
    "Gain (Loss)",
  ];
  const todayBSDate = ADToBS(new Date());
  const todayBSMonth = Number(todayBSDate.split("-")[1]);
  const fyStartDate = BSToAD(
    todayBSMonth > 3
      ? todayBSDate.split("-")[0] + "-04-01"
      : Number(todayBSDate.split("-")[0]) - 1 + "-04-01"
  );
  const [data, setData] = useState<NfrsGainDetail[]>([]);
  const [fromDate, setFromDate] = useState<string>(fyStartDate);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [toDate, setToDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [loading, setLoading] = useState<boolean>(false);
  const onClickHandler = async () => {
    setLoading(true);
    setShowTable(false);
    const data = await calculateNfrsGainForSecurityAsOnDate(
      new Date(new Date(fromDate).getTime() - 24 * 60 * 60 * 1000),
      new Date(toDate)
    );
    data.sort((a, b) =>
      b.name > a.name
        ? -1
        : b.name === a.name
        ? b.securityClassificationAsPerNFRS > a.securityClassificationAsPerNFRS
          ? 1
          : -1
        : 1
    );
    setData(data);
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
