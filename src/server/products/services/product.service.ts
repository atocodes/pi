import { Product } from "@/features/products/types";
import { SearchProductValues } from "@/features/products/schema/product.schema";
import { ProductRepo } from "../interfaces/product.repo";
import { ProductRepoImpl } from "../repositories/product.repo.impl";

export class ProductService implements ProductRepo {
  productRepo: ProductRepoImpl;

  constructor(repo: ProductRepoImpl) {
    this.productRepo = repo;
  }

  async findAll(params?: SearchProductValues) {
    if (params?.order) params.order = params?.order.toLowerCase() as any;
    return await this.productRepo.findAll(params);
  }

  async findById(id: string) {
    const product = await this.productRepo.findById(id);
    if (!product) throw new Error("Product not found");
    return product;
  }

  async create(data: Product) {
    if (data.barcode == "") data.barcode = null;
    return await this.productRepo.create({
      ...data,
      createdAt: new Date(),
    });
  }

  async update(id: string, data: Product) {
    return await this.productRepo.update(id, data);
  }

  async delete(id: string) {
    return await this.productRepo.delete(id);
  }
}
