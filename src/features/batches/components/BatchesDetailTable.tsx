import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Batch } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  batches: Batch[] | any[];
  onEdit?: (customer: Batch) => void;
  onAddBatch?: () => void;
};

export function BatchesDetailTable({ batches, onAddBatch, onEdit }: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>Batches</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Batch Number</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Expiry</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="h-2 overflow-scroll">
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
              batches.map((batch) => {
                return (
                  <TableRow key={batch.id}>
                    <TableCell className="font-medium">
                      {batch.batchNumber}
                    </TableCell>
                    <TableCell>{batch.quantity ?? "_"}</TableCell>
                    <TableCell>
                      {batch.createdAt
                        ? new Date(batch.createdAt).toLocaleDateString()
                        : "_"}
                    </TableCell>
                    <TableCell>{"Status"}</TableCell>
                    <TableCell className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Link href={`/batches/${batch.id}`}>View</Link>
                      </Button>
                      <Button size="sm" onClick={() => onEdit?.(batch)}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
