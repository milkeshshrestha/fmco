"use client";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import {
  getAllShareHistory,
  ShareholderWithShareHistory,
} from "@/data/shareHistory";
import { ADToBS } from "bikram-sambat-js";
import { DataTable } from "@/components/table/data-table";

export default function ShareHistoryPage() {
  const [shareHistoryList, setShareHistoryList] = useState<
    ShareholderWithShareHistory[]
  >([]);

  useEffect(() => {
    const loadShareholderData = async () => {
      const data = await getAllShareHistory();
      setShareHistoryList(data);
    };
    loadShareholderData();
  }, []);
  const columns: ColumnDef<ShareholderWithShareHistory>[] = [
    {
      accessorKey: "name",
      header: "Full Name",
    },
    {
      accessorKey: "number",
      header: "Sh number",
      filterFn: (row, columnId, value) => {
        //filter input box is string, so we convert value to string
        const cellValue = String(row.getValue(columnId));
        return cellValue == value;
      },
    },
    {
      accessorKey: "ownershipType",
      header: "Transaction Type",
    },

    {
      accessorKey: "transactionDate",
      header: "Trans Date",
      cell: ({ row }) => (
        <div className="text-right">{row.getValue("transactionDate")}</div>
      ),
    },
    {
      accessorFn: (data) => ADToBS(data.transactionDate),
      header: "Date BS",
    },
    {
      accessorKey: "unitsOfShareChanged",
      header: "Units",
      cell: ({ row }) => (
        <div className="text-right">{row.getValue("unitsOfShareChanged")}</div>
      ),
    },
    {
      accessorKey: "remarks",
      header: "Remarks",
    },
  ];

  const exportHeaderName = [
    "Name",
    "Number",
    "Transaction Type",
    "Transaction Date",
    "Date BS",
    "Changed Units",
    "Remarks",
  ];
  return (
    <div className="">
      <DataTable
        columns={columns}
        data={shareHistoryList}
        exportHeaderNames={exportHeaderName}
        exportFileName="Transaction History"
        title="Transaction History"
      />
    </div>
  );
}
