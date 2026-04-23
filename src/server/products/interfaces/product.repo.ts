import { Product, ProductWithRelation } from "@/features/products/types";
import { SearchProductValues } from "@/features/products/schema/product.schema";

export interface ProductRepo {
  findAll(params?: SearchProductValues): Promise<ProductWithRelation[]>;
  findById(id: string): Promise<ProductWithRelation | null>;
  create(data: Product): Promise<any>;
  update(id: string, data: Product): Promise<any>;
  delete(id: string): Promise<any>;
}
