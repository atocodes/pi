"use client";

import { useState } from "react";
import { useBatch } from "../hooks/batch.hook";
import { useProduct } from "@/features/products/hooks/product.hook";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "@/components/Info";

import {
  MovementItemsTable,
  MovementMode,
  StockMovementForm,
} from "@/features/movement";

import { ViewSkeleton } from "@/components/ViewSkeleton";
import { ErrorDialog } from "@/components/ErrorDialog";
import ConfirmDeleteDailog from "@/components/ConfirmDeleteDialog";
import { BatchModal } from "./BatchForm";

export function BatchView({ batchId }: { batchId: string }) {
  const { batch, loading, error, refetch, removeBatch } = useBatch(batchId);
  const { product } = useProduct(batch?.productId!);

  const [movementMode, setMovementMode] = useState<MovementMode>("ISSUE");
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const openIssue = () => {
    setMovementMode("ISSUE");
    setOpen(true);
  };

  const openReceive = () => {
    setMovementMode("RECEIVE");
    setOpen(true);
  };

  if (loading) return <ViewSkeleton />;

  if (!batch || error) {
    return (
      <ErrorDialog
        open={true}
        title="Couldn't load batch"
        message={error || "Batch not found"}
        onRetry={refetch}
      />
    );
  }

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">{batch.batchNumber}</h1>

        <div className="flex gap-3">
          <Button onClick={openReceive}>Receive</Button>
          <Button onClick={openIssue}>Issue</Button>
          <Button onClick={() => setOpenEditForm(true)}>Edit</Button>
          <Button
            className="bg-red-600 text-primary"
            onClick={() => setOpenConfirmDialog(true)}
          >
            Delete
          </Button>
        </div>
      </div>

      {/* INFO */}
      <Card>
        <CardHeader>
          <CardTitle>Batch Details</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Info label="Batch Number" value={batch.batchNumber || "—"} />
          <Info label="Remaining Qty" value={batch.remainingQty ?? "—"} />
          <Info label="Product" value={product?.name || "_"} />

          <Info
            label="Manufactured"
            value={
              batch.manufactureDate
                ? new Date(batch.manufactureDate).toLocaleDateString()
                : "—"
            }
          />

          <Info
            label="Expiry"
            value={
              batch.expiryDate
                ? new Date(batch.expiryDate).toLocaleDateString()
                : "_"
            }
          />

          <Info
            label="Created"
            value={
              batch.createdAt
                ? new Date(batch.createdAt).toLocaleDateString()
                : "—"
            }
          />

          <Info
            label="Updated"
            value={
              batch.updatedAt
                ? new Date(batch.updatedAt).toLocaleDateString()
                : "—"
            }
          />
        </CardContent>
      </Card>

      {/* MOVEMENTS */}
      <MovementItemsTable movements={batch.movements} />

      {/* MODAL */}
      <StockMovementForm
        mode={movementMode}
        open={open}
        onOpenChange={setOpen}
      />

      <ConfirmDeleteDailog
        id={batch.id}
        name={batch.batchNumber!}
        onDelete={removeBatch}
        onOpenChange={setOpenConfirmDialog}
        open={openConfirmDialog}
      />

      <BatchModal
        open={openEditForm}
        onOpenChange={setOpenEditForm}
        initialData={batch}
        batchProduct={product}
      />
    </div>
  );
}
