"use client";
import { getAllShareholders } from "@/data/sharedholderData";
import { ColumnDef } from "@tanstack/react-table";
import { Shareholder } from "@prisma/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { DataTable } from "@/components/ui/table/data-table";

export default function ShareholdersTable() {
  const [shareholderList, setShareholderList] = useState<Shareholder[]>([]);

  useEffect(() => {
    const loadShareholderData = async () => {
      setShareholderList(await getAllShareholders());
    };
    loadShareholderData();
  }, []);
  const columns: ColumnDef<Shareholder>[] = [
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
      accessorKey: "fatherName",
      header: "Father Name",
    },
    {
      accessorKey: "contact",
      header: "Contact Number",
    },
    {
      accessorKey: "dividendBalance",
      header: "Unpaid Dividend",
      cell: ({ row }) => (
        <div className="text-right">
          {Number(row.getValue("dividendBalance")).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      ),
      filterFn: (row, columnId, value) => {
        //filter input box is string, so we convert value to string
        const cellValue = String(row.getValue(columnId));
        return cellValue == value;
      },
    },
  ];
  const columnsToExport = [
    "name",
    "number",
    "fatherName",
    "contact",
    "dividendBalance",
  ]; // Replace with actual column keys

  const exportHeaderName = [
    "Full Name",
    "Shareholder Number",
    "Father Name",
    "Contact",
    "Unpaid Dividend",
  ];
  return (
    <div className="px-4">
      <DataTable
        columns={columns}
        data={shareholderList}
        exportHeaderNames={exportHeaderName}
        exportFileName="Dividend balance list"
        title="Dividend Balance List"
        columnsToExport={columnsToExport}
      />
    </div>
  );
}
