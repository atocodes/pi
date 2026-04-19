import { formatSnakeCaseToText } from "./utils";

export const LOGINTOKEN = "login-token";
export const USERID = "user-id";

export enum SortBy {
  Created_At = "createdAt",
  Cost_Price = "costPrice",
  Expiry_Date = "expiryDate",
  Id = "id",
  Product_Id = "productId",
  Quantity = "quantity",
  Remaining_Qty = "remainingQty",
  Selling_Price = "sellingPrice",
  Supplier_Id = "supplierId",
}

export enum SupplierSortByKeys {
  Created_At = "createdAt",
  Name = "name",
  TIN_Number = "tinNumber",
}

export const sortValues = Object.keys(SortBy).map(formatSnakeCaseToText) as [
  string,
];
export const supplierSortValues = Object.keys(SupplierSortByKeys).map(
  formatSnakeCaseToText,
) as [string];

export enum OrderBy {
  Desc = "desc",
  Asc = "asc",
}

export const orderValues = Object.keys(OrderBy) as [string];

// api constants
export const headers = {
  "Content-Type": "application/json",
};
