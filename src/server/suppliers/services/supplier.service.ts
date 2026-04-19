import { SearchSupplierParams, Supplier } from "@/features/suppliers";
import { SupplierRepo } from "../interfaces/supplier.repo";
import { SupplierRepoImpl } from "../repositories/supplier.repo.impl";

export class SupplierService implements SupplierRepo {
  supplierRepo: SupplierRepoImpl;

  constructor(repo: SupplierRepoImpl) {
    this.supplierRepo = repo;
  }

  async create(data: Supplier): Promise<any> {
    return await this.supplierRepo.create(data);
  }

  async find(params?: SearchSupplierParams): Promise<any> {
    return await this.supplierRepo.find(params);
  }
  async update(data: Supplier, id: string): Promise<any> {
    return await this.supplierRepo.update(data, id);
  }
  async findById(id: string): Promise<any> {
    return await this.supplierRepo.findById(id);
  }
  async delete(id: string): Promise<any> {
    return await this.supplierRepo.delete(id);
  }
}
