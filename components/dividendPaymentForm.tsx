"use client";
import { getAllShareholders } from "@/data/sharedholderData";
import { Shareholder } from "@prisma/client";
import { useEffect, useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import AdAndBsDateInputWithToggle from "./adAndBsDateInputWithToggle";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { dividendSchema } from "@/zod.schema/dividendSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import createSingleDividend from "@/actions/dividend/createSingle";

export default function SingleDividendCreateForm() {
  const [shareholderList, setShareholderList] = useState<Shareholder[]>([]);
  const [receivingShareholderOpen, setReceivingShareholderOpen] =
    useState(false);

  useEffect(() => {
    (async () => {
      const sl = await getAllShareholders();
      setShareholderList(sl);
    })();
  }, []);

  const router = useRouter();
  const handleSubmit = async (data: any) => {
    const response = await createSingleDividend(data);
    if (response.success) {
      toast.success(response.message);
      form.reset();
    } else {
      toast.error(response.message);
      //router.push("/");
    }
  };
  const form = useForm<z.infer<typeof dividendSchema>>({
    resolver: zodResolver(dividendSchema),
    defaultValues: {
      shareholderNumber: undefined,
      amount: 0,
      receivingBankAccount: null,
      receivingBankName: null,
      sendingBankAccount: null,
      sendingBankName: null,
      remarks: "",
      transactionDate: undefined,
    },
  });
  const receivingShareholderNumber = form.watch("shareholderNumber");

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Transfer shares</h2>
      <Card className="px-4 dark:bg-gray-900">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 gap-6 flex flex-wrap">
              <FormField
                name="shareholderNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full sm:span-col-1 ">
                    <FormLabel>Receiving Shareholder</FormLabel>

                    <FormControl>
                      <Popover
                        open={receivingShareholderOpen}
                        onOpenChange={setReceivingShareholderOpen}
                      >
                        <PopoverTrigger asChild>
                          {/* adding div is  important else dont work */}
                          <div>
                            {/*type button prevents form auto submt*/}
                            <Button
                              type="button"
                              variant="outline"
                              role="combobox"
                              aria-expanded={receivingShareholderOpen}
                              className={cn(
                                " justify-between w-full",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? (() => {
                                    const shareholder = shareholderList.find(
                                      (shareholder) =>
                                        shareholder.number === field.value
                                    );
                                    return `${shareholder?.name} (${shareholder?.number})`;
                                  })()
                                : "Select Transfering Shareholder"}
                              <ChevronsUpDown className="opacity-50" />
                            </Button>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className=" p-0">
                          <Command>
                            <CommandInput placeholder="Search shareholder..." />
                            <CommandList>
                              <CommandEmpty>
                                No shareholders found.
                              </CommandEmpty>
                              <CommandGroup>
                                {shareholderList.map((shareholder) => (
                                  <CommandItem
                                    value={shareholder.name}
                                    key={shareholder.id}
                                    onSelect={() => {
                                      form.setValue(
                                        "shareholderNumber",
                                        shareholder.number
                                      );
                                      setReceivingShareholderOpen(false);
                                      form.trigger("shareholderNumber");
                                      if (!!receivingShareholderNumber)
                                        form.trigger("shareholderNumber");
                                    }}
                                  >
                                    {`${shareholder.name} (${shareholder.number})`}
                                    <Check
                                      className={cn(
                                        "ml-auto",
                                        shareholder.number === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:grid sm:grid-cols-6 sm:gap-4 gap-6 flex flex-wrap">
              <FormField
                name="sendingBankName"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 w-full">
                    <FormLabel>Sending bank name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter name of sending bank"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="sendingBankAccount"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 w-full">
                    <FormLabel>Sending bank account number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter account no. of sending bank"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="receivingBankName"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 w-full">
                    <FormLabel>Receiving bank name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter name of receiving bank"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="receivingBankAccount"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 w-full">
                    <FormLabel>Receiving bank account</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter account no. of receiving bank"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="amount"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 w-full">
                    <FormLabel>
                      <span>
                        Amount (<span className="text-red-600">-ve</span> for
                        payment)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Enter amount"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:grid sm:grid-cols-8 sm:gap-4 gap-6  flex flex-wrap">
              <FormField
                name="transactionDate"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="sm:col-span-3 w-full">
                    <FormLabel>Transfer date</FormLabel>
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
                name="remarks"
                render={({ field }) => (
                  <FormItem className="sm:col-span-5 w-full">
                    <FormLabel>Remarks</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Enter remarks" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
