import { Customer } from "../cutomers/types";

export interface CustomerCredit {
  id: number;
  customerId: number;

  amount: number;
  paidAmount: number;
  isPaid: boolean;

  reference?: string | null;
  note?: string | null;
  dueDate?: Date | null;

  customer?: Customer;

  createdAt: Date;
  updatedAt: Date;
}