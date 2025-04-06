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
import { Share } from "@prisma/client";

type GroupedShare = {
  number: string | number;
  ownershipType: string;
  ownershipDate: string;
  unitsOfShare: number;
};

export default function ListShares({ shares }: { shares: Share[] }) {
  return (
    <>
      <Card className="p-0 overflow-auto">
        {shares && (
          <Table className="">
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>Date of ownership</TableHead>
                <TableHead>Ownership type</TableHead>
                <TableHead>Units of share</TableHead>
                <TableHead>Cost per share</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {shares &&
                shares.map((share, index) => (
                  <TableRow key={index}>
                    <TableCell>{share.ownershipDate}</TableCell>
                    <TableCell>{share.ownershipType}</TableCell>
                    <TableCell>{share.unitsOfShare}</TableCell>
                    <TableCell>{share.cost}</TableCell>
                    <TableCell>{share.remarks}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </>
  );
}
