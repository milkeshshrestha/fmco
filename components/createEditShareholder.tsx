"use client";
import { shareholderSchema } from "@/zod.schema/shareholderSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Shareholder } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import AdAndBsDateInputWithToggle from "./adAndBsDateInputWithToggle";
import { Button } from "./ui/button";
import saveShareholder from "@/actions/shareholder/createShareholder";
import { Alert, AlertDescription } from "./ui/alert";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Card, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export default function CreateEditShareholder({
  initialValues,
}: {
  initialValues?: Shareholder;
}) {
  const router = useRouter();
  const form = useForm<z.infer<typeof shareholderSchema>>({
    resolver: zodResolver(shareholderSchema),
    defaultValues: initialValues || {
      id: undefined,
      number: 0,
      name: "",
      ctzIssueDateOrRegDate: null,
      ctzOrRegNumber: null,
      type: "Individual",
      contact: null,
      fatherName: null,
      address: null,
      bankName: null,
      bankAccount: null,
      remarks: null,
    },
  });
  const [isPending, setPending] = useState<boolean>(false);

  const [response, setResponse] = useState<FormResponse>({
    success: true,
    message: "",
  });
  const onSubmit = async (shareholder: z.infer<typeof shareholderSchema>) => {
    setPending(true);
    const response = await saveShareholder(shareholder);
    setResponse(response);
    if (response.success) {
      toast(response.message);
      form.reset();
    } else {
      toast.error(response.message);
    }
    setPending(false);
  };
  return (
    <div className="space-y-2 ">
      <h2 className="font-bold">Create/Edit Shareholder</h2>
      <Card className="px-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="md:grid md:grid-cols-3 space-y-6  md:gap-4  grid grid-cols-1 gap-4">
              <FormField
                name="number"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shareholder Number</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter shareholder number"
                        {...field}
                        value={field.value ? String(field.value) : ""}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Shareholder full name"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="type"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Shareholder Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Individual">Individual</SelectItem>
                        <SelectItem value="Institution">Institution</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="ctzOrRegNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ctz/ Registration number </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Ctz/ Registration number"
                        {...field}
                        value={field.value ?? ""}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="ctzIssueDateOrRegDate"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ctz issue date / Registration date</FormLabel>
                    <FormControl>
                      <AdAndBsDateInputWithToggle
                        {...field}
                        value={field.value || ""}
                        onChange={(value: string | undefined) => {
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="address"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter address"
                        {...field}
                        value={field.value ?? ""}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="fatherName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Father Name (for individual only)</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Shareholder father name"
                        {...field}
                        value={field.value ?? ""}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="contact"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Contact number"
                        {...field}
                        value={field.value ?? ""}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                name="bankName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Bank of Shareholder"
                        {...field}
                        value={field.value ?? ""}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                name="bankAccount"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Account No.</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Bank account number"
                        {...field}
                        value={field.value ?? ""}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="remarks"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Remarks</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="give remarks if any"
                        {...field}
                        value={field.value ?? ""}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isPending}>
              Save
            </Button>
          </form>
        </Form>
        {!response.success && (
          <Alert variant="destructive">
            <AlertDescription>{response.message}</AlertDescription>
          </Alert>
        )}
      </Card>
    </div>
  );
}
