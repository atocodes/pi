"use client";

import { ErrorDialog } from "@/components/ErrorDialog";
import { TableSkeleton } from "@/components/TableSkeleton";
import {
  CustomerModal,
  CustomersTable,
  useCustomers,
} from "@/features/customers";
import { Customer } from "@/features/customers/types";
import { useState } from "react";

export default function CustomersPage() {
  const {
    addCustomer,
    editCustomer,
    customers,
    loading,
    error,
    refetch,
    setFilters,
  } = useCustomers();
  const [open, setOpen] = useState<boolean>(false);
  const [customer, setCustomer] = useState<Customer | null>(null);

  const handleEdit = (customer: Customer) => {
    setCustomer(customer);
    setOpen(true);
  };

  if (loading) return <TableSkeleton />;
  if (error)
    return <ErrorDialog open={true} message={error} onRetry={refetch} />;

  return (
    <div className="lg:md-5 lg:w-full">
      <CustomersTable
        customers={customers}
        onAddCustomer={() => setOpen(true)}
        onEdit={handleEdit}
        searchCustomer={setFilters}
      />

      <CustomerModal
        open={open}
        initalData={customer}
        onOpenChange={setOpen}
        onSubmit={addCustomer}
        onUpdate={editCustomer}
      />
    </div>
  );
}
