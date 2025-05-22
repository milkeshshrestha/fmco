"use client";

import { Security } from "@prisma/client";
import { DataTable } from "./table/data-table";
import { Button } from "./ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { PenIcon, TrashIcon } from "lucide-react";
import { deleteSecurity } from "@/actions/trade/deleteSecurity";
import { toast } from "sonner";
import { useState } from "react";

export const SecurityListTable = ({
  securityList,
}: {
  securityList: Security[];
}) => {
  const [securityData, setSecurityData] = useState<Security[]>(securityList);
  const deleteHandler = async (id: number) => {
    const response = await deleteSecurity(id);
    if (response.success) {
      toast.success(response.message);
      const removedData = securityList.filter((s) => s.id != id);
      setSecurityData(removedData);
    } else {
      toast.error(response.message);
    }
  };
  const columns: ColumnDef<Security>[] = [
    { accessorKey: "shortName", header: "Short Name" },
    { accessorKey: "name", header: "Full Name" },
    { accessorKey: "securityClassification", header: "Classification" },
    {
      id: "Action",
      header: "Action",
      cell: (data) => (
        <div className="flex gap-2">
          <Button size={"sm"} variant={"outline"} title="Edit">
            <a href={`/trade/security/${data.row.original.id}/edit`}>
              <PenIcon />
            </a>
          </Button>
          <Button
            size={"sm"}
            variant={"outline"}
            title="Delete"
            onClick={() => deleteHandler(data.row.original.id)}
          >
            <TrashIcon />
          </Button>
        </div>
      ),
    },
  ];
  const exportHeaderName = [
    "Short Name",
    "Full Name",
    "Classification",
    "Action",
  ];
  return (
    <DataTable
      columns={columns}
      data={securityData}
      exportHeaderNames={exportHeaderName}
      exportFileName="Security List"
      title="Security List"
    />
  );
};
