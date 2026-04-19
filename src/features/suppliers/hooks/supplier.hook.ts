"use client";

import { useEffect, useState } from "react";
import { SupplierWithRelation } from "../types";
import { SupplierService } from "../services/suppliers.service";
import { useRouter } from "next/navigation";

export function useSupplier(id: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [supplier, setSupplier] = useState<SupplierWithRelation | undefined>();
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();

  const fetchSupplier = async () => {
    try {
      setLoading(true);
      const data = await SupplierService.findById(id);
      setSupplier(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchSupplier();
  }, [id]);

  const updateSupplier = async (supplierData: any) => {
    try {
      setLoading(true);
      const data = await SupplierService.update(supplierData, id);
      setSupplier(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const removeSupplier = async () => {
    try {
      setLoading(true);
      await SupplierService.remove(id);
      router.push("/suppliers");
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    supplier,
    removeSupplier,
    updateSupplier,
    refetch: fetchSupplier,
  };
}
