import { z } from "zod";
import { Batch } from "../types";
import { orderValues, sortValues } from "@/lib/constants";




export const searchSchema = z.object({
  name: z.string().nullable().optional(),
  sortBy: z.enum(sortValues).nullable().optional(),
  order: z.enum(orderValues).nullable().optional(),
  expiredOnly: z.boolean().nullable(),
  expiringSoonOnly: z.boolean().nullable(),
});

export const batchSchema = z.object({
  product: z.string(),
  batchNumber: z.string().nullable().optional(),
  expiryDate: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), "Invalid date"),
  manufactureDate: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), "Invalid date"),
});


export type SearchValues = z.infer<typeof searchSchema>;
