import { Customer, SearchCustomerType } from "@/features/cutomers/types";
import { customerRepositories } from "@/server/customers/repositories/customers.repositores";

export const customerService = {
  getCustomers: async (params?: SearchCustomerType) =>
    customerRepositories.findAll(params),
  getCustomer: async (id: string) => customerRepositories.findById(id),
  createCustomer: async (data: Customer) => customerRepositories.create(data),
  deleteCustomer: async (id: string) => customerRepositories.delete(id),
  updateCustomer: async (id: string, data: Customer) =>
    customerRepositories.update(id, data),
};
