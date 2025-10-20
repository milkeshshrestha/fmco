"use client";
import * as XLSX from "xlsx";
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
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
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowDown, ArrowUp, Loader } from "lucide-react";
import { DataTablePagination } from "./pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  exportHeaderNames: string[];
  exportFileName: string;
  title: string;
}
export const numericFilter: FilterFn<any> = (row, columnId, filterValue) => {
  const value = row.getValue(columnId);
  // If no filter value, show all rows
  if (!filterValue || !value) return true;
  return value.toString().includes(filterValue.toString());
};

export function DataTable<TData, TValue>({
  columns,
  data,
  exportHeaderNames,
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
  // function getNestedValue<T>(obj: T, path: string) {
  //   return path.split(".").reduce((acc: any, key: string) => acc?.[key], obj);
  // }
  const [isPendingExcelExport, setIsPendingExcelExport] =
    useState<boolean>(false);
  const exportToExcel = () => {
    setIsPendingExcelExport(true);
    // Filter the rows to include only the specified columns
    const filteredRows = table.getFilteredRowModel().rows.map((row) =>
      // Object.fromEntries(
      //   columnsToExport.map((key) => [key, row.getValue(key)])
      // )
      {
        const rowData: any = {};
        row.getVisibleCells().reduce((acc, cell) => {
          rowData[cell.column.id] = cell.getValue();
        }, rowData);
        return rowData;
      }
    );

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
    setIsPendingExcelExport(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <Button
            onClick={exportToExcel}
            size={"sm"}
            disabled={isPendingExcelExport}
          >
            Export to excel{" "}
            {isPendingExcelExport && <Loader className="animate-spin" />}
          </Button>
          {isPendingExcelExport}
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
                        value={header.column.getFilterValue()?.toString() ?? ""}
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
          <TableFooter>
            {table.getFooterGroups().map((footerGroup) => (
              <TableRow key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <TableCell key={header.id} className="bg-muted">
                    {flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableFooter>
        </Table>
      </div>
      <div className="space-x-2 py-4">
        <DataTablePagination table={table}></DataTablePagination>
      </div>
    </div>
  );
}
export const getNumberFormattedWithDiv = (
  value: number,
  maximumFractionDigits: number = 2
) => (
  <div className="text-right">
    {Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: maximumFractionDigits,
    }).format(value)}
  </div>
);
