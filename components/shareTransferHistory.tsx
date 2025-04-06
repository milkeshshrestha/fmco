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
import { Prisma } from "@prisma/client";

type ShareHistory = Prisma.ShareHistoryGetPayload<{
  include: { shareTransferHistory: true };
}>;
export default function ShareTransferHistoryComponent({
  shareHistoryList,
}: {
  shareHistoryList: ShareHistory[];
}) {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  return (
    <>
      <Card className="p-0 overflow-auto">
        {shareHistoryList && (
          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>Date of Transfer</TableHead>
                <TableHead>Transfer Type</TableHead>
                <TableHead>Transferred share units </TableHead>
                <TableHead>Transferred Rate</TableHead>
                <TableHead>WACC</TableHead>
                <TableHead>Gain/Loss</TableHead>
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
                    <TableCell>{shareHistory.ratePerShare}</TableCell>
                    <TableCell>
                      {shareHistory.shareTransferHistory?.wacc}
                    </TableCell>
                    <TableCell>
                      {shareHistory.shareTransferHistory?.totalGain}
                    </TableCell>
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
