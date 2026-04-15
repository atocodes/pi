"use client";

import { useEffect, useState } from "react";
import { Product, ProductWithRelation } from "../types";
import { useRouter } from "next/navigation";
import { editProduct, removeProduct } from "../services/products.service";
export function useProduct(id: string) {
  const [product, setProduct] = useState<ProductWithRelation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

      if (res.ok) {
        setProduct(data);
      } else {
        setError(data.message);
      }
    } catch (error: any) {
      setError(error.message || "Error fetching product");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  const updateProduct = async (data: any) => {
    try {
      setLoading(true);
      const res = await editProduct(data, id);

      const updated = await res.json();
      if (res.ok) {
        setProduct(updated);
      } else {
        setError(updated.message);
      }
    } catch (error: any) {
      setError(error.message || "Error Updating Product ");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const res = await removeProduct(id);
      const data = await res.json();
      if (res.ok) {
        router.push("/products");
      } else {
        setError(data.message);
      }
    } catch (error: any) {
      setError(error ?? "Error Delteing product");
    }
  };

  return {
    product,
    loading,
    error,
    updateProduct,
    deleteProduct,
    refetch: fetchProduct,
  };
}
