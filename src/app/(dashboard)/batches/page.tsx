"use client";

import { ErrorDialog } from "@/components/ErrorDialog";
import { TableSkeleton } from "@/components/TableSkeleton";
import {
  BatchesTable,
  BatchModal,
  BatchWithRelation,
  useBatch,
  useBatches,
} from "@/features/batches";
import { useProducts } from "@/features/products";
import { useState } from "react";

export default function Page() {
  const { batches, createBatch, error, loading, setFilters } = useBatches();
  const { products } = useProducts();
  const [open, setOpen] = useState(false);

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorDialog open={true} message={error} />;

  return (
    <div className="w-full p-3.5">
      <BatchesTable
        batches={batches}
        onAddBatch={setOpen}
        filterBatch={setFilters}
      />
      <BatchModal
        onOpenChange={setOpen}
        open={open}
        onSubmit={createBatch}
        initalProducts={products}
      />
    </div>
  );
}
