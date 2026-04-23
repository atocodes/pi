import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product, ProductWithRelation } from "../types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchProductsForm } from "./SearchProductsForm";
import { Separator } from "@/components/ui/separator";
import { SearchProductValues } from "../schema/product.schema";
import { useState } from "react";

type Props = {
  products: ProductWithRelation[];
  onAddProducts?: () => void;
  onEdit?: (product: Product) => void;
  filterProduct?: (value: SearchProductValues) => void;
  onOpenIssue: (open: boolean) => void;
  onOpenReceive: (open: boolean) => void;
};

export function ProductTable({
  products,
  onAddProducts,
  onEdit,
  filterProduct,
  onOpenIssue,
  onOpenReceive,
}: Props) {
  return (
    <div className="space-y-4 py-3.5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Products</h2>
        <div className="flex gap-2">
          <Button onClick={() => onOpenReceive(true)}>Receive</Button>
          <Button onClick={() => onOpenIssue(true)}>Issue</Button>
          <Button onClick={onAddProducts}>Add Product</Button>
        </div>
      </div>
      <SearchProductsForm onSearch={filterProduct} />
      <Separator />
      <Table className="">
        {/* <TableCaption>A List of your products</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>SKU (item id)</TableHead>
            <TableHead>Total Stock</TableHead>
            <TableHead>Stock Out Threshold</TableHead>
            <TableHead>Batch Count</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length == 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center py-6 text-muted-foreground"
              >
                No Products Found
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.sku ?? "_"}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.lowStockAlert ?? "-"}</TableCell>
                <TableCell>{product.batches?.length ?? 0}</TableCell>
                <TableCell>
                  {product.createdAt
                    ? new Date(product.createdAt).toLocaleDateString()
                    : "-"}
                </TableCell>
                <TableCell className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Link href={`/products/${product.id}`}>View</Link>
                  </Button>
                  <Button size="sm" onClick={() => onEdit?.(product)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
