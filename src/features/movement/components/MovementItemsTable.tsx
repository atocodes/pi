import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Movement,
  MovementItem,
  MovementItemWithRelation,
  MovementWithRelation,
} from "../types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  movements: any[];
  onAddMovement?: () => void;
  onEdit?: (movement: Movement) => void;
};

export function MovementItemsTable({
  movements,
  onAddMovement,
  onEdit,
}: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>Movement History</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Batch Number</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Unit Price</TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movements?.length ? (
              movements.map((m) => {
                return (
                  <TableRow key={m.id}>
                    <TableCell>{m.batch?.batchNumber}</TableCell>
                    <TableCell>{m.quantity}</TableCell>
                    <TableCell>{m.unitPrice}</TableCell>
                    <TableCell>
                      {m.createdAt
                        ? new Date(m.createdAt).toLocaleDateString()
                        : "-"}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="py-6 text-muted-foreground">
                  No movements yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
