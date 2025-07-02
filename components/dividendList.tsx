"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Dividend, Prisma } from "@prisma/client";
import { ADToBS } from "bikram-sambat-js";
import { DataTable } from "./table/data-table";
import DeleteDividendEntryDialog from "./deleteDividendSingleEntry";
import { useState } from "react";
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

  const [dividendWithShareholderList, setDividendWithShareholderList] =
    useState<DividendWithShareholder[]>(
      dividendListFromDbWithShareholder.map((dividend) => {
        return {
          ...dividend,
          shareholderName: dividend.shareholder.name,
          shareholderNumber: dividend.shareholder.number,
          debitAmount: dividend.amount < 0 ? -dividend.amount : null,
          creditAmount: dividend.amount >= 0 ? dividend.amount : null,
        } as DividendWithShareholder;
      })
    );

  const columns: ColumnDef<DividendWithShareholder>[] = [
    { accessorKey: "transactionDate", header: "Transaction Date" },
    {
      accessorFn: (data) => ADToBS(data.transactionDate),
      header: "Date BS",
    },
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
      filterFn: (row, columnId, value) => {
        //filter input box is string, so we convert value to string
        const cellValue = String(row.getValue(columnId));
        return cellValue == value;
      },
    },
    {
      accessorKey: "debitAmount",
      header: "Debit Amount",
      cell: ({ row }) => (
        <div className="text-right">
          {Intl.NumberFormat().format(row.getValue("debitAmount"))}
        </div>
      ),
      filterFn: (row, columnId, value) => {
        //filter input box is string, so we convert value to string
        const cellValue = String(row.getValue(columnId));
        return cellValue == value;
      },
    },
    {
      accessorKey: "creditAmount",
      header: "Credit Amount",
      cell: ({ row }) => (
        <div className="text-right">
          {Intl.NumberFormat().format(row.getValue("creditAmount"))}
        </div>
      ),
      filterFn: (row, columnId, value) => {
        //filter input box is string, so we convert value to string
        const cellValue = String(row.getValue(columnId));
        return cellValue == value;
      },
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
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            {/* Add any action buttons here, e.g., edit, delete */}
            <DeleteDividendEntryDialog
              dividendToDelete={row.original}
              onSuccess={() =>
                setDividendWithShareholderList(
                  dividendWithShareholderList.filter(
                    (div) => div.id !== row.original.id
                  )
                )
              }
            />
          </div>
        );
      },
    },
  ];
  const exportHeaderName = [
    "Transaction Date",
    "Date BS",
    "Shareholder Name",
    "Shareholder Number",
    "Debit Amount",
    "Credit Amount",
    "Sender Bank",
    "Sender Bank Account",
    "Receiver Bank",
    "Receiver Bank Account",
    "Remarks",
    "Action",
  ];
  return (
    <div className="">
      <DataTable
        columns={columns}
        data={dividendWithShareholderList}
        exportHeaderNames={exportHeaderName}
        exportFileName={title}
        title={title}
      />
    </div>
  );
}
