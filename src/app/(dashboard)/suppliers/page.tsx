"use client";
import { ErrorDialog } from "@/components/ErrorDialog";
import { TableSkeleton } from "@/components/TableSkeleton";
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
  const {
    loading,
    error,
    setFilters,
    createSupplier,
    suppliers,
    updateSupplier,
  } = useSuppliers();

  const handleEditSupplier = (s: Supplier) => {
    setSupplier(s);
    setOpen(true);
  };

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorDialog open={true} message={error} />;

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
        onUpdate={updateSupplier}
      />
    </div>
  );
}
