"use client";

import { useEffect, useState } from "react";
import { Supplier } from "../types";
import { SearchBatchParms } from "@/features/batches";
import { SupplierService } from "../services/suppliers.service";

export function useSuppliers() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const [filters, setFilters] = useState<SearchBatchParms | undefined>();

  const fetchSuppliers = async (params?: SearchBatchParms) => {
    try {
      setLoading(true);
      const suppliers = await SupplierService.get(params);
      setSuppliers(suppliers);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchSuppliers(filters);
    }, 300);

    return () => clearTimeout(delay);
  }, [filters]);

  const createSupplier = async (data: any) => {
    try {
      setLoading(true);
      const supplier = await SupplierService.create(data);
      setSuppliers((prev) => [supplier, ...prev]);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateSupplier = async (data: any, id?: string) => {
    try {
      setLoading(true);
      const supplier = await SupplierService.update(data, id!);
      setSuppliers((prev) =>
        prev.map((p) => {
          if (p.id == id) {
            return supplier;
          }
          return p;
        }),
      );
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    setFilters,
    suppliers,
    createSupplier,
    updateSupplier,
  };
}
