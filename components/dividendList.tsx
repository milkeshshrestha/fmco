"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Dividend, Prisma } from "@prisma/client";
import { DataTable } from "./ui/table/data-table";
type DividendListFromDbWithShareholder = Prisma.DividendGetPayload<{
  include: { shareholder: true };
}>;
export default function DividendHistoryList({
  dividendListFromDbWithShareholder,
  title,
}: {
  dividendListFromDbWithShareholder: DividendListFromDbWithShareholder[];
  title: string;
}) {
  type DividendWithShareholder = Dividend & {
    shareholderName: string;
    shareholderNumber: number;
    debitAmount: number;
    creditAmount: number;
  };

  const dividendWithShareholderList: DividendWithShareholder[] =
    dividendListFromDbWithShareholder.map((dividend) => {
      return {
        ...dividend,
        shareholderName: dividend.shareholder.name,
        shareholderNumber: dividend.shareholder.number,
        debitAmount: dividend.amount < 0 ? dividend.amount : null,
        creditAmount: dividend.amount >= 0 ? dividend.amount : null,
      } as DividendWithShareholder;
    });

  const columns: ColumnDef<DividendWithShareholder>[] = [
    { accessorKey: "transactionDate", header: "Transaction Date" },
    {
      accessorKey: "shareholderName",
      header: "Shareholder Name",
      // cell: ({ row, getValue }) => {
      //   console.log(row);
      //   const shareholder = getValue<Shareholder>();
      //   return shareholder.name;
      // },
      // filterFn: (row, columnId, filterValue) => {
      //   const shareholder = row.getValue<Shareholder>(columnId);
      //   return shareholder.name
      //     .toLowerCase()
      //     .includes(filterValue.toLowerCase());
      // },
      // sortingFn: sortByName,
    },
    {
      accessorKey: "shareholderNumber",
      header: "Shareholder Number",
    },
    {
      accessorKey: "debitAmount",
      header: "Debit Amount",
    },
    {
      accessorKey: "creditAmount",
      header: "Credit Amount",
    },
    {
      accessorKey: "sendingBankName",
      header: "Sender Bank",
    },
    {
      accessorKey: "sendingBankAccount",
      header: "Sender Bank Account",
    },
    {
      accessorKey: "receivingBankName",
      header: "Receiver Bank",
    },
    {
      accessorKey: "receivingBankAccount",
      header: "Receiver Bank Account",
    },
    {
      accessorKey: "remarks",
      header: "Remarks",
    },
  ];
  const exportHeaderName = [
    "transactionDate",
    "Shareholder Name",
    "Shareholder Number",
    "Debit Amount",
    "Credit Amount",
    "Sender Bank",
    "Sender Bank Account",
    "Receiver Bank",
    "Receiver Bank Account",
    "Remarks",
  ];
  const columnsToExport = [
    "transactionDate",
    "shareholderName",
    "shareholderNumber",
    "debitAmount",
    "creditAmount",
    "sendingBankName",
    "sendingBankAccount",
    "receivingBankName",
    "receivingBankAccount",
    "remarks",
  ];
  return (
    <div className="">
      <DataTable
        columns={columns}
        data={dividendWithShareholderList}
        exportHeaderNames={exportHeaderName}
        exportFileName={title}
        columnsToExport={columnsToExport}
        title={title}
      />
    </div>
  );
}
