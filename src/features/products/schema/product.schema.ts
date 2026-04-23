// Validation Schema (Zod)

import { z } from "zod";
import { Unit } from "../../../../generated/prisma/enums";

export const unitValues = Object.values(Unit) as [string, ...string[]];

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  sku: z.string().nullable().optional(),
  barcode: z.string().nullable().optional(),
  category: z.string().nullable().optional(),
  unit: z.enum(unitValues).nullable().optional(),
  sellingPrice: z.coerce.number().min(0),
  description: z.string().nullable().optional(),
  lowStockAlert: z.coerce.number().nullable().optional(),
  stock: z.coerce.number().min(0),
});

export const searchProductSchema = z.object({
  q: z.string().nullable().optional(),
  sortBy: z.string().nullable().optional(),
  order: z.string().nullable().optional(),
  belowStokoutThreshold: z.boolean().nullable().optional(),
});

export type SearchProductValues = z.infer<typeof searchProductSchema>;
