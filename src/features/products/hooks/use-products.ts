"use client";
import { useEffect, useState } from "react";
import { Product, ProductWithRelation } from "../types";
import {
  createNewProduct,
  editProduct,
  getProducts,
  removeProduct,
} from "../services/products.service";

export function useProducts() {
  const [products, setProducts] = useState<ProductWithRelation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      const data = await res.json();

      setProducts(data);
    } catch (error: any) {
      setError(error.message || "Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
  };
}
