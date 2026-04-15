"use client";

import { useEffect, useState } from "react";
import { Customer } from "../types";
import {
  createCustomer,
  getCustomers,
  updateCustomer,
} from "../services/customers.service";

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await getCustomers();
      const customers = await res.json();

      setCustomers(customers);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const addCustomer = async (data: any) => {
    try {
      setLoading(true);
      const req = await createCustomer(data);
      const newCustomer = await req.json();
      setCustomers((prev) => (newCustomer ? [newCustomer, ...prev] : prev));
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const editCustomer = async (data: any, id?: string) => {
    try {
      setLoading(true);
      const req = await updateCustomer(id ?? data.id, data);
      const updated = await req.json();
      setCustomers((prev) => prev.map((c) => (c.id == id ? updated : c)));
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    customers,
    refetch: fetchCustomers,
    editCustomer,
    addCustomer,
  };
}
