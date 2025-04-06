"use client";
import { DataTable } from "../../components/ui/table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Shareholder } from "@prisma/client";
import { useEffect, useState } from "react";
import {
  getAllShareHistory,
  ShareholderWithShareHistory,
} from "@/data/shareHistory";

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
  const columnsToExport = [
    "name",
    "number",
    "ownershipType",
    "transactionDate",
    "unitsOfShareChanged",
    "remarks",
  ]; // Replace with actual column keys

  const exportHeaderName = [
    "Name",
    "Number",
    "Transaction Type",
    "Transaction Date",
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
        columnsToExport={columnsToExport}
      />
    </div>
  );
}
