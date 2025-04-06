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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shareholderUploadFormSchema } from "@/zod.schema/shareholderUploadFormSchema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

const UploadForm = () => {
  const form = useForm({
    resolver: zodResolver(shareholderUploadFormSchema),
  });
  const [pending, setPending] = useState<boolean>(false);

  const [response, setResponse] = useState<FormResponse>({
    success: true,
    message: "",
  });
  const onSubmit = async (data: any) => {
    setPending(true);
    const formData = new FormData();
    formData.append("file", data.file);
    setResponse({ success: true, message: "" });
    try {
      const response = await fetch(`/api/shareholder`, {
        method: "POST",
        body: formData,
      });

      const errorResponse = await response.json();
      setResponse(errorResponse);
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
                Submit
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

      {pending ? (
        <div>
          Submitting...{" "}
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
      {response.message && (
        <Alert variant={response.success ? "default" : "destructive"}>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{response.message}</AlertTitle>
          {!response.success && (
            <AlertDescription>
              {response?.error?.split("\n").map((text, index) => (
                <React.Fragment key={index}>
                  {text}
                  <br />
                </React.Fragment>
              ))}
            </AlertDescription>
          )}
        </Alert>
      )}
    </div>
  );
};

export default UploadForm;
