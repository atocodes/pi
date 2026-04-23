"use client";

import { useEffect, useState } from "react";
import { Customer, CustomerWithRelation } from "../types";
import {
  deleteCustomer,
  getSingleCustomer,
  updateCustomer,
} from "../services/customers.service";
import { useRouter } from "next/navigation";

export function useCustomer(id: string) {
  const [customer, setCustomer] = useState<CustomerWithRelation | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const getCustomer = async () => {
    try {
      setLoading(true);
      const res = await getSingleCustomer(id);
      const customer = await res.json();

      if (res.ok) {
        setCustomer(customer);
      } else {
        setError(customer.message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);

  const editCustomer = async (data: any) => {
    try {
      setLoading(true);
      const req = await updateCustomer(id, data);
      const updated = await req.json();
      setCustomer(updated);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const removeCustomer = async () => {
    try {
      setLoading(true);
      const res = await deleteCustomer(id);
      const customer = await res.json();
      router.push("/customers");
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    customer,
    loading,
    error,
    refetch: getCustomer,
    removeCustomer,
    editCustomer,
  };
}
