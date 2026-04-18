"use client";

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
  const { batches, createBatch, error, loading, refetch, setFilters } =
    useBatches();
  const { products } = useProducts();
  const [open, setOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<BatchWithRelation | null>(
    null,
  );

  // if (loading) return <p>Loading</p>;
  if (error) return <p>Error: {error}</p>;

  const handleAdd = () => {
    setSelectedBatch(null);
    setOpen(true);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleEdit = (batch: BatchWithRelation) => {
    setSelectedBatch(batch);
    setOpen(true);
  };

  return (
    <div className="w-full p-3.5">
      <BatchesTable
        batches={batches}
        onAddBatch={handleAdd}
        filterBatch={setFilters}
      />
      <BatchModal
        onOpenChange={handleOpen}
        open={open}
        onSubmit={createBatch}
        initalProducts={products}
      />
    </div>
  );
}
