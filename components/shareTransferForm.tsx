"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
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
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
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

  //const router = useRouter();
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
  const form = useForm<
    z.input<typeof ShareTransferFormSchema>,
    any,
    z.output<typeof ShareTransferFormSchema>
  >({
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
      <Card className="px-4 dark:bg-gray-900 overflow-visible">
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 gap-6 flex flex-wrap">
            <FieldGroup>
              <Controller
                name="transferingShareholderId"
                control={form.control}
                render={({ field, fieldState }) => {
                  const selected =
                    shareholderList.find((f) => f.id === field.value) ?? null;
                  return (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="transferingShareholderId">
                        Transfering Shareholder
                      </FieldLabel>
                      <Combobox
                        items={shareholderList}
                        itemToStringLabel={(shareholder) =>
                          shareholder.name + " (" + shareholder.number + ")"
                        }
                        itemToStringValue={(shareholder) =>
                          String(shareholder.id)
                        }
                        isItemEqualToValue={(shareholder, value) =>
                          shareholder.id === value.id
                        }
                        value={selected}
                        onValueChange={(shareholder) =>
                          field.onChange(shareholder?.id ?? undefined)
                        }
                      >
                        <ComboboxInput
                          id="transferingShareholderId"
                          placeholder="Select a shareholder"
                          aria-invalid={fieldState.invalid}
                          onBlur={field.onBlur}
                        />
                        <ComboboxContent>
                          <ComboboxEmpty>No shareholders found.</ComboboxEmpty>
                          <ComboboxList>
                            {(shareholder) => (
                              <ComboboxItem
                                key={shareholder.id}
                                value={shareholder}
                              >
                                {shareholder.name +
                                  " (" +
                                  shareholder.number +
                                  ")"}
                              </ComboboxItem>
                            )}
                          </ComboboxList>
                        </ComboboxContent>
                      </Combobox>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>

            <FieldGroup>
              <Controller
                name="receivingShareholderId"
                control={form.control}
                render={({ field, fieldState }) => {
                  const selected =
                    shareholderList.find((f) => f.id === field.value) ?? null;
                  return (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="receivingShareholderId">
                        Receiving Shareholder
                      </FieldLabel>
                      <Combobox
                        items={shareholderList}
                        itemToStringLabel={(shareholder) =>
                          shareholder.name + " (" + shareholder.number + ")"
                        }
                        itemToStringValue={(shareholder) =>
                          String(shareholder.id)
                        }
                        isItemEqualToValue={(shareholder, value) =>
                          shareholder.id === value.id
                        }
                        value={selected}
                        onValueChange={(shareholder) =>
                          field.onChange(shareholder?.id ?? undefined)
                        }
                      >
                        <ComboboxInput
                          id="receivingShareholderId"
                          placeholder="Select a shareholder"
                          aria-invalid={fieldState.invalid}
                          onBlur={field.onBlur}
                        />
                        <ComboboxContent>
                          <ComboboxEmpty>No shareholders found.</ComboboxEmpty>
                          <ComboboxList>
                            {(shareholder) => (
                              <ComboboxItem
                                key={shareholder.id}
                                value={shareholder}
                              >
                                {shareholder.name +
                                  " (" +
                                  shareholder.number +
                                  ")"}
                              </ComboboxItem>
                            )}
                          </ComboboxList>
                        </ComboboxContent>
                      </Combobox>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 gap-6 flex flex-wrap">
            <FieldGroup>
              <Controller
                name="transferType"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Transfer Type</FieldLabel>
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
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldGroup>
              <Controller
                name="transferredUnitsOfShare"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Transferred Units of Share</FieldLabel>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Enter number of shares"
                      value={field.value ? Number(field.value) : 0}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Convert to number or undefined
                        field.onChange(
                          value === "" ? undefined : Number(value),
                        );
                      }}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldGroup>
              <Controller
                name="transferRate"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Transfer Rate</FieldLabel>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Enter transfer rate"
                      value={field.value ? Number(field.value) : 0}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Convert to number or undefined
                        field.onChange(
                          value === "" ? undefined : Number(value),
                        );
                      }}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 gap-6  flex flex-wrap">
            <FieldGroup>
              <Controller
                name="transferDate"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Transfer Date</FieldLabel>
                    <AdAndBsDateInputWithToggle
                      {...field}
                      value={field.value || ""}
                      onChange={(value: string | undefined) => {
                        field.onChange(value);
                      }}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldGroup>
              <Controller
                name="remarks"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Remarks</FieldLabel>
                    <Textarea {...field} placeholder="Enter remarks" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </div>
          <Button type="submit">Transfer</Button>
        </form>
      </Card>
    </div>
  );
}
