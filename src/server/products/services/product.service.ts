import { productRepositories } from "../repositories/product.repo";
import { Product } from "../../../features/products/types";

// Real Logic lives here

export const productService = {
  getProducts: async () => {
    return productRepositories.findAll();
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
