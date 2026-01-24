import {
  SecurityAdditionNature,
  SecurityClassificationAsPerNFRS,
} from "@prisma/client";
import path from "path";
import { z } from "zod";

export const SecurityTransactionDetailValidationSchema = z
  .object({
    index: z.number(),
    transactionDate: z.date().optional(),
    securityId: z.coerce.number({ message: "Security is required" }),
    quantity: z.number().min(1, { message: "Quantity is required" }),
    price: z.number().min(0, { message: "Price is required" }),
    amount: z.number().min(0, { message: "Amount is required" }),
    isAdditionTransaction: z.boolean({ message: "Buy or sell is required" }),
    remarks: z.string().nullable(),
    //SecurityAdditionNature: z.enum(Object.values(SecurityAdditionNature) as [string, ...string[]])});
    securityAdditionNature: z.nativeEnum(SecurityAdditionNature).nullable(),
    securityClassificationAsPerNFRS: z.nativeEnum(
      SecurityClassificationAsPerNFRS,
    ),
  })
  .refine(
    (data) => {
      if (data.isAdditionTransaction) {
        return !!data.securityAdditionNature;
      }
      return true;
    },
    {
      path: ["securityAdditionNature"],
      message: "Security Addition Nature is required",
    },
  )
  .refine(
    (data) => Math.abs(data.price * data.quantity - data.amount) <= 0.01,
    { path: ["amount"], message: "Quantity * price dont match amount." },
  );
export const SecurityTransactionSaveSchema = z.object({
  transactionDate: z.coerce.date(),
  transactionDetail: z.array(SecurityTransactionDetailValidationSchema),
});
