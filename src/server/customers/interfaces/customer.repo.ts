import { SearchCustomerValues } from "@/features/customers/schema/searchCustomers.schema";
import { Customer } from "@/features/customers/types";

export interface CustomerRepo {
  findAll(params?: SearchCustomerValues): Promise<Customer[]>;
  findById(id: string): Promise<Customer | null>;
  create(data: Customer): Promise<any>;
  update(id: string, data: Customer): Promise<any>;
  delete(id: string): Promise<any>;
}
