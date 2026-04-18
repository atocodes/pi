import { Prisma } from "../../../generated/prisma/browser";

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

  manufactureDate: Date;
  expiryDate: Date;

  createdAt: Date;
};

export type BatchWithRelation = Prisma.BatchGetPayload<{
  include: {
    product: true;
    movements: true;
    supplier: true;
  };
}>;

export type SearchBatchParms = {
  expiredOnly?: boolean | undefined;
  expiringSoonOnly?: boolean | undefined;
  name?: string | undefined;
  order?: string | undefined;
  sortBy?: string | undefined;
};
