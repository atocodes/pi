import { inventoryService } from "./product.service";

export async function getProducts() {
  const products = await inventoryService.getAllProducts();

  return {
    success: true,
    data: products,
  };
}
