import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MovementWithRelation } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  movements: MovementWithRelation[];
};

export function MovementTable({ movements }: Props) {
  console.log(movements);
  return (
    <Card className="p-2">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Payment Type</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movements.length > 0 ? (
              movements.map((movement) => {
                return (
                  <TableRow key={movement.id}>
                    <TableCell>{movement.type}</TableCell>
                    <TableCell>{movement.paymentType}</TableCell>
                    <TableCell>{movement.customer?.name || "_"}</TableCell>
                    <TableCell>{movement.items.length}</TableCell>
                    <TableCell>
                      <Link href={`/movements/${movement.id}`}>
                        <Button>View</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-muted-foreground">
                  No Movements
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
