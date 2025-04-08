"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // Import zodResolver
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdAndBsDateInputWithToggle from "@/components/adAndBsDateInputWithToggle";
import { Button } from "@/components/ui/button";
import { ShareUploadSchema } from "@/zod.schema/shareSchema";
import { Card, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoaderCircleIcon } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { userAgent } from "next/server";

export default function UploadForm() {
  const form = useForm<z.infer<typeof ShareUploadSchema>>({
    resolver: zodResolver(ShareUploadSchema), // Connect Zod schema to the form
    defaultValues: {
      file: undefined,
      ownershipDate: undefined,
      ownershipType: undefined,
      remarks: "",
    },
  });
  const [serverResponse, setServerResponse] = useState<{
    success: boolean;
    message: string;
  }>();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (data: z.infer<typeof ShareUploadSchema>) => {
    // const response = await uploadShareData(formData);
    setSubmitting(true);
    const formData = new FormData();
    formData.append("ownershipType", data.ownershipType);
    formData.append("remarks", data.remarks);
    formData.append("ownershipDate", data.ownershipDate);
    formData.append("file", data.file);

    const response = await fetch(`/api/share/upload`, {
      method: "POST",
      body: formData,
    });
    //console.log(data);
    const serverResponse = await response.json();
    setServerResponse(serverResponse);
    if (serverResponse.success) {
      toast.success(serverResponse.message);
      router.push("/share/upload"); // Redirect to the upload history page
      //form.reset(); // Reset the form after successful submission
    }
    setSubmitting(false);
  };

  return (
    <div className="px-4 space-y-4">
      <CardTitle>Upload Share Transaction</CardTitle>
      <Card className="px-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-6 sm:grid sm:grid-cols-6 ">
              <FormField
                name="ownershipType"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full sm:col-span-2">
                    <FormLabel>Select Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Promoter_Share_Purchase">
                            Promoter_Share_Purchase
                          </SelectItem>
                          <SelectItem value="Ipo_Purchase" key={"Ipo_Purchase"}>
                            Ipo_Purchase
                          </SelectItem>
                          <SelectItem value="Bonus_Share" key={"Bonus_Share"}>
                            Bonus_Share
                          </SelectItem>
                          <SelectItem value="Right_Share" key={"Right_Share"}>
                            Right_Share
                          </SelectItem>
                          <SelectItem value="Other" key={"Other"}>
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="file"
                render={({ field }) => (
                  <FormItem className="w-full sm:col-span-4">
                    <FormLabel>Select file</FormLabel>
                    <FormControl>
                      <Input
                        type="file" // spreading {...field} gives error in case of field input
                        accept=".xlsx"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          field.onChange(file); // Ensure only a single file is stored
                          //setSelectedFile(file);
                        }}
                        // onChange={(e) => setFile(e.target.files?.[0] || null)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-wrap gap-6 sm:grid sm:grid-cols-6 ">
              <FormField
                name="ownershipDate"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full sm:col-span-2">
                    <FormLabel>Ownership date</FormLabel>
                    <FormControl>
                      <AdAndBsDateInputWithToggle
                        {...field}
                        value={field.value || ""}
                        onChange={(value: string) => {
                          field.onChange(value);
                          form.setValue("ownershipDate", value);
                          form.trigger("ownershipDate");
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="remarks"
                render={({ field }) => (
                  <FormItem className="w-full sm:col-span-4">
                    <FormLabel>Remarks</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Enter remarks" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-6">
              <Button type="submit" disabled={submitting}>
                Upload{" "}
                <span hidden={!submitting}>
                  <LoaderCircleIcon className={`animate-spin`} />
                </span>
              </Button>
              <Button className="" variant="secondary" asChild>
                <Link href="/documents/share_upload_template.xlsx">
                  Download Sample
                </Link>
              </Button>
            </div>
          </form>
        </Form>
        {serverResponse && (
          <Alert
            className={"whitespace-pre-line"}
            variant={serverResponse.success ? "default" : "destructive"}
          >
            {serverResponse.message}
          </Alert>
        )}
      </Card>
    </div>
  );
}
