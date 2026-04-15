import { Prisma } from "../../../generated/prisma/browser";
import { Unit } from "../../../generated/prisma/client";
import { MovementHistory } from "../movement_history/types";
import { Supplier } from "../suppliers/types";

export type Product = {
  id: string | undefined;
  name: string;

  sku: string | null;
  barcode: string | null;

  category: string | null;
  unit: Unit | null;

  sellingPrice: number;
  description?: string | null;

  lowStockAlert?: number | null;

  stock: number;

  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductWithRelation = Prisma.ProductGetPayload<{
  include: {
    batches: true;
    movements: true;
  };
}>;

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

  product: Product | null;
  supplier: Supplier | null;

  movements: MovementHistory[];

  createdAt: Date;
};
