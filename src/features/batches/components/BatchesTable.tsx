import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Batch, BatchWithRelation, SearchBatchParms } from "../types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBatchStatus } from "../utils";
import { SearchBatchesForm } from "./SearchBatchesForm";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SearchValues } from "../schemas/schemas";
import { ProductWithRelation } from "@/features/products";
import { useEffect, useState } from "react";

type Props = {
  batches: any[];
  onAddBatch?: () => void;
  onEdit?: (product: Batch) => void;
  display?: boolean;
  filterBatch?: (data: SearchValues) => void;
  product?: ProductWithRelation;
};

export function BatchesTable({
  batches,
  onAddBatch,
  onEdit,
  display = true,
  filterBatch,
  product,
}: Props) {
  const [p, setProduct] = useState<ProductWithRelation | null>();

  useEffect(() => {
    if (product) {
      setProduct(product);
    }
  }, [null]);

  return (
    <Card>
      <CardContent>
        <div className="space-y-4 py-3.5">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Batches</h2>
            {display && (
              <div className="flex gap-2">
                <Button onClick={onAddBatch}>Create Batch</Button>
              </div>
            )}
          </div>
          <SearchBatchesForm onSearch={filterBatch} />
          <Separator />
          <Table className="">
            <TableCaption>A List of your Batches</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Batch Number</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.length == 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-6 text-muted-foreground"
                  >
                    No Batches Found
                  </TableCell>
                </TableRow>
              ) : (
                batches.map((data) => {
                  return (
                    <TableRow key={data.id}>
                      <TableCell>{data.batchNumber ?? "_"}</TableCell>
                      <TableCell className="font-medium">
                        {product
                          ? product.name
                          : data.product
                            ? data.product.name
                            : "_"}
                      </TableCell>
                      <TableCell>{data.quantity ?? "_"}</TableCell>
                      <TableCell>
                        {data.expiryDate
                          ? new Date(data.expiryDate).toLocaleDateString()
                          : "_"}
                      </TableCell>
                      <TableCell>
                        {getBatchStatus(data.manufactureDate, data.expiryDate)}
                      </TableCell>

                      <TableCell className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Link href={`/batches/${data.id}`}>View</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
