import { convertSortEnumToCamelCase } from "@/lib/utils";
import { SearchCustomerValues } from "../schemas/searchCustomers.schema";

export const getCustomers = async (params?: SearchCustomerValues) => {
  const param = new URLSearchParams();
  if (params) {
    if (params.q) param.set("q", params.q.toLowerCase());
    if (params.order) param.set("order", params.order.toLocaleLowerCase());
    if (params.sortBy)
      param.set("sortBy", convertSortEnumToCamelCase(params.sortBy));
  }
  console.log(param.toString())

  return fetch(`/api/customers?${param.toString()}`);
};

export const createCustomer = async (data: any) =>
  fetch("/api/customers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const getSingleCustomer = async (id: string) =>
  fetch(`/api/customers/${id}`);

export const updateCustomer = async (id: string, data: any) =>
  fetch(`/api/customers/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

export const deleteCustomer = async (id: string) =>
  fetch(`/api/customers/${id}`, {
    method: "DELETE",
  });
