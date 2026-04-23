import { CustomerRepoImpl } from "./repositories/customer.repo.impl";
import { CustomerService } from "./services/customers.service";

export const customerService = new CustomerService(new CustomerRepoImpl());
