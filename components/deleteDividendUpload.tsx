"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { DividendUploadHistory } from "@prisma/client";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { Trash2Icon } from "lucide-react";
import deleteDividendUploadHistory from "@/actions/dividend/deleteDividendUploadHistory";

const DeleteDividendUploadDialog = ({
  dividendUploadHistory,
  onSuccess,
}: {
  dividendUploadHistory: DividendUploadHistory;
  onSuccess: () => void;
}) => {
  //todo get branch of logged in user

  const { data: session, status } = useSession();

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const deleteConfirmHandler = async () => {
    const response = await deleteDividendUploadHistory(
      dividendUploadHistory.id
    );
    setOpenDeleteDialog(false);
    if (response.success) onSuccess();
    toast[response.success ? "success" : "error"](response.message);
  };

  return (
    <Dialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}>
      <DialogTrigger asChild>
        <Button variant={"outline"} title="Delete Dividend Upload History">
          <Trash2Icon className="text-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby="">
        <DialogHeader>
          <DialogTitle>Delete Uploaded Dividend</DialogTitle>
        </DialogHeader>
        Are you sure you want to delete the uploaded dividends? This cannot be
        undone.
        <DialogFooter>
          <Button variant="destructive" onClick={deleteConfirmHandler}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteDividendUploadDialog;
