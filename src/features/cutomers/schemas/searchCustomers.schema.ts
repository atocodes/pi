import z from "zod";

export const searchCustomerSchema = z.object({
  q: z.string().optional().nullable(),
  sortBy: z.string().optional().nullable(),
  order: z.string().optional().nullable(),
});

export type SearchCustomerValues = z.infer<typeof searchCustomerSchema>;
