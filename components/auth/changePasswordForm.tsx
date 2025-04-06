"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { AlertCircleIcon, CircleCheck } from "lucide-react";
import changePasswordAction, {
  ChangePasswordFormResponse,
} from "@/actions/user/changePassword";
import { useState } from "react";
import { ChangePasswordClientSchema } from "@/zod.schema/changePasswordClientSchema";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

export const ChangePasswordForm = ({ id }: { id: number }) => {
  const form = useForm<z.infer<typeof ChangePasswordClientSchema>>({
    resolver: zodResolver(ChangePasswordClientSchema),
    defaultValues: {
      id: Number(id) | 0,
      existingPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
  });
  const [response, setResponse] = useState<ChangePasswordFormResponse>({
    message: "",
    success: true,
  });
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [showExistingPassword, setShowExistingPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(false);
  const onSubmit = async (
    values: z.infer<typeof ChangePasswordClientSchema>
  ) => {
    values.id = id;
    setPending(true);
    setResponse(await changePasswordAction(values));
    if (response.success) {
      toast.success(response.message);
      router.replace("/auth/login");
    }
    setPending(false);
  };
  return (
    <div className="min-w-[400px]  rounded-lg border">
      <div className="space-y-4 divide-y-2 ">
        <div className="p-4 rounded-t-lg bg-muted">
          <h1 className="font-bold text-center">Change Password</h1>
        </div>
        <div className="p-4 bg-transparent">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="existingPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            placeholder="current password"
                            type={showExistingPassword ? "text" : "password"}
                          ></Input>

                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            tabIndex={-1}
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() =>
                              setShowExistingPassword(!showExistingPassword)
                            }
                          >
                            {showExistingPassword ? (
                              <EyeIcon className="h-4 w-4" aria-hidden="true" />
                            ) : (
                              <EyeOffIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage></FormMessage>
                      {response.error?.existingPassword && (
                        <span className="text-red-600 text-sm ">
                          {response.error.existingPassword}
                        </span>
                      )}
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={showNewPassword ? "text" : "password"}
                            placeholder="new password"
                          ></Input>

                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            tabIndex={-1}
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? (
                              <EyeIcon className="h-4 w-4" aria-hidden="true" />
                            ) : (
                              <EyeOffIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage></FormMessage>
                      {response.error?.newPassword && (
                        <span className=" text-red-600 ">
                          {response.error.newPassword}
                        </span>
                      )}
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="newPasswordConfirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={showNewPasswordConfirm ? "text" : "password"}
                            placeholder="retype new password"
                          ></Input>

                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            tabIndex={-1}
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() =>
                              setShowNewPasswordConfirm(!showNewPasswordConfirm)
                            }
                          >
                            {showNewPasswordConfirm ? (
                              <EyeIcon className="h-4 w-4" aria-hidden="true" />
                            ) : (
                              <EyeOffIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage></FormMessage>
                      {response.error?.newPasswordConfirm && (
                        <span className="text-red-600 text-sm">
                          {response.error.newPasswordConfirm}
                        </span>
                      )}
                    </FormItem>
                  )}
                ></FormField>
              </div>
              {!response.success && response.message && (
                <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
                  <AlertCircleIcon></AlertCircleIcon>
                  <p>{response.message}</p>
                </div>
              )}
              {response.success && response.message && (
                <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
                  <CircleCheck />
                  <p>{response.message}</p>
                  <p>{response.error?.id}</p>
                </div>
              )}
              <Button type="submit" disabled={pending} className="w-full">
                Save
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
