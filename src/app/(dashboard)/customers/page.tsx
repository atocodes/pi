"use client";

import {
  CustomerModal,
  CustomersTable,
  useCustomers,
} from "@/features/cutomers";
import { Customer } from "@/features/cutomers/types";
import { useState } from "react";

export default function CustomersPage() {
  const { addCustomer, editCustomer, customers, loading, error, refetch } =
    useCustomers();
  const [open, setOpen] = useState<boolean>(false);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const onOpenChange = () => {
    setOpen(!open);
  };

  const handleEdit = (customer: Customer) => {
    setCustomer(customer);
    setOpen(true);
  };
  return (
    <div className="w-full p-3.5">
      <CustomersTable
        customers={customers}
        onAddCustomer={() => setOpen(true)}
        onEdit={handleEdit}
      />
      <CustomerModal
        open={open}
        initalData={customer}
        onOpenChange={onOpenChange}
        onSubmit={addCustomer}
        onUpdate={editCustomer}
      />
    </div>
  );
}
