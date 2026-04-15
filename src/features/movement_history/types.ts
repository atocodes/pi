import { Customer } from "../cutomers/types";
import { Batch, Product } from "../products/types";

export interface MovementHistory {
  id: number;

  productId: number;
  batchId?: number | null;
  customerId?: number | null;

  type: MovementType;
  quantity: number;

  reference?: string | null;
  note?: string | null;

  product?: Product;
  batch?: Batch;
  customer?: Customer;

  createdAt: Date;
}


export enum MovementType {
  SALE = "SALE",
  PURCHASE = "PURCHASE",
  RETURN = "RETURN",
  ADJUSTMENT = "ADJUSTMENT",
  EXPIRED = "EXPIRED",
}