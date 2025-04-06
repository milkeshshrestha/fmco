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
import getAllUploadHistory from "@/data/shareUpload";
import Link from "next/link";
import { ShareUploadHistory } from "@prisma/client";

export default function UploadHistoryPage() {
  const [uploadShareHistory, setUploadShareHistory] =
    useState<ShareUploadHistory[]>();
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const uploadData = await getAllUploadHistory();
        setUploadShareHistory(uploadData);
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
      <h2>Upload history of shares</h2>
      <p>{loading && "Loading...."}</p>
      {uploadShareHistory && (
        <Card className="p-0">
          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>Date of ownership</TableHead>
                <TableHead>Ownership type</TableHead>
                <TableHead>Remarks</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {uploadShareHistory &&
                uploadShareHistory.map((uploadhistory, index) => (
                  <TableRow key={index}>
                    <TableCell>{uploadhistory.ownershipDate}</TableCell>
                    <TableCell>{uploadhistory.ownershipType}</TableCell>
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
