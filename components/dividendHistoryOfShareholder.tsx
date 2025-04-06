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
import { useEffect, useState } from "react";
import { Dividend } from "@prisma/client";

type DividendWithCumAmount = Dividend & { cumAmount: number };
export default function DividendHistoryComponent({
  dividendHistory,
}: {
  dividendHistory: Dividend[];
}) {
  const [dividendData, setDividendData] = useState<DividendWithCumAmount[]>();

  useEffect(() => {
    dividendHistory.sort((a, b) => {
      if (a.transactionDate == b.transactionDate) {
        return a.entryDate > b.entryDate ? 1 : 0;
      } else {
        return a.transactionDate > b.transactionDate ? 1 : -1;
      }
    });
    let cumSum = 0;
    const divWithCumAmount = dividendHistory.map((dividend) => {
      cumSum += dividend.amount;
      return {
        ...dividend,
        cumAmount: cumSum,
      };
    }) as DividendWithCumAmount[];
    setDividendData(divWithCumAmount);
  }, []);

  return (
    <>
      <Card className="p-0 overflow-auto">
        <Table className="">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Transaction Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Cumulative Amount</TableHead>
              <TableHead>Sending Bank Name </TableHead>
              <TableHead>Sending Bank Account</TableHead>
              <TableHead>Receiving Bank Name</TableHead>
              <TableHead>Receiving Bank Account</TableHead>
              <TableHead>Remarks</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {dividendData &&
              dividendData.map((dividend, index) => (
                <TableRow key={index}>
                  <TableCell>{dividend.transactionDate}</TableCell>
                  <TableCell>{dividend.amount}</TableCell>
                  <TableCell>{dividend.cumAmount}</TableCell>
                  <TableCell>{dividend.sendingBankName}</TableCell>
                  <TableCell>{dividend.receivingBankName}</TableCell>
                  <TableCell>{dividend.receivingBankAccount}</TableCell>
                  <TableCell>{dividend.remarks}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
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
