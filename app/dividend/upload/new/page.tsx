// components/UploadForm.jsx
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import Link from "next/link";
import { dividendUploadFormSchema } from "@/zod.schema/dividendSchema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  SelectContent,
  SelectTrigger,
  Select,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircleIcon } from "lucide-react";

const UploadForm = () => {
  const form = useForm<z.infer<typeof dividendUploadFormSchema>>({
    resolver: zodResolver(dividendUploadFormSchema),
    defaultValues: {
      file: undefined,
      dividendUploadType: undefined,
      remarks: "",
      transactionDateRange: "",
    },
  });
  const [pending, setPending] = useState<boolean>(false);
  type FormResponse = {
    success: boolean;
    message: string;
  };
  const [serverResponse, setServerResponse] = useState<FormResponse>();
  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof dividendUploadFormSchema>) => {
    setPending(true);

    const formData = new FormData();
    formData.append("dividendUploadType", data.dividendUploadType);
    formData.append("remarks", data.remarks);
    formData.append("transactionDateRange", data.transactionDateRange);
    formData.append("file", data.file);

    const response = await fetch(`/api/dividend`, {
      method: "POST",
      body: formData,
    });
    //console.log(data);
    const serverResponse = await response.json();
    setServerResponse(serverResponse);
    if (serverResponse.success) {
      toast.success(serverResponse.message);
      router.replace("/");
    }

    setPending(false);
  };
  //file will return file list instead of file which will fail validation so get single file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      form.setValue("file", e.target.files[0]);
      form.trigger("file");
    }
  };

  return (
    <div className=" space-y-4 w-full">
      <h1 className="font-bold">Upload dividend data from excel</h1>
      <Card className="px-4 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="sm:grid sm:grid-cols-2 gap-4 flex ">
              <FormField
                control={form.control}
                name="dividendUploadType"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Type of upload</FormLabel>
                      <FormControl>
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
                            <SelectItem value="Dividend_Allocation">
                              Dividend_Allocation
                            </SelectItem>
                            <SelectItem value="Dividend_Payment">
                              Dividend_Payment
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="transactionDateRange"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Transaction Date Range</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="YYY-MM-DD to YYYY-MM-DD"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <div className="sm:grid sm:grid-cols-2 gap-4 flex ">
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>File</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          placeholder="Select your excel file "
                          accept=".xlsx, .xls"
                          onChange={handleFileChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="remarks"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Remarks</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter remarks" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <div className="my-5 flex gap-3">
              <Button
                className={`${pending ? "disabled" : "enabled"}`}
                disabled={pending}
                type="submit"
              >
                Upload{" "}
                <span hidden={!pending}>
                  <LoaderCircleIcon className="animate-spin"></LoaderCircleIcon>
                </span>
              </Button>
              <Button className="" variant="secondary" asChild>
                <Link href="/documents/dividend_upload_template.xlsx">
                  Download Sample
                </Link>
              </Button>
            </div>
          </form>
        </Form>
      </Card>

      {serverResponse && (
        <Alert variant={serverResponse.success ? "default" : "destructive"}>
          {serverResponse.message}
        </Alert>
      )}
    </div>
  );
};

export default UploadForm;
