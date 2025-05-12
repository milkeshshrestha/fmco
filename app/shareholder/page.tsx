"use client";
import { getAllShareholders } from "@/data/sharedholderData";
import { DataTable } from "../../components/ui/table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Shareholder } from "@prisma/client";
import { useEffect, useState, useTransition } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
//import { DataTable } from "@/components/data-table";
import data from "@/components/data.json";

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
      accessorKey: "grandfatherName",
      header: "Grandfather Name",
    },
    {
      accessorKey: "type",
      header: "Type",
    },
    {
      accessorKey: "ctzOrRegNumber",
      header: "Ctz/Reg No.",
    },
    {
      accessorKey: "contact",
      header: "Contact Number",
    },
    {
      accessorKey: "ctzIssueDateOrRegDate",
      header: () => <div className="text-right">Ctz Issue/ Reg Date</div>,
      cell: ({ row }) => {
        // const amount = parseFloat(row.getValue("amount"));
        // const formatted = new Intl.NumberFormat("en-US", {
        //   style: "currency",
        //   currency: "USD",
        // }).format(amount);

        return (
          <div className="text-right font-medium">
            {row.getValue("ctzIssueDateOrRegDate")}
          </div>
        );
      },
    },
    {
      accessorKey: "ownedUnitsOfShare",
      header: "Units owned",
      cell: ({ row }) => (
        <div className="text-right">{row.getValue("ownedUnitsOfShare")}</div>
      ),
      filterFn: (row, columnId, value) => {
        //filter input box is string, so we convert value to string
        const cellValue = String(row.getValue(columnId));
        return cellValue == value.toLowerCase();
      },
    },
    {
      accessorKey: "dividendBalance",
      header: "Unpaid Dividend",
      cell: ({ row }) => (
        <div className="text-right">{row.getValue("dividendBalance")}</div>
      ),
      filterFn: (row, columnId, value) => {
        //filter input box is string, so we convert value to string
        const cellValue = String(row.getValue(columnId));
        return cellValue == value;
      },
    },
    {
      accessorKey: "wacc",
      header: "Wacc",
      cell: ({ row }) => (
        <div className="text-right">{row.getValue("wacc")}</div>
      ),
      filterFn: (row, columnId, value) => {
        //filter input box is string, so we convert value to string
        const cellValue = String(row.getValue(columnId));
        return cellValue == value;
      },
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <>
          <Link
            href={`shareholder/${row.original.id}/edit`}
            className="border py-1 px-2 rounded-sm mr-1 hover:bg-gray-200"
          >
            Edit
          </Link>
          <Link
            href={`shareholder/${row.original.id}`}
            className="border py-1 px-2 rounded-sm hover:bg-gray-200"
          >
            View
          </Link>
        </>
      ),
    },
  ];
  const columnsToExport = [
    "name",
    "type",
    "number",
    "ctzIssueDateOrRegDate",
    "fatherName",
    "grandfatherName",
    "contact",
    "ownedUnitsOfShare",
    "dividendBalance",
    "wacc",
  ]; // Replace with actual column keys

  const exportHeaderName = [
    "Full Name",
    "Type",
    "Shareholder Number",

    "Ctz/ Reg No.",
    "Father Name",
    "Grandfather Name",
    "Contact",
    "Units owned",
    "Unpaid Dividend",
    "Wacc",
  ];
  return (
    <div className="px-4">
      <DataTable
        columns={columns}
        data={shareholderList}
        exportHeaderNames={exportHeaderName}
        exportFileName="Shareholder list"
        title="Shareholder List"
        columnsToExport={columnsToExport}
      />
    </div>
  );
}
