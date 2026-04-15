import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MovementHistory } from "../types";
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
  movements: MovementHistory[];
  onAddMovement?: () => void;
  onEdit?: (movement: MovementHistory) => void;
};

export function MovementDetailTable({ movements, onAddMovement, onEdit }: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>Movement History</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Reference</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movements?.length ? (
              movements.map((m) => (
                <TableRow key={m.id}>
                  <TableCell>{m.type}</TableCell>
                  <TableCell>{m.reference}</TableCell>
                  <TableCell>{"_"}</TableCell>
                  <TableCell>{m.quantity}</TableCell>
                  <TableCell>
                    {m.createdAt
                      ? new Date(m.createdAt).toLocaleDateString()
                      : "-"}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Link href={`/movements/${m.id}`}>View</Link>
                    </Button>
                    <Button size="sm" onClick={() => onEdit?.(m)}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))
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
