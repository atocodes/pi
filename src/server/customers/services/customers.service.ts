import { Customer, SearchCustomerType } from "@/features/customers/types";
import { CustomerRepo } from "../interfaces/customer.repo";
import { CustomerRepoImpl } from "../repositories/customer.repo.impl";

export class CustomerService implements CustomerRepo {
  customerRepo: CustomerRepoImpl;

  constructor(repo: CustomerRepoImpl) {
    this.customerRepo = repo;
  }

  async findAll(params?: SearchCustomerType): Promise<Customer[]> {
    return this.customerRepo.findAll(params);
  }

  async findById(id: string): Promise<Customer | null> {
    return this.customerRepo.findById(id);
  }

  async create(data: Customer): Promise<any> {
    return this.customerRepo.create(data);
  }

  async delete(id: string): Promise<any> {
    return this.customerRepo.delete(id);
  }

  async update(id: string, data: Customer): Promise<any> {
    return this.customerRepo.update(id, data);
  }
}
