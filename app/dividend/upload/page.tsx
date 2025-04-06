"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllDividendUploadList } from "@/data/dividend";
import { DividendUploadHistory } from "@prisma/client";

export default function DividendUploadHistoryPage() {
  const [dividendUploadHistory, setDividendUploadHistory] =
    useState<DividendUploadHistory[]>();
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const uploadData = await getAllDividendUploadList();
        setDividendUploadHistory(uploadData);
      } catch (error) {
        console.error("Failed to fetch upload history:", error);
      } finally {
        setLoading(false);
      }
      setLoading(false);
    };
    loadData();
  }, []);
  return (
    <div className="space-y-4">
      <h2>Upload history of dividend</h2>
      <p>{loading && "Loading...."}</p>
      {dividendUploadHistory && (
        <Card className="p-0">
          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>Date </TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Remarks</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {dividendUploadHistory &&
                dividendUploadHistory.map((uploadhistory, index) => (
                  <TableRow key={index}>
                    <TableCell>{uploadhistory.transactionDateRange}</TableCell>
                    <TableCell>{uploadhistory.dividendUploadType}</TableCell>
                    <TableCell>{uploadhistory.remarks}</TableCell>
                    <TableCell>
                      <Link
                        href={`upload/${uploadhistory.id}`}
                        className="border px-2 py-1 rounded-md"
                      >
                        View
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  );
}
