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
import { MovementType } from "@/features/movement_history/types";
import { Button } from "@/components/ui/button";

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
    <div className="p-4 md:p-6 space-y-6 w-full">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
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
      <div className="grid grid-cols-2 gap-5">
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
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle>Batches</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {product.batches?.length ? (
            <div className="grid gap-3">
              {product.batches.map((batch) => {
                const isExpired = new Date(batch.expiryDate) < new Date();

                return (
                  <div
                    key={batch.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border rounded-xl p-3"
                  >
                    {/* LEFT */}
                    <div className="space-y-1">
                      <p className="font-medium">
                        Batch: {batch.batchNumber || "—"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Exp: {new Date(batch.expiryDate).toLocaleDateString()}
                      </p>

                      <div className="flex gap-2">
                        {isExpired && (
                          <Badge variant="destructive">Expired</Badge>
                        )}
                        <Badge variant="outline">
                          Remaining: {batch.remainingQty}
                        </Badge>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="text-sm text-right space-y-1">
                      <p>Cost: ${batch.costPrice}</p>
                      <p>Selling: ${batch.sellingPrice}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-muted-foreground">No batches available</p>
          )}
        </CardContent>
      </Card>

      {/* MOVEMENTS */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle>Movement History</CardTitle>
        </CardHeader>

        <CardContent>
          {product.movements?.length ? (
            <div className="space-y-3">
              {product.movements.map((m) => (
                <div
                  key={m.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-2 gap-1"
                >
                  <div className="flex gap-2 items-center">
                    <Badge
                      variant={getMovementBadgeVariant(m.type as MovementType)}
                    >
                      {m.type}
                    </Badge>

                    <span className="text-sm">Qty: {m.quantity}</span>
                  </div>

                  <span className="text-xs text-muted-foreground">
                    {new Date(m.createdAt).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No movements yet</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ---------------- reusable info block ---------------- */
function Info({ label, value }: { label: string; value: any }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

const getMovementBadgeVariant = (type: MovementType) => {
  switch (type) {
    case MovementType.PURCHASE:
      return "default"; // green-ish
    case MovementType.SALE:
      return "destructive"; // red-ish (stock out)
    case MovementType.RETURN:
      return "secondary";
    case MovementType.ADJUSTMENT:
      return "outline";
    case MovementType.EXPIRED:
      return "destructive";
    default:
      return "secondary";
  }
};
