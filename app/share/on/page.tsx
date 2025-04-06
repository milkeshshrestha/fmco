"use client";
import AdAndBsDateInputWithToggle from "@/components/adAndBsDateInputWithToggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DataTable } from "@/components/ui/table/data-table";
import { getAllShareAsOn, ShareDataFromDb } from "@/data/shareData";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

type MappedShareData = {
  shareholderId: number;
  name: string;
  number: number;
  ownedUnitsOfShare: number;
  lastTransactionData: string;
};
const columns: ColumnDef<MappedShareData>[] = [
  {
    accessorKey: "name",
    header: "Full Name",
  },
  {
    accessorKey: "number",
    header: "Sh number",
  },

  {
    accessorKey: "ownedUnitsOfShare",
    header: "Units owned",
    cell: ({ row }) => (
      <div className="text-right">
        {Intl.NumberFormat().format(row.getValue("ownedUnitsOfShare"))}
      </div>
    ),
  },
  {
    accessorKey: "lastTransactionDate",
    header: "Last TransactionDate",
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("lastTransactionDate")}</div>
    ),
  },
];
const columnsToExport = [
  "name",
  "number",
  "ownedUnitsOfShare",
  "lastTransactionDate",
]; // Replace with actual column keys

const exportHeaderName = [
  "Full Name",
  "Shareholder Number",
  "Units owned",
  "Last Transaction Date",
];
export default function ShareAsOnDatePage() {
  const [date, setDate] = useState<String>();
  const [totalUnits, setTotalUnits] = useState<number>(0);
  const [mappedShareData, setMappedShareData] = useState<
    MappedShareData[] | []
  >();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const shareData: ShareDataFromDb[] = await getAllShareAsOn(
      date ?? new Date().toISOString().split("T")[0]
    );
    var totUnits = 0;
    const mappedShareData = shareData.map((sh) => {
      totUnits += sh.balanceUnitsOfShare;
      return {
        shareholderId: sh.shareholderId,
        name: sh.shareholder.name,
        number: sh.shareholder.number,
        ownedUnitsOfShare: sh.balanceUnitsOfShare,
        lastTransactionData: sh.transactionDate,
      };
    }) as MappedShareData[];
    setMappedShareData(mappedShareData);
    setTotalUnits(totUnits);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Label>Select Date </Label>
        <div className="space-y-4 flex sm:grid sm:grid-cols-6 gap-4">
          <div className="col-span-2">
            <AdAndBsDateInputWithToggle
              onChange={setDate}
              required
              className="w-full"
            />
          </div>
          <Button className="col-span-1">Load</Button>
        </div>
        {mappedShareData && (
          <div>
            <Card className="px-4 overflow-auto gap-4">
              <DataTable
                data={mappedShareData}
                columns={columns}
                columnsToExport={columnsToExport}
                exportFileName={`Shares on ${date}`}
                exportHeaderNames={exportHeaderName}
                title={`Shares on ${date}`}
              />
              <Badge>
                Total Units:{new Intl.NumberFormat().format(totalUnits)}
              </Badge>
            </Card>
          </div>
        )}
      </form>
    </div>
  );
}
