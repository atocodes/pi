import { headers } from "@/lib/constants";
import { SearchValues } from "../schemas/schemas";
import { convertSortEnumToCamelCase } from "@/lib/utils";

const BASEURL = "/api/batches";

export const newBatch = async (data: any, product: any): Promise<any> => {
  data.productId = product.id;
  data.manufactureDate = new Date(data.manufactureDate);
  data.expiryDate = new Date(data.expiryDate);
  const res = await fetch(BASEURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  });
  const batch = await res.json();
  if (!res.ok) throw new Error(batch.message);
  return batch;
};

export const getBatches = async (filters?: SearchValues): Promise<any> => {
  const params = new URLSearchParams();
  if (filters) {
    let sb: string | undefined;
    if (filters.sortBy) sb = convertSortEnumToCamelCase(filters.sortBy);
    if (sb) params.set("sortBy", sb);
    if (filters.order) params.set("order", filters.order.toLowerCase());
    if (filters.q == undefined || filters.q.trim() == "")
      params.delete("q");
    if (filters.q && filters.q.trim() != "")
      params.set("q", filters.q);
  }
  const res = await fetch(`${BASEURL}?${params?.toString()}`);
  const batches = await res.json();
  if (!res.ok) throw new Error(batches.message);
  return batches;
};

export const findSingleBatch = async (id: string): Promise<any> => {
  const res = await fetch(`${BASEURL}/${id}`);
  const batch = await res.json();
  if (!res.ok) throw new Error(batch.message);
  return batch;
};

export const editBatch = async (data: any, id: string): Promise<any> => {
  const res = await fetch(`${BASEURL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers,
  });

  const batch = await res.json();
  if (!res.ok) throw new Error(batch.message);
  return batch;
};

export const deleteBatch = async (id: string): Promise<any> => {
  const res = await fetch(`${BASEURL}/${id}`, { method: "DELETE" });
  const batch = await res.json();
  if (!res.ok) throw new Error(batch.message);
  return batch;
};
