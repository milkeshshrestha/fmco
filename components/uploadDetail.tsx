"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Prisma, Shareholder } from "@prisma/client";
import { DataTable } from "./ui/table/data-table";
type UploadedShareDetailMapped = {
  name: string;
  number: number;
  transactionDate: string;
  unitsOfShareChanged: number;
  ownershipType: string;
  remarks: string | null;
};
type ShareHistoryWithShareholder = Prisma.ShareHistoryGetPayload<{
  include: { shareholder: true };
}>;
export default function UploadedSharesDetailComponent({
  shareHistoryList,
}: {
  shareHistoryList: ShareHistoryWithShareholder[];
}) {
  const uploadedSharesMapped: UploadedShareDetailMapped[] =
    shareHistoryList.map((sh) => {
      return {
        name: sh.shareholder.name,
        number: sh.shareholder.number,
        transactionDate: sh.transactionDate,
        unitsOfShareChanged: sh.unitsOfShareChanged,
        ratePerShare: sh.ratePerShare,
        ownershipType: sh.ownershipType.toString(),
        remarks: sh.remarks,
      };
    });
  const columns: ColumnDef<UploadedShareDetailMapped>[] = [
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
      accessorKey: "ratePerShare",
      header: "Rate Per Share",
      cell: ({ row }) => (
        <div className="text-right">{row.getValue("ratePerShare")}</div>
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
    "Changed Units",
    "Rate Per Share",
    "Remarks",
  ];
  return (
    <div className="">
      <DataTable
        columns={columns}
        data={uploadedSharesMapped}
        exportHeaderNames={exportHeaderName}
        exportFileName="Upload Detail"
        title="Upload Detail"
      />
    </div>
  );
}
