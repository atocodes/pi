
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

export const sortValues = Object.keys(SortBy).map((s) => {
  const splited = s.split("_");
  if (splited.length > 0) {
    return splited.join(" ");
  }
  return s;
}) as [string];

export enum OrderBy {
  Desc = "desc",
  Asc = "asc",
}

export const orderValues = Object.keys(OrderBy) as [string];
