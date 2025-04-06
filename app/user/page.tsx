"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/data/userData";
import passwordResetAction from "@/actions/user/passwordReset";

export default function UserListPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [userToReset, setUserToReset] = useState<User>();

  const [users, setUsers] = useState<User[]>([]);
  const [resetSuccessMessage, setResetSuccessMessage] = useState("");
  useEffect(() => {
    const getDataFunction = async () => setUsers(await getAllUsers());
    getDataFunction();
  }, []);

  const onResetConfirmAction = async () => {
    await passwordResetAction(userToReset!.id);
    //console.log(userToReset);
    setOpenDialog(false);
    setResetSuccessMessage("Reset successful for user.");
  };
  return (
    <div className="w-50vw">
      {resetSuccessMessage && (
        <span className="bg-green-500/30 w-full text-green-500 p-2 my-5 rounded-md">
          {resetSuccessMessage}
        </span>
      )}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogDescription>
              Are you sure you want to reset the users pasword?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" onClick={onResetConfirmAction}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=" text-left">Name</TableHead>
              <TableHead className=" text-left">Login Name</TableHead>
              <TableHead className="text-left">Email</TableHead>
              <TableHead className="text-left">Password To change</TableHead>
              <TableHead className="text-left">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: User) => (
              <TableRow key={user.id}>
                <TableCell className="text-left">{user.name}</TableCell>
                <TableCell className="text-left">{user.username}</TableCell>
                <TableCell className="text-left">{user.email}</TableCell>
                <TableCell className="text-left">
                  {user.requirePasswordChange ? "Yes" : "No"}
                </TableCell>
                <TableCell className="text-left">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setUserToReset(user);
                      setOpenDialog(true);
                    }}
                  >
                    Reset PW
                  </Button>
                  <DialogTrigger asChild></DialogTrigger>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Dialog>
    </div>
  );
}
