"use client";
import {
  Supplier,
  SupplierModal,
  SuppliersTable,
  useSuppliers,
} from "@/features/suppliers";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState<boolean>(false);
  const [supplier, setSupplier] = useState<Supplier | null>(null);
  const { loading, error, setFilters, createSupplier, suppliers } =
    useSuppliers();

  const handleEditSupplier = (s: Supplier) => {
    setSupplier(s);
  };
  console.log(error);
  console.log(suppliers);
  return (
    <div className="w-full p-3.5">
      <SuppliersTable
        suppliers={suppliers}
        onEdit={handleEditSupplier}
        onAddSupplier={() => setOpen(!open)}
        filterSuppliers={setFilters}
      />
      <SupplierModal
        open={open}
        onOpenChange={setOpen}
        initalData={supplier}
        onSubmit={createSupplier}
      />
    </div>
  );
}
