import { CustomerCredit } from "../customer_creadits/types";
import { MovementHistory } from "../movement_history/types";

export interface Customer {
  id: number;
  name: string;
  phone?: string | null;
  address?: string | null;

  credits?: CustomerCredit[];
  movements?: MovementHistory[];

  createdAt: Date;
  updatedAt: Date;
}