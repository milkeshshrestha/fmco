"use client";
import AdAndBsDateInputWithToggle from "@/components/adAndBsDateInputWithToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getSecuritiesList, getTransactionsOfTheDay } from "@/data/trade";
import {
  Prisma,
  Security,
  SecurityAdditionNature,
  SecurityClassificationAsPerNFRS,
  SecurityTransactionDetail,
} from "@prisma/client";
import {
  Check,
  ChevronsUpDown,
  LoaderCircleIcon,
  PencilLineIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { SecurityTransactionDetailValidationSchema } from "@/zod.schema/securityTransactionSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { saveSecurityTransaction } from "@/actions/trade/recordSecurityTransaction";
//import { Switch } from "@/components/ui/switch";
// type SecurityTransactionDetailCustom = Omit<
//   SecurityTransactionDetail,
//   "securityTransactionId"
// >;
type SecurityTransactionDetailCustom = z.infer<
  typeof SecurityTransactionDetailValidationSchema
>;
export default function DailyTransactionPage() {
  const [transactionDate, setTransactionDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [securityList, setSecurityList] = useState<Security[]>([]);
  const [transactionData, setTransactionData] = useState<
    SecurityTransactionDetailCustom[]
  >([]);
  const [purchaseTransactionData, setPurchaseTransactionData] = useState<
    SecurityTransactionDetailCustom[]
  >([]);
  const [saleTransactionData, setSaleTransactionData] = useState<
    SecurityTransactionDetailCustom[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [securityPopoverOpen, setSecurityPopoverOpen] = useState(false);
  const form = useForm<SecurityTransactionDetailCustom>({
    defaultValues: {
      index: undefined,
      quantity: 0,
      price: 0,
      amount: 0,
      isAdditionTransaction: true,
      remarks: "",
      securityId: undefined,
      securityAdditionNature: null,
      securityClassificationAsPerNFRS: undefined,
    },
    resolver: zodResolver(SecurityTransactionDetailValidationSchema),
  });
  const isAdditionTransaction = form.watch("isAdditionTransaction");
  const onclickHandler = async () => {
    setIsLoading(true);
    if (!transactionDate) toast("Please select a date");
    if (transactionDate) {
      const tradeDuringTheDay = await getTransactionsOfTheDay(
        new Date(transactionDate)
      );
      if (!tradeDuringTheDay) {
        toast("No data found");
        setIsLoading(false);
        setTransactionData([]);
        return;
      }
      const transactionDataForSchema =
        tradeDuringTheDay.securityTransactionDetail.map((td) => {
          return {
            securityId: td.securityId,
            quantity: Math.abs(td.quantity),
            isAdditionTransaction: td.quantity > 0 ? true : false,
            price: td.price,
            amount: td.amount,
            securityAdditionNature: td.securityAdditionNature,
            securityClassificationAsPerNFRS: td.securityClassificationAsPerNFRS,
            index: td.id,
            remarks: td.remarks,
          };
        });
      setIsDataRecentlyLoaded(true);
      setTransactionData(transactionDataForSchema);
    }
    setIsLoading(false);
  };
  const addNewAdditionButtonHandler = () => {
    form.reset();
    form.setValue("isAdditionTransaction", true);
    form.setValue("index", transactionData.length + 1);
    setDialogOpen(true);
  };
  const addNewSalesButtonHandler = () => {
    form.reset();
    form.setValue("isAdditionTransaction", false);
    form.setValue("index", transactionData.length + 1);
    setDialogOpen(true);
  };
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const onDeleteHandler = (index: number) => {
    setTransactionData(transactionData.filter((td) => td.index != index));
  };
  const [isDataRecentlyLoaded, setIsDataRecentlyLoaded] = useState(false);
  const onDateChangeHandler = (date: string) => {
    if (isDataRecentlyLoaded) setTransactionData([]);
    setTransactionDate(date);
    setIsDataRecentlyLoaded(false);
  };
  const onEditHandler = (index: number) => {
    //{ keepDefaultValues: true } prevents original default from changing
    form.reset(
      transactionData.find((td) => td.index == index),
      { keepDefaultValues: true }
    );
    setDialogOpen(true);
  };
  useEffect(() => {
    const fetchSecuritiesList = async () => {
      const securitiesList = await getSecuritiesList();
      setSecurityList(securitiesList);
    };
    fetchSecuritiesList();
  }, []);
  const handleSubmit = async (
    data: z.infer<typeof SecurityTransactionDetailValidationSchema>
  ) => {
    toast("Transaction Record Added");
    const isPurchaseCurrentlySelected = isAdditionTransaction;

    setTransactionData([
      ...transactionData.filter((td) => td.index != data.index),
      { ...data },
    ]);
    form.reset();
    form.setValue("index", transactionData.length + 1);
    form.setValue("isAdditionTransaction", isPurchaseCurrentlySelected);
  };
  useEffect(() => {
    setPurchaseTransactionData(
      transactionData
        .filter((td) => td.isAdditionTransaction)
        .sort((a, b) => a.index - b.index)
    );
    setSaleTransactionData(
      transactionData
        .filter((td) => !td.isAdditionTransaction)
        .sort((a, b) => a.index - b.index)
    );
  }, [transactionData]);
  const saveButtonClickHandler = () => {
    if (!transactionDate) {
      toast.error("Select transaction date first");
      return;
    }
    if (transactionData.length == 0) {
      toast.error("No transaction data to save");
      return;
    }
    const data = {
      transactionDate: new Date(transactionDate),
      transactionDetail: transactionData,
    };
    const response = saveSecurityTransaction(data);
  };
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center ">
        <div className="min-w-xs">
          <Label htmlFor="fromDate" className="pb-2">
            Date
          </Label>
          <AdAndBsDateInputWithToggle
            value={new Date().toISOString().split("T")[0]}
            required={true}
            id="date"
            onChange={(value: any) => onDateChangeHandler(value)}
          />
        </div>
        <Button onClick={onclickHandler} disabled={isLoading}>
          Load
          {
            <span hidden={!isLoading}>
              <LoaderCircleIcon className="ml-2 h-4 w-4 animate-spin" />
            </span>
          }
        </Button>
      </div>
      <Separator />
      <div className="flex flex-wrap gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
        <div className=" flex-1 rounded-md w-full">
          <Card className="py-2 gap-2 ">
            <CardHeader className="flex py-1 border-b [.border-b]:pb-1">
              <span className="flex-auto">Purchases </span>

              <Button
                variant="outline"
                size={"sm"}
                className="py-1"
                onClick={addNewAdditionButtonHandler}
              >
                <PlusIcon />
              </Button>
            </CardHeader>
            <CardContent className="px-2 py-0">
              <div className="flex flex-col gap-2">
                <div className="rounded-lg overflow-hidden">
                  <Table className="">
                    <TableHeader className="bg-muted">
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Nature</TableHead>
                        <TableHead>NFRS</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {purchaseTransactionData?.map((transaction, index) => (
                        <TableRow key={index}>
                          <TableCell
                            title={
                              securityList.find(
                                (s) => s.id == transaction.securityId
                              )?.name
                            }
                          >
                            {
                              securityList.find(
                                (s) => s.id == transaction.securityId
                              )?.shortName
                            }
                          </TableCell>
                          <TableCell>
                            {transaction.securityAdditionNature}
                          </TableCell>
                          <TableCell>
                            {transaction.securityClassificationAsPerNFRS}
                          </TableCell>
                          <TableCell>{transaction.quantity}</TableCell>
                          <TableCell>{transaction.price}</TableCell>
                          <TableCell>{transaction.amount}</TableCell>
                          <TableCell>
                            <div className="flex gap-2 ">
                              <Button
                                variant={"outline"}
                                size={"sm"}
                                title="Edit item "
                                onClick={() => onEditHandler(transaction.index)}
                              >
                                <PencilLineIcon />
                              </Button>

                              <Button
                                variant={"outline"}
                                size={"sm"}
                                title="Delete item "
                                className="!border-red-400 "
                                onClick={() =>
                                  onDeleteHandler(transaction.index)
                                }
                              >
                                <Trash2Icon />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {purchaseTransactionData.length > 1 && (
                        <TableRow>
                          <TableCell colSpan={3}>Total</TableCell>
                          <TableCell>
                            {purchaseTransactionData.reduce(
                              (accumulator, currentValue) =>
                                accumulator + currentValue.quantity,
                              0
                            )}
                          </TableCell>
                          <TableCell></TableCell>
                          <TableCell>
                            {purchaseTransactionData.reduce(
                              (accumulator, currentValue) =>
                                accumulator + currentValue.amount,
                              0
                            )}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* <Separator orientation="vertical" className="bg-white" /> */}
        <div className=" flex-1 rounded-md w-full">
          <Card className="py-2 gap-2 ">
            <CardHeader className="flex py-1 border-b [.border-b]:pb-1">
              <span className="flex-auto">Sales </span>

              <Button
                variant="destructive"
                size={"sm"}
                className="py-1"
                onClick={addNewSalesButtonHandler}
              >
                <PlusIcon />
              </Button>
            </CardHeader>
            <CardContent className="px-2 py-0">
              <div className="flex flex-col gap-2">
                <div className="rounded-lg overflow-hidden">
                  <Table className="">
                    <TableHeader className="bg-muted">
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>NFRS</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {saleTransactionData?.map((transaction, index) => (
                        <TableRow key={index}>
                          <TableCell
                            title={
                              securityList.find(
                                (s) => s.id == transaction.securityId
                              )?.name
                            }
                          >
                            {
                              securityList.find(
                                (s) => s.id == transaction.securityId
                              )?.shortName
                            }
                          </TableCell>

                          <TableCell>
                            {transaction.securityClassificationAsPerNFRS}
                          </TableCell>
                          <TableCell>{transaction.quantity}</TableCell>
                          <TableCell>{transaction.price}</TableCell>
                          <TableCell>{transaction.amount}</TableCell>
                          <TableCell>
                            <div className="flex gap-2 ">
                              <Button
                                variant={"outline"}
                                size={"sm"}
                                title="Edit item "
                                onClick={() => onEditHandler(transaction.index)}
                              >
                                <PencilLineIcon />
                              </Button>

                              <Button
                                variant={"outline"}
                                size={"sm"}
                                title="Delete item "
                                className="!border-red-400 "
                                onClick={() =>
                                  onDeleteHandler(transaction.index)
                                }
                              >
                                <Trash2Icon />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {saleTransactionData.length > 1 && (
                        <TableRow>
                          <TableCell colSpan={2}>Total</TableCell>
                          <TableCell>
                            {saleTransactionData.reduce(
                              (accumulator, currentValue) =>
                                accumulator + currentValue.quantity,
                              0
                            )}
                          </TableCell>
                          <TableCell></TableCell>
                          <TableCell>
                            {saleTransactionData.reduce(
                              (accumulator, currentValue) =>
                                accumulator + currentValue.amount,
                              0
                            )}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator />
      <Button onClick={saveButtonClickHandler}>Save</Button>
      <Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
        <DialogContent className="sm:max-w-[800px]  w-full overflow-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="">
              <DialogHeader>
                <DialogTitle>Security Transaction Detail</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 max-h-[400px] overflow-auto pb-4">
                <div className="pb-6">
                  <FormField
                    name="isAdditionTransaction"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex items-center  gap-2">
                        <FormControl className="">
                          <Switch
                            title="Buy/Sell"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Swith Purchase/Sale mode</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-3 items-start gap-4">
                  <FormField
                    name="securityId"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Security</FormLabel>

                        <FormControl>
                          <Popover
                            open={securityPopoverOpen}
                            onOpenChange={setSecurityPopoverOpen}
                          >
                            <PopoverTrigger asChild className="w-full">
                              {/* adding div is  important else dont work */}
                              <div>
                                {/*type button prevents form auto submt*/}
                                <Button
                                  type="button"
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={securityPopoverOpen}
                                  className={cn(
                                    " justify-between w-full",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? (() => {
                                        const security = securityList.find(
                                          (security) =>
                                            security.id === field.value
                                        );
                                        return `${security?.shortName}`;
                                      })()
                                    : "Select Security"}
                                  <ChevronsUpDown className="opacity-50" />
                                </Button>
                              </div>
                            </PopoverTrigger>
                            <PopoverContent className=" p-0">
                              <Command>
                                <CommandInput placeholder="Search security..." />
                                <CommandList>
                                  <CommandEmpty>
                                    No security found.
                                  </CommandEmpty>
                                  <CommandGroup>
                                    {securityList.map((security) => (
                                      <CommandItem
                                        value={`${security?.name} (${security?.shortName})`}
                                        key={security.id}
                                        onSelect={() => {
                                          form.setValue(
                                            "securityId",
                                            security.id
                                          );
                                          setSecurityPopoverOpen(false);
                                          form.trigger("securityId");
                                        }}
                                      >
                                        {`${security?.name} (${security?.shortName})`}
                                        <Check
                                          className={cn(
                                            "ml-auto",
                                            security.id === field.value
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
                  {isAdditionTransaction && (
                    <FormField
                      control={form.control}
                      name="securityAdditionNature"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Addition Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value ?? ""}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select addition type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.values(SecurityAdditionNature).map(
                                (s) => (
                                  <SelectItem value={s}>{s}</SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    name="securityClassificationAsPerNFRS"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>NFRS Classification</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ?? ""}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Object.values(SecurityClassificationAsPerNFRS).map(
                              (s) => (
                                <SelectItem value={s}>{s}</SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid sm:grid-cols-3 items-start gap-4">
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter quantity"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              form.setValue("quantity", Number(e.target.value));

                              if (form.getValues("price") > 0) {
                                form.setValue(
                                  "amount",
                                  Number(e.target.value) *
                                    Number(form.getValues("price"))
                                );
                                form.trigger("amount");
                              }

                              form.trigger("quantity");
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rate</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter rate"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              form.setValue("price", Number(e.target.value));
                              if (form.getValues("quantity") > 0) {
                                form.setValue(
                                  "amount",
                                  Number(e.target.value) *
                                    Number(form.getValues("quantity"))
                                );
                                form.trigger("amount");
                              }
                              form.trigger("price");
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              form.setValue("amount", Number(e.target.value));
                              if (form.getValues("quantity") > 0) {
                                form.setValue(
                                  "price",
                                  Number(
                                    Number(
                                      Number(e.target.value) /
                                        form.getValues("quantity")
                                    ).toFixed(2)
                                  )
                                );
                                form.trigger("price");
                              }
                              form.trigger("amount");
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="remarks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Remarks</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter remarks"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  variant={isAdditionTransaction ? "default" : "destructive"}
                >
                  {`${isAdditionTransaction ? "Buy" : "Sell"} Securities`}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
