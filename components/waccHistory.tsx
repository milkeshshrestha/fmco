"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { WaccHistory } from "@prisma/client";

export default function WaccHistoryComponent({
  waccHistoryList,
}: {
  waccHistoryList: WaccHistory[];
}) {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  return (
    <>
      <Card className="p-0 overflow-auto">
        {waccHistoryList && (
          <Table className="">
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>Date of Calculation</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>Total Share Owned </TableHead>
                <TableHead>Wacc</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {waccHistoryList &&
                waccHistoryList.map((waccHistory, index) => (
                  <TableRow key={index}>
                    <TableCell>{waccHistory.calculationDate}</TableCell>
                    <TableCell>{waccHistory.totalCost}</TableCell>
                    <TableCell>{waccHistory.totalUnitsOfShare}</TableCell>
                    <TableCell>{waccHistory.wacc}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </>
  );
}

// function groupShares(arr: Share[]): GroupedShare[] {
//   if (arr.length === 0) return [];

//   // Step 1: Sort by type, date, and number
//   const sorted = [...arr].sort((a, b) => {
//     if (a.ownershipType !== b.ownershipType) return -1;
//     if (a.ownershipDate !== b.ownershipDate) return -1;
//     return a.number - b.number;
//   });

//   const result: GroupedShare[] = [];
//   let start = sorted[0].number;
//   let end = sorted[0].number;
//   let currentType = sorted[0].ownershipType;
//   let currentDate = sorted[0].ownershipDate;

//   for (let i = 1; i < sorted.length; i++) {
//     const curr = sorted[i];

//     // Check if same type, date, and consecutive number
//     if (
//       curr.ownershipType === currentType &&
//       curr.ownershipDate === currentDate &&
//       curr.number === end + 1
//     ) {
//       //increase number and move to next
//       end = curr.number;
//     } else {
//       // Push previous range
//       result.push({
//         number: start === end ? start : `${start}-${end}`,
//         ownershipType: currentType,
//         ownershipDate: currentDate,
//         unitsOfShare: end - start + 1,
//       });

//       // Reset
//       start = end = curr.number;
//       currentType = curr.ownershipType;
//       currentDate = curr.ownershipDate;
//     }
//   }

//   // Push last range/item
//   result.push({
//     number: start === end ? start : `${start}-${end}`,
//     ownershipType: currentType,
//     ownershipDate: currentDate,
//     unitsOfShare: end - start + 1,
//   });

//   return result;
// }
