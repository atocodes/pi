"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "@/components/Info";
import { useState } from "react";

import { BatchesTable, BatchModal, useBatches } from "@/features/batches";
import { MovementItemsTable } from "@/features/movement";

import { useProduct } from "../hooks/product.hook";
import { ViewSkeleton } from "@/components/ViewSkeleton";
import ConfirmDeleteDailog from "@/components/ConfirmDeleteDialog";
import { ProductModal } from "./ProductForm";
import { ErrorDialog } from "@/components/ErrorDialog";

/* ---------------------------------- */
/* 🔹 Main Component */
/* ---------------------------------- */

export function ProductView({ productId }: { productId: string }) {
  /* UI STATE */
  const [openBatch, setOpenBatch] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  /* DATA */
  const { product, refetch, loading, updateProduct, deleteProduct, error } =
    useProduct(productId);

  const { createBatch, setFilters } = useBatches();

  /* LOADING */
  if (loading) return <ViewSkeleton />;

  /* ERROR */
  if (!product || error) {
    return (
      <ErrorDialog
        open={true}
        title="Couldn't load product"
        message={error || "Product not found"}
        onRetry={refetch}
      />
    );
  }

  /* DERIVED STATE */
  const isLowStock =
    !!product.lowStockAlert && product.stock <= product.lowStockAlert;

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6">
      {/* HEADER */}
      <ProductHeader
        name={product.name}
        isLowStock={isLowStock}
        onCreateBatch={() => setOpenBatch(true)}
        onEdit={() => setOpenEdit(true)}
        onDelete={() => setOpenDelete(true)}
      />

      {/* INFO + STATS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ProductInfo product={product} />
        <ProductStats product={product} />
      </div>

      {/* TABLES */}
      <BatchesTable
        batches={product.batches}
        display={false}
        product={product}
        filterBatch={setFilters}
      />

      <MovementItemsTable movements={product.movements} />

      {/* MODALS */}
      <BatchModal
        open={openBatch}
        onOpenChange={setOpenBatch}
        onSubmit={createBatch}
        batchProduct={product}
      />

      <ProductModal
        open={openEdit}
        onOpenChange={setOpenEdit}
        onUpdate={updateProduct}
        initialData={product}
      />

      <ConfirmDeleteDailog
        open={openDelete}
        onOpenChange={setOpenDelete}
        id={product.id}
        name={product.name}
        onDelete={deleteProduct}
      />
    </div>
  );
}

/* ---------------------------------- */
/* 🔹 Header */
/* ---------------------------------- */

function ProductHeader({
  name,
  isLowStock,
  onCreateBatch,
  onEdit,
  onDelete,
}: {
  name: string;
  isLowStock: boolean;
  onCreateBatch: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <h1 className="text-xl md:text-2xl font-bold">{name}</h1>

      <div className="flex gap-3 items-center">
        <Badge variant={isLowStock ? "destructive" : "secondary"}>
          {isLowStock ? "Low Stock" : "In Stock"}
        </Badge>

        <Button onClick={onCreateBatch}>Create Batch</Button>
        <Button onClick={onEdit}>Edit</Button>

        <Button className="bg-red-600 text-primary" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* 🔹 Product Info */
/* ---------------------------------- */

function ProductInfo({ product }: { product: any }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Info label="SKU" value={product.sku || "—"} />
        <Info label="Barcode" value={product.barcode || "—"} />
        <Info label="Category" value={product.category || "—"} />
        <Info label="Unit" value={product.unit || "—"} />

        <Info label="Price" value={`$${product.sellingPrice}`} />
        <Info label="Stock" value={product.stock} />
        <Info label="Low Alert" value={product.lowStockAlert || "—"} />
      </CardContent>
    </Card>
  );
}

/* ---------------------------------- */
/* 🔹 Product Stats */
/* ---------------------------------- */

function ProductStats({ product }: { product: any }) {
  return (
    <div className="grid grid-rows-2 gap-5">
      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          {product.description ?? "No description provided"}
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-5 text-center">
        <Card>
          <CardHeader>
            <CardTitle>Total Quantity</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{product.stock}</p>
          </CardContent>
          <CardFooter>
            <p>{product.stock === 0 ? "Out of stock" : ""}</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Batch Count</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{product.batches.length}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
