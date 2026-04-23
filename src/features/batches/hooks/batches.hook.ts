"use client";

import { useEffect, useState } from "react";
import { Batch, BatchWithRelation, SearchBatchParms } from "../types";
import { getBatches, newBatch } from "../services/batches.service";
import { BATCHSTATUS, getBatchStatus } from "../utils";
import { SearchValues } from "../schema/schemas";
import { SortBy } from "@/lib/constants";
import { convertSortEnumToCamelCase } from "@/lib/utils";

export function useBatches() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [batches, setBatches] = useState<BatchWithRelation[]>([]);
  const [filters, setFilters] = useState<SearchValues | undefined>();

  const fetchBatches = async (filters?: SearchValues) => {
    try {
      setLoading(true);
      const batches = await getBatches(filters);
      setBatches(batches);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBatches(filters);
  }, [filters]);

  const createBatch = async (data: any, product: any) => {
    try {
      setLoading(true);
      const batch = await newBatch(data, product);
      setBatches((prev) => (batch ? [batch, ...prev] : prev));
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    batches,
    refetch: fetchBatches,
    createBatch,
    setFilters,
  };
}
