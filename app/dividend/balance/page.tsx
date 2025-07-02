"use client";
import { getAllShareholdersWithDividend } from "@/data/sharedholderData";
import { ColumnDef } from "@tanstack/react-table";
import { Dividend, Prisma, Shareholder } from "@prisma/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { DataTable } from "@/components/ui/table/data-table";
type ShareholderWithDividend = Prisma.ShareholderGetPayload<{
  include: { dividend: true };
}>;
export default function ShareholdersTable() {
  const [shareholderList, setShareholderList] = useState<
    ShareholderWithDividend[]
  >([]);

  useEffect(() => {
    const loadShareholderData = async () => {
      setShareholderList(await getAllShareholdersWithDividend());
    };
    loadShareholderData();
  }, []);

  const columns: ColumnDef<ShareholderWithDividend>[] = [
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
      accessorKey: "bankName",
      header: "Bank ",
    },
    {
      accessorKey: "bankAccount",
      header: "Account Number",
    },
    {
      //accessorKey: "dividendBalance",
      header: "Unpaid Dividend",
      id: "unpaidDividend",
      accessorFn: ({ dividend }) => {
        const dividends = dividend ?? [];
        const total = dividends.reduce((acc, div) => acc + div.amount, 0);
        return total;
      },
      cell: ({ row }) => {
        return (
          <div className="text-right">
            {new Intl.NumberFormat().format(row.getValue("unpaidDividend"))}
          </div>
        );
      },
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
    "bankName",
    "bankAccount",
    "contact",
    "dividendBalance",
  ]; // Replace with actual column keys

  const exportHeaderName = [
    "Full Name",
    "Shareholder Number",
    "Father Name",
    "Bank Name",
    "Bank Account",
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
