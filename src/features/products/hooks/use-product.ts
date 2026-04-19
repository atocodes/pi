"use client";

import { useEffect, useState } from "react";
import { Product, ProductWithRelation } from "../types";
import { useRouter } from "next/navigation";
import {
  editProduct,
  findSingleProduct,
  removeProduct,
} from "../services/products.service";
export function useProduct(id: string) {
  const [product, setProduct] = useState<ProductWithRelation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await findSingleProduct(id);

      setProduct(data);
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
      const updated = await editProduct(data, id);
      setProduct(updated);
    } catch (error: any) {
      setError(error.message || "Error Updating Product ");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const res = await removeProduct(id);
      router.push("/products");
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
