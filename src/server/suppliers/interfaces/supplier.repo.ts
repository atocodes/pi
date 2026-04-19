import { SearchSupplierParams, Supplier } from "@/features/suppliers";

export interface SupplierRepo {
  create(data: Supplier): Promise<any>;
  find(params?: SearchSupplierParams ): Promise<any>;
  update(data: Supplier, id: string): Promise<any>;
  findById(id: string): Promise<any>;
  delete(id: string): Promise<any>;
}
