import z from "zod";
import { MovementType } from "../../../../generated/prisma/enums";

enum PaymentType {
  CASH = "CASH",
  TRANSFER = "TRANSFER",
}

export const paymentTypeValues = Object.values(PaymentType) as [
  string,
  ...string[],
];
export const movementTypeValues = Object.values(MovementType) as [
  string,
  ...string[],
];

export const issueProductItemSchema = z.object({
  quantity: z.coerce.number().min(1, "Quantity must be at least 1"),
  productId: z.string().min(1, "Product is required"),
  batchId: z.string().min(1, "Batch is required"),
  unitPrice: z.coerce.number().min(0, "Unit price must be at least 0"),
});

export const issueProductSchema = z.object({
  issueNumber: z.string().optional(),
  reason: z.enum(movementTypeValues, {
    required_error: "Reason is required",
  }),
  customerId: z.string().optional(),
  paymentType: z.enum(paymentTypeValues),
  notes: z.string().optional(),
  items: z
    .array(issueProductItemSchema)
    .min(1, "At least one item must be added"),
});

export type IssueProductItemValues = z.infer<typeof issueProductItemSchema>;
export type IssueProductValues = z.infer<typeof issueProductSchema>;
