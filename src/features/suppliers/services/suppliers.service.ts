"use client";
import { SearchBatchParms } from "@/features/batches";
import { headers } from "@/lib/constants";
import { convertSortEnumToCamelCase } from "@/lib/utils";
import { SearchSupplierParams } from "../types";

const BASEURL = "/api/suppliers";

export class SupplierService {
  static async get(filters?: SearchSupplierParams) {
    const params = new URLSearchParams();
    if (filters) {
      let sb: string | undefined;
      if (filters?.sortBy)
        params.set("sortBy", convertSortEnumToCamelCase(filters.sortBy));
      if (filters?.order) params.set("order", filters.order.toLowerCase());
      if (filters?.q) params.set("q", filters.q);
    }
    const res = await fetch(`${BASEURL}?${params?.toString()}`);
    const supplier = await res.json();

    if (!res.ok) throw new Error(supplier.message);

    return supplier;
  }

  static async create(data: any) {
    const res = await fetch(BASEURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    });

    const supplier = await res.json();

    if (!res.ok) throw new Error(supplier.message);

    return supplier;
  }

  static async update(data: any, id: string) {
    const res = await fetch(`${BASEURL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers,
    });

    const supplier = await res.json();

    if (!res.ok) throw new Error(supplier.message);

    return supplier;
  }

  static async findById(id: string) {
    const res = await fetch(`${BASEURL}/${id}`);
    const supplier = await res.json();

    if (!res.ok) throw new Error(supplier.message);

    return supplier;
  }

  static async remove(id: string) {
    const res = await fetch(`${BASEURL}/${id}`, {
      method: "DELETE",
    });

    const supplier = await res.json();

    if (!res.ok) throw new Error(supplier.message);

    return supplier;
  }
}
