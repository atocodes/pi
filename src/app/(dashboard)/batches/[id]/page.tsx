"use client";
import ConfirmDeleteDailog from "@/components/ConfirmDeleteDialog";
import { BatchModal, BatchWithRelation, useBatch } from "@/features/batches";
import { BatchView } from "@/features/batches/components/BatchView";
import { ProductWithRelation, useProducts } from "@/features/products";
import { useProduct } from "@/features/products/hooks/use-product";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const param = useParams();
  const { batch, updateBatch, error, loading, refetch, removeBatch } = useBatch(
    param.id as string,
  );
  const { products } = useProducts();

  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openEditForm, setOpenEditForm] = useState<boolean>(false);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(!openDeleteDialog);
  };

  const handleOpenEditForm = () => {
    setOpenEditForm(!openEditForm);
  };

  return (
    <div className="w-full gap-2">
      <BatchView
        batch={batch as BatchWithRelation}
        onDelete={handleOpenDeleteDialog}
        onEdit={handleOpenEditForm}
      />

      <BatchModal
        open={openEditForm}
        initialData={batch}
        onOpenChange={handleOpenEditForm}
        onUpdate={updateBatch}
        initalProducts={products}
        batchProduct={batch?.product as ProductWithRelation}
      />

      <ConfirmDeleteDailog
        name={batch?.batchNumber!}
        id={batch?.id!}
        onDelete={removeBatch}
        onOpenChange={handleOpenDeleteDialog}
        open={openDeleteDialog}
      />
    </div>
  );
}
