import z from "zod";
import { MovementType, PaymentType } from "../../../../generated/prisma-client";

export const paymentTypeValues = Object.values(PaymentType) as [
  string,
  ...string[],
];
export const movementTypeValues = Object.values(MovementType) as [
  string,
  ...string[],
];

export const movementItemSchema = z.object({
  quantity: z.coerce.number().min(1, "Quantity must be at least 1"),
  productId: z.string().min(1, "Product is required"),
  batchId: z.string().min(1, "Batch is required"),
  unitPrice: z.coerce.number().min(0, "Unit price must be at least 0"),
});

export const movementSchema = z.object({
  issueNumber: z.string().optional(),
  receiveNumber: z.string().optional(),
  type: z.enum(movementTypeValues),
  customerId: z.string().optional(),
  supplierId: z.string().optional(),
  paymentType: z.enum(paymentTypeValues).optional(),
  notes: z.string().optional(),
  items: z.array(movementItemSchema).min(1),
});

export type MovementItemValues = z.infer<typeof movementItemSchema>;
export type MovementValues = z.infer<typeof movementSchema>;
