"use client";

import { ErrorDialog } from "@/components/ErrorDialog";
import { TableSkeleton } from "@/components/TableSkeleton";
import { StockMovementForm } from "@/features/movement";
import {
  useProducts,
  ProductTable,
  Product,
  ProductModal,
} from "@/features/products";
import { useEffect, useState } from "react";

export default function InventoryPage() {
  const { products, loading, error, createProduct, updateProduct, setFilters } =
    useProducts();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openIssueDialog, setOpenIssueDialog] = useState<boolean>(false);
  const [openReceiveDialog, setReceiveIssueDialog] = useState<boolean>(false);

  const handleAdd = () => {
    setSelectedProduct(null);
    setOpen(true);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorDialog open={true} message={error} />;

  return (
    <div className="lg:md-5 lg:w-full ">
      <ProductTable
        products={products}
        onAddProducts={handleAdd}
        onEdit={handleEdit}
        filterProduct={setFilters}
        onOpenIssue={setOpenIssueDialog}
        onOpenReceive={setReceiveIssueDialog}
      />

      <ProductModal
        open={open}
        onOpenChange={handleOpen}
        initialData={selectedProduct}
        onSubmit={createProduct}
        onUpdate={updateProduct}
      />

      <StockMovementForm
        mode="ISSUE"
        open={openIssueDialog}
        onOpenChange={setOpenIssueDialog}
      />

      <StockMovementForm
        mode="RECEIVE"
        open={openReceiveDialog}
        onOpenChange={setReceiveIssueDialog}
      />
    </div>
  );
}
