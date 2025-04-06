"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useEffect, useState } from "react";
import { Shareholder } from "@prisma/client";
import { getAllShareholders } from "@/data/sharedholderData";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import AdAndBsDateInputWithToggle from "./adAndBsDateInputWithToggle";
import { ShareTransferFormSchema } from "@/zod.schema/shareTransferSchema";
import transferShares from "@/actions/share/transferShare";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";

export default function ShareTransferForm() {
  const [shareholderList, setShareholderList] = useState<Shareholder[]>([]);
  const [receivingShareholderOpen, setReceivingShareholderOpen] =
    useState(false);
  const [transferingShareholderOpen, setTransferingShareholderOpen] =
    useState(false);
  useEffect(() => {
    (async () => {
      const sl = await getAllShareholders();
      setShareholderList(sl);
    })();
  }, []);

  const router = useRouter();
  const handleSubmit = async (data: any) => {
    const response = await transferShares(data);
    if (response.success) {
      toast.success(response.message);
      form.reset();
    } else {
      toast.error(response.message);
      //router.push("/");
    }
  };
  const form = useForm<z.infer<typeof ShareTransferFormSchema>>({
    resolver: zodResolver(ShareTransferFormSchema),
    defaultValues: {
      transferingShareholderId: undefined,
      receivingShareholderId: undefined,
      transferredUnitsOfShare: 0,
      transferType: "Purchase_Sale",
      transferRate: 0,
      remarks: "",
      transferDate: undefined,
    },
  });
  const transferingShareholderId = form.watch("transferingShareholderId");
  const receivingShareholderId = form.watch("receivingShareholderId");

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
                name="transferingShareholderId"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full sm:span-col-1 ">
                    <FormLabel>Transfering Shareholder</FormLabel>

                    <FormControl>
                      <Popover
                        open={transferingShareholderOpen}
                        onOpenChange={setTransferingShareholderOpen}
                      >
                        <PopoverTrigger asChild>
                          {/* adding div is  important else dont work */}
                          <div>
                            {/*type button prevents form auto submt*/}
                            <Button
                              type="button"
                              variant="outline"
                              role="combobox"
                              aria-expanded={transferingShareholderOpen}
                              className={cn(
                                " justify-between w-full",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? (() => {
                                    const shareholder = shareholderList.find(
                                      (shareholder) =>
                                        shareholder.id === field.value
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
                                        "transferingShareholderId",
                                        shareholder.id
                                      );
                                      setTransferingShareholderOpen(false);
                                      form.trigger("transferingShareholderId");
                                      if (!!receivingShareholderId)
                                        form.trigger("receivingShareholderId");
                                    }}
                                  >
                                    {`${shareholder.name} (${shareholder.number})`}
                                    <Check
                                      className={cn(
                                        "ml-auto",
                                        shareholder.id === field.value
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

              <FormField
                name="receivingShareholderId"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full sm:span-col-1">
                    <FormLabel>Receiving Shareholder</FormLabel>

                    <Popover
                      open={receivingShareholderOpen}
                      onOpenChange={setReceivingShareholderOpen}
                    >
                      <PopoverTrigger asChild>
                        <div>
                          <Button
                            type="button"
                            variant="outline"
                            role="combobox"
                            className={cn(
                              " justify-between w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? (() => {
                                  const shareholder = shareholderList.find(
                                    (shareholder) =>
                                      shareholder.id === field.value
                                  );
                                  return `${shareholder?.name} (${shareholder?.number})`;
                                })()
                              : "Select Receiving Shareholder"}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className=" p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search shareholder..."
                            className=""
                          />
                          <CommandList>
                            <CommandEmpty>No shareholder found.</CommandEmpty>
                            <CommandGroup>
                              {shareholderList.map((shareholder) => (
                                <CommandItem
                                  value={shareholder.name}
                                  key={shareholder.id}
                                  disabled={
                                    shareholder.id == transferingShareholderId
                                  }
                                  onSelect={() => {
                                    form.setValue(
                                      "receivingShareholderId",
                                      shareholder.id
                                    );
                                    setReceivingShareholderOpen(false);
                                    form.trigger("receivingShareholderId");
                                  }}
                                >
                                  {`${shareholder.name} (${shareholder.number})`}
                                  <Check
                                    className={cn(
                                      "ml-auto",
                                      shareholder.id === field.value
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:grid sm:grid-cols-6 sm:gap-4 gap-6 flex flex-wrap">
              <FormField
                name="transferType"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 w-full">
                    <FormLabel>Transfer Type</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Purchase_Sale">
                            Purchase_Sale
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="transferredUnitsOfShare"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 w-full">
                    <FormLabel>Number of shares to transfer</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Enter number of shares"
                        value={field.value ? Number(field.value) : 0}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="transferRate"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 w-full">
                    <FormLabel>Rate of transfer</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Enter rate of transfer"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:grid sm:grid-cols-8 sm:gap-4 gap-6  flex flex-wrap">
              <FormField
                name="transferDate"
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
            <Button type="submit">Transfer</Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
