"use client";
import { useEffect, useState } from "react";
import { Product, ProductWithRelation } from "../types";
import {
  createNewProduct,
  editProduct,
  getProducts,
  removeProduct,
} from "../services/products.service";
import { SearchProductValues } from "../schemas/product.schema";
import { convertSortEnumToCamelCase } from "@/lib/utils";

export function useProducts() {
  const [products, setProducts] = useState<ProductWithRelation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<SearchProductValues | undefined>();

  const fetchProducts = async (filterValues?: SearchProductValues) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterValues) {
        let sb: string | undefined;
        if (filterValues.sortBy) {
          sb = convertSortEnumToCamelCase(filterValues.sortBy);
          params.set("sortBy", sb);
        }
        if (filterValues.order) params.set("order", filterValues.order);
        if (filterValues.q) params.set("q", filterValues.q);
      }

      const res = await getProducts(params);
      const data = await res.json();

      setProducts(data);
    } catch (error: any) {
      setError(error.message || "Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchProducts(filters);
    }, 300);

    return () => clearTimeout(delay);
  }, [filters]);

  const createProduct = async (data: any) => {
    const res = await createNewProduct(data);

    const text = await res.text();

    let newProduct = null;

    try {
      newProduct = text ? JSON.parse(text) : null;
    } catch (error: any) {
      setError(error ?? "Error Creating Product");
    }

    if (!res.ok) {
      setError("Failed to create product");
      return;
    }

    setProducts((prev) => (newProduct ? [newProduct, ...prev] : prev));
  };

  const updateProduct = async (data: any, id: string | undefined) => {
    try {
      const res = await editProduct(data, id);

      const updated = await res.json();

      setProducts((prev) => prev.map((p) => (p.id == id ? updated : p)));
    } catch (error: any) {
      setError(error ?? "Error updating product");
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await removeProduct(id);

      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error: any) {
      setError(error ?? "Error Delteing product");
    }
  };

  return {
    products,
    loading,
    error,
    createProduct,
    updateProduct,
    deleteProduct,
    refetch: fetchProducts,
    setFilters,
  };
}
