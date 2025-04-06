"use client";
import { DataTable } from "../../components/ui/table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Shareholder } from "@prisma/client";
import { useEffect, useState } from "react";
import { getAllShare, ShareholderWithShare } from "@/data/shareData";

export default function SharePage() {
  const [shareList, setShareList] = useState<ShareholderWithShare[]>([]);

  useEffect(() => {
    const loadShareholderData = async () => {
      const data = await getAllShare();
      setShareList(data);
    };
    loadShareholderData();
  }, []);
  const columns: ColumnDef<ShareholderWithShare>[] = [
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
      accessorKey: "ownershipDate",
      header: "Trans Date",
      cell: ({ row }) => (
        <div className="text-right">{row.getValue("ownershipDate")}</div>
      ),
    },
    {
      accessorKey: "unitsOfShare",
      header: "Units",
      cell: ({ row }) => (
        <div className="text-right">{row.getValue("unitsOfShare")}</div>
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
    "ownershipDate",
    "unitsOfShare",
    "remarks",
  ]; // Replace with actual column keys

  const exportHeaderName = [
    "Name",
    "Number",
    "Ownership Type",
    "Ownership Date",
    "Units Of Share",
    "Remarks",
  ];
  return (
    <div className="px-4">
      <DataTable
        columns={columns}
        data={shareList}
        exportHeaderNames={exportHeaderName}
        exportFileName="Remaining Share"
        title="Remaining Share"
        columnsToExport={columnsToExport}
      />
    </div>
  );
}
