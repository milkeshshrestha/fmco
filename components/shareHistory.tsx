"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ShareHistory } from "@prisma/client";

export default function ShareHistoryComponent({
  shareHistoryList,
}: {
  shareHistoryList: ShareHistory[];
}) {
  return (
    <>
      <Card className="p-0 overflow-auto">
        {shareHistoryList && (
          <Table className="">
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>Date of ownership</TableHead>
                <TableHead>Ownership type</TableHead>
                <TableHead>Change in share units </TableHead>
                <TableHead>Balance share</TableHead>
                <TableHead>Rate per share</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {shareHistoryList &&
                shareHistoryList.map((shareHistory, index) => (
                  <TableRow key={index}>
                    <TableCell>{shareHistory.transactionDate}</TableCell>
                    <TableCell>{shareHistory.ownershipType}</TableCell>
                    <TableCell>{shareHistory.unitsOfShareChanged}</TableCell>
                    <TableCell>{shareHistory.balanceUnitsOfShare}</TableCell>
                    <TableCell>{shareHistory.ratePerShare}</TableCell>

                    <TableCell>{shareHistory.remarks}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </>
  );
}
