"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductWithRelation } from "../types";
import { Button } from "@/components/ui/button";
import { Info } from "@/components/Info";
import { MovementDetailTable } from "@/features/movement_history";
import { BatchesTable, BatchWithRelation } from "@/features/batches";

export function ProductView({
  product,
  onEdit,
  onDelete,
  onCreateBatch,
}: {
  product: ProductWithRelation;
  onEdit: () => void;
  onDelete: () => void;
  onCreateBatch: () => void;
}) {
  const isLowStock =
    product.lowStockAlert && product.stock <= product.lowStockAlert;
  return (
    <div className="flex flex-col gap-5 p-4 md:p-6">
      {/* HEADER */}
      <div className="flex flex-row justify-between md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-xl md:text-2xl font-bold">{product.name}</h1>

        <div className="flex gap-3 items-center">
          <Badge variant={isLowStock ? "destructive" : "secondary"}>
            {isLowStock ? "Low Stock" : "In Stock"}
          </Badge>
          <Button>Create Batch</Button>
          <Button onClick={onEdit}>Edit</Button>
          <Button className="bg-red-600 text-primary" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                <p>{product.stock == 0 ? "Out of stock" : ""}</p>
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
      </div>

      {/* BATCHES */}
      <BatchesTable
        batches={product.batches}
        display={false}
        product={product}
      />

      {/* MOVEMENTS */}
      <MovementDetailTable movements={product.movements} />
    </div>
  );
}
