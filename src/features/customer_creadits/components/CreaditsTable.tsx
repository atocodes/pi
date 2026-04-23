import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { CustomerCredit } from "../types";

type Props = {
  creadits: CustomerCredit[];
  onAddMovement?: () => void;
  onEdit?: (movement: CustomerCredit) => void;
};

export function CustomerCreaditsTable({ creadits, onAddMovement, onEdit }: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>Credits</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reference Number</TableHead>
              <TableHead>Creadit Date</TableHead>
              <TableHead>Creadit Expiry</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Creadit Amount</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {creadits?.length ? (
              creadits.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>{c.reference}</TableCell>
                  <TableCell>
                    {c.createdAt
                      ? new Date(c.createdAt).toLocaleDateString()
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {c.dueDate
                      ? new Date(c.dueDate).toLocaleDateString()
                      : "-"}
                  </TableCell>
                  <TableCell>{"_"}</TableCell>
                  <TableCell>{"Items"}</TableCell>
                  <TableCell>{c.amount}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Link href={`/creadits/${c.id}`}>View</Link>
                    </Button>
                    <Button size="sm" onClick={() => onEdit?.(c)}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="py-6 text-muted-foreground">
                  No creadits yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
