import { productRepositories } from "../repositories/product.repo";
import { Product } from "../../../features/products/types";
import { SearchProductValues } from "@/features/products/schemas/product.schema";

// Real Logic lives here

export const productService = {
  getProducts: async (params?: SearchProductValues) => {
    if (params?.order) params.order = params?.order.toLowerCase();
    return productRepositories.findAll(params);
  },

  getProduct: async (id: string) => {
    const product = await productRepositories.findById(id);
    if (!product) throw new Error("Product not found");
    return product;
  },

  createProduct: async (data: Product) => {
    // busuness rules  here
    if (data.barcode == "") data.barcode = null;
    return productRepositories.create({
      ...data,
      createdAt: new Date(),
    });
  },

  updateProduct: async (id: string, data: Product) => {
    return productRepositories.update(id, data);
  },

  delteProduct: async (id: string) => {
    return productRepositories.delete(id);
  },
};
