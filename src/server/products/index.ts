import { ProductRepoImpl } from "./repositories/product.repo.impl";
import { ProductService } from "./services/product.service";

export const productService = new ProductService(new ProductRepoImpl());
