import { convertSortEnumToCamelCase } from "@/lib/utils";
import { SearchProductValues } from "../schema/product.schema";

export const createNewProduct = async (data: any): Promise<any> => {
  const res = await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const product = await res.json();
  if (!res.ok) throw new Error(product.message);
  return product;
};

export const findSingleProduct = async (id: string) => {
  const res = await fetch(`/api/products/${id}`);
  const product = await res.json();
  if (!res.ok) throw new Error(product.message);
  return product;
};

export const getProducts = async (filters?: SearchProductValues) => {
  const params = new URLSearchParams();
  if (filters) {
    let sb: string | undefined;
    if (filters.sortBy) {
      sb = convertSortEnumToCamelCase(filters.sortBy);
      params.set("sortBy", sb);
    }
    if (filters.order) params.set("order", filters.order);
    if (filters.q) params.set("q", filters.q);
  }
  const res = await fetch(`/api/products?${params?.toString()}`);
  const products = await res.json();
  if (!res.ok) throw new Error(products.message);
  return products;
};

export const editProduct = async (data: any, id: string | undefined) => {
  const res = await fetch(`/api/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const product = await res.json();
  if (!res.ok) throw new Error(product.message);
  return product;
};

export const removeProduct = async (id: string) => {
  const res = await fetch(`/api/products/${id}`, {
    method: "DELETE",
  });
  const product = await res.json();
  if (!res.ok) throw new Error(product.message);
  return product;
};
