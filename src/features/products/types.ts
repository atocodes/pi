import { Prisma } from "../../../generated/prisma/browser";
import { Unit } from "../../../generated/prisma/client";

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

