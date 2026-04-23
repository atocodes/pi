import { Customer } from "../cutomers/types";

export type CustomerCredit = {
  id: string;
  customerId: string;
  amount: number;
  paidAmount: number;
  isPaid: boolean;
  reference: string | null;
  note: string | null;
  dueDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
};
