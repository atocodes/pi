"use client";

import { useEffect, useState } from "react";
import { Customer, CustomerWithRelation } from "../types";
import {
  createCustomer,
  getCustomers,
  updateCustomer,
} from "../services/customers.service";
import { SearchCustomerValues } from "../schemas/searchCustomers.schema";

export function useCustomers() {
  const [customers, setCustomers] = useState<CustomerWithRelation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<SearchCustomerValues | undefined>();
  
  
  const fetchCustomers = async (filters?: SearchCustomerValues) => {
    try {
      setLoading(true);
      const res = await getCustomers(filters);
      const customers = await res.json();

      setCustomers(customers);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchCustomers(filters);
    }, 300);

    return ()=> clearTimeout(delay);
  }, [filters]);

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
    setFilters,
  };
}
