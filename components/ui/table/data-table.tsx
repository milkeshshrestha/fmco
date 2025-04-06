"use client";
import * as XLSX from "xlsx";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { DataTablePagination } from "./pagination";
import { Shareholder } from "@prisma/client";
import { Card } from "../card";
import { ScrollArea } from "../scroll-area";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  exportHeaderNames: string[];
  columnsToExport: string[];
  exportFileName: string;
  title: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  exportHeaderNames,
  columnsToExport,
  exportFileName,
  title,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });
  const exportToExcel = () => {
    // Define the keys of the columns you want to export
    //const columnsToExport = ["columnKey1", "columnKey2", "columnKey3"]; // Replace with actual column keys

    // Filter the rows to include only the specified columns
    const filteredRows = table.getFilteredRowModel().rows.map((row) => {
      const originalRow = row.original;
      const filteredRow: Record<string, any> = {};
      columnsToExport.forEach((key) => {
        filteredRow[key] = originalRow[key as keyof TData];
      });
      return filteredRow;
    });
    // const filteredRows = table
    //   .getFilteredRowModel()
    //   .rows.map((row) => row.original);
    //console.log(filteredRows);
    // Step 1: Create a new workbook and a worksheet
    const ws = XLSX.utils.json_to_sheet(filteredRows);
    //rename header rows
    XLSX.utils.sheet_add_aoa(ws, [exportHeaderNames], { origin: "A1" });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Step 2: Convert the workbook to a binary string
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    // Step 3: Create a Blob from the buffer and trigger the download
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = exportFileName + ".xlsx";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <Button onClick={exportToExcel} size={"sm"}>
            Export to excel
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <Table className="">
          <TableHeader className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="pb-2 px-1 bg-muted">
                      <Button
                        size={"sm"}
                        variant="ghost"
                        tabIndex={-1}
                        onClick={() =>
                          header.column.toggleSorting(
                            header.column.getIsSorted() === "asc"
                          )
                        }
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {header.column.getIsSorted() === "asc" ? (
                          <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                          <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                      <Input
                        placeholder="..."
                        value={(header.column.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                          header.column.setFilterValue(event.target.value)
                        }
                        className="font-sm py-1 h-6 bg-white dark:bg-slate-900"
                      />
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <DataTablePagination table={table}></DataTablePagination>
      </div>
    </div>
  );
}
