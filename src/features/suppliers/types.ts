import { Prisma } from "../../../generated/prisma/browser";
import { Batch } from "../batches";

export interface Supplier {
  id: string;
  name: string;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  contactName?: string | null;

  tinNumber?: string | null;

  balance: number;

  batches?: Batch[];

  createdAt: Date;
  updatedAt: Date;
}

export type SupplierWithRelation = Supplier & Prisma.BatchGetPayload<{
  include: {
    movements: true;
    product: true;
  };
}>;

export interface SupplierTransaction {
  id: number;
  supplierId: number;

  type: SupplierTransactionType;
  amount: number;

  reference?: string | null;
  note?: string | null;

  supplier?: Supplier;

  createdAt: Date;
}

export enum SupplierTransactionType {
  PURCHASE = "PURCHASE",
  PAYMENT = "PAYMENT",
  RETURN = "RETURN",
}

export type SearchSupplierParams = {
  q?: string | null;
  sortBy?: string | null;
  order?: string | null;
};
