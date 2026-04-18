"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BatchWithRelation } from "../types";
import { Button } from "@/components/ui/button";
import { Info } from "@/components/Info";
import {
  MovementDetailTable,
  MovementHistory,
} from "@/features/movement_history";
import { useEffect, useState } from "react";
import { ProductWithRelation } from "@/features/products";
import { useBatch } from "../hooks/use-batch";
import { useProduct } from "@/features/products/hooks/use-product";

export function BatchView({
  batch,
  onEdit,
  onDelete,
}: {
  batch: BatchWithRelation;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const { product, loading, error, refetch } = useProduct(batch?.productId!);

  return (
    <div className="grid p-4 md:p-6 gap-5">
      {/* HEADER */}
      <div className="flex flex-row justify-between ">
        <h1 className="text-xl md:text-2xl font-bold">
          {batch?.batchNumber ?? "_"}
        </h1>

        <div className="flex gap-3 items-center">
          <Button>Receive</Button>
          <Button>Issue</Button>
          <Button onClick={onEdit}>Edit</Button>
          <Button className="bg-red-600 text-primary" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="grid gap-5">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Batch Details</CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Info label="Batch Number" value={batch?.batchNumber || "—"} />
            <Info
              label="Quantity Remaining"
              value={batch?.remainingQty && "—"}
            />
            <Info
              label="Manufactured Date"
              value={
                batch?.manufactureDate
                  ? new Date(batch?.manufactureDate).toLocaleDateString()
                  : "—"
              }
            />
            <Info
              label="Updated"
              value={
                batch?.updatedAt
                  ? new Date(batch?.updatedAt).toLocaleDateString()
                  : "—"
              }
            />

            <Info label="Product" value={product ? product?.name : "_"} />
            <Info
              label="Expiry Date:"
              value={
                batch?.expiryDate
                  ? new Date(batch?.expiryDate).toLocaleDateString()
                  : "_"
              }
            />
            <Info
              label="Created:"
              value={
                batch?.createdAt
                  ? new Date(batch?.createdAt).toLocaleDateString()
                  : "—"
              }
            />
          </CardContent>
        </Card>
        <MovementDetailTable movements={batch?.movements!} />
      </div>
    </div>
  );
}
