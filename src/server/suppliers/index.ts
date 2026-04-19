import { SupplierRepoImpl } from "./repositories/supplier.repo.impl";
import { SupplierService } from "./services/supplier.service";

export const supplierService = new SupplierService(new SupplierRepoImpl());
