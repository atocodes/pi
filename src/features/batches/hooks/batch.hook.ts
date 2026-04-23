"use client";

import { useEffect, useState } from "react";
import { BatchWithRelation } from "../types";
import {
  deleteBatch,
  editBatch,
  findSingleBatch,
} from "../services/batches.service";
import { useRouter } from "next/navigation";

export function useBatch(id: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [batch, setBatch] = useState<BatchWithRelation | null>(null);
  const router = useRouter();

  const fetchBatch = async () => {
    try {
      setLoading(true);
      const batch = await findSingleBatch(id);
      setBatch(batch);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBatch();
  }, []);

  const updateBatch = async (data: any, productId: string) => {
    try {
      setLoading(true);
      const { product, ...updatedData } = data;
      updatedData.productId = productId;
      const updatedBatch = await editBatch(updatedData, id);
      setBatch(updatedBatch);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const removeBatch = async () => {
    try {
      setLoading(true);
      const batch = await deleteBatch(id);
      router.push("/batches");
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    batch,
    refetch: fetchBatch,
    updateBatch,
    removeBatch,
    loading,
    error,
  };
}
