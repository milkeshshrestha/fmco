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
import { Dividend } from "@prisma/client";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { Trash2Icon } from "lucide-react";
import deleteDividendEntry from "@/actions/dividend/deleteDividendEntry";

const DeleteDividendEntryDialog = ({
  dividendToDelete,
  onSuccess,
}: {
  dividendToDelete: Dividend;
  onSuccess: () => void;
}) => {
  //todo get branch of logged in user

  const { data: session, status } = useSession();

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const deleteConfirmHandler = async () => {
    const response = await deleteDividendEntry(dividendToDelete.id);
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
          <DialogTitle>Delete Dividend Entry</DialogTitle>
        </DialogHeader>
        Are you sure you want to delete the dividend entry for Rs.{" "}
        {dividendToDelete.amount}? This cannot be undone.
        <DialogFooter>
          <Button variant="destructive" onClick={deleteConfirmHandler}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteDividendEntryDialog;
