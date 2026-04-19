"use client";

import ConfirmDeleteDailog from "@/components/ConfirmDeleteDialog";
import ErrorDialog from "@/components/ErrorDialog";
import { Button } from "@/components/ui/button";
import { useBatch, useBatches } from "@/features/batches";

import { ProductModal, ProductView } from "@/features/products";
import { useProduct } from "@/features/products/hooks/use-product";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const { error, loading, product, refetch, updateProduct, deleteProduct } =
    useProduct(id);
  const { setFilters } = useBatches();
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  if (loading) return <p>Loading</p>;

  if (error) return <ErrorDialog error={error} href="/products" />;
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(!openDeleteDialog);
  };

  return (
    <div className="w-full">
      <ProductView
        product={product!}
        onCreateBatch={() => {}}
        onDelete={handleOpenDeleteDialog}
        onEdit={handleOpen}
        filterBatch={setFilters}
      />

      <ProductModal
        open={open}
        onOpenChange={handleOpen}
        onUpdate={updateProduct}
        initialData={product}
      />

      <ConfirmDeleteDailog
        open={openDeleteDialog}
        onOpenChange={handleOpenDeleteDialog}
        id={product?.id!}
        name={product?.name!}
        onDelete={deleteProduct}
      />
    </div>
  );
}
