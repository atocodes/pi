import { MovementHistory } from "../movement_history";
import { Product } from "../products";
import { Supplier } from "../suppliers";

export type Batch = {
  id: string;

  productId: string;
  supplierId: string;

  batchNumber?: string | null;
  invoiceNumber?: string | null;

  quantity: number;
  remainingQty: number;

  costPrice: number;
  sellingPrice: number;

  manufactureDate?: Date | null;
  expiryDate: Date;

  product: Product;
  supplier: Supplier;

  movements: MovementHistory[];

  createdAt: Date;
};

