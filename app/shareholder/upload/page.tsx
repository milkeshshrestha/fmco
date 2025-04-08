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
import { LoaderCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shareholderUploadFormSchema } from "@/zod.schema/shareholderUploadFormSchema";
import Link from "next/link";
import { toast } from "sonner";

const UploadForm = () => {
  const form = useForm({
    resolver: zodResolver(shareholderUploadFormSchema),
  });
  const [pending, setPending] = useState<boolean>(false);

  const [response, setResponse] = useState<FormResponse>();
  const onSubmit = async (data: any) => {
    setPending(true);
    const formData = new FormData();
    formData.append("file", data.file);
    try {
      const response = await fetch(`/api/shareholder`, {
        method: "POST",
        body: formData,
      });
      const responseJson = await response.json();
      setResponse(responseJson);
      if (responseJson.success) {
        toast.success(responseJson.message);
        form.reset();
      } else {
        toast.error(responseJson.message);
      }
    } catch (error: any) {
      setResponse({ success: false, error: error.message });
    }
    setPending(false);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      form.setValue("file", e.target.files[0]);
    }
  };

  return (
    <div className="container md:w-4/6 ">
      <h1 className="text-2xl font-bold mb-8">
        Upload shareholder data from excel
      </h1>
      <div className="mb-4 md:w-3/6 sm:w-4/6">
        <Form {...form}>
          <form action={onSubmit} onSubmit={form.handleSubmit(onSubmit)}>
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
            <div className="py-5 flex gap-3">
              <Button
                className={`${pending ? "disabled" : "enabled"}`}
                disabled={pending}
                type="submit"
              >
                Submit{" "}
                <span hidden={!pending}>
                  <LoaderCircleIcon className="ml-2 h-4 w-4 animate-spin" />
                </span>
              </Button>
              <Button className="" variant="secondary" asChild>
                <Link href="/documents/shareholder_upload_template.xlsx">
                  Download Sample
                </Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {response && (
        <Alert variant={response.success ? "default" : "destructive"}>
          {response.message}
        </Alert>
      )}
    </div>
  );
};

export default UploadForm;
