import { CustomerCredit } from "../customer_creadits/types";
import { MovementHistory } from "../movement_history/types";

export type Customer = {
  id: string;
  name: string;
  phone: string | null;
  address: string | null;
  contactName?: string | null;

  tinNumber?: string | null;

  credits: CustomerCredit[];
  movements: MovementHistory[];

  createdAt: Date;
  updatedAt: Date;
};
