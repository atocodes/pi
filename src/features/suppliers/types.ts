
export interface Supplier {
  id: number;
  name: string;
  phone?: string | null;
  email?: string | null;
  address?: string | null;

  tinNumber?: string | null;

  balance: number;

  batches?: Batch[];
  transactions?: SupplierTransaction[];

  createdAt: Date;
  updatedAt: Date;
}

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

