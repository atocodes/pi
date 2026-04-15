"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { ProductModal, ProductView } from "@/features/products";
import ConfirmDeleteProduct from "@/features/products/components/ConfirmDeleteProduct";
import { useProduct } from "@/features/products/hooks/use-product";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const { error, loading, product, refetch, updateProduct, deleteProduct } =
    useProduct(id);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  if (loading) return <p>Loading</p>;
  if (error)
    return (
      <div className="flex w-full h-full justify-center items-center">
        <Dialog open={true}>
          <DialogContent>
            <DialogHeader>Error</DialogHeader>
            <DialogDescription>{error}</DialogDescription>
            <DialogFooter>
              <Button>
                <Link href={"/products"}>Go Back</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(!openDeleteDialog);
  };

  return (
    <>
      <ProductView
        product={product!}
        onCreateBatch={() => {}}
        onDelete={handleOpenDeleteDialog}
        onEdit={handleOpen}
      />

      <ProductModal
        open={open}
        onOpenChange={handleOpen}
        onUpdate={updateProduct}
        initialData={product}
      />

      <ConfirmDeleteProduct
        open={openDeleteDialog}
        onOpenChange={handleOpenDeleteDialog}
        product={product!}
        onDelete={deleteProduct}
      />
    </>
  );
}
