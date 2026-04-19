import z from "zod";

export const supplierSchema = z.object({
  name: z.string(),
  tinNumber: z.string().optional().nullable(),
  contactName: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
});

export const searchSupplierSchema = z.object({
  q: z.string().nullable().optional(),
  order: z.string().nullable().optional(),
  sortBy: z.string().nullable().optional(),
});

export type FormValues = z.infer<typeof supplierSchema>;
