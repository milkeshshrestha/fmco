"use client";

import { createEditSecurity } from "@/actions/trade/createSecurity";
import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SecuritySchema } from "@/zod.schema/securitySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Security, SecurityClassification } from "@prisma/client";
import { LoaderCircleIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function CreateEditSecurity({
  security,
}: {
  security?: Security;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof SecuritySchema>>({
    resolver: zodResolver(SecuritySchema),
    defaultValues: security ?? {},
  });
  const submitHandler = async (data: z.infer<typeof SecuritySchema>) => {
    setIsLoading(true);
    //console.log(data);
    const response = await createEditSecurity(data);
    if (response.success) {
      toast.success(response.message);
      form.reset();
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Create/ Edit Security</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)}>
          <div className="sm:grid sm:grid-cols-3 flex flex-wrap gap-4 pb-4">
            <FormField
              name={"name"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Security Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name of security" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={"shortName"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Security Short Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter short name of security"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={"securityClassification"}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Security Classification</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        {field.value ? field.value : "Select security type"}
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(SecurityClassification).map((s) => (
                          <SelectItem value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">
            Save {isLoading && <LoaderCircleIcon className="animate-spin" />}
          </Button>
        </form>
      </Form>
    </div>
  );
}
