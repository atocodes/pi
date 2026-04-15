import { Customer } from "../cutomers/types";
import { Batch, Product } from "../products/types";

export type MovementHistory = {
  id: string;
  createdAt: Date;
  customerId: string | null;
  reference: string | null;
  note: string | null;
  productId: string;
  batchId: string | null;
  type: MovementType;
  quantity: number;
};

export type MovementType =
  | "SALE"
  | "PURCHASE"
  | "RETURN"
  | "ADJUSTMENT"
  | "EXPIRED";
