import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Customer } from "../types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCustomers } from "../hooks/use-customers";

type Props = {
  customers: Customer[];
  onEdit?: (customer: Customer) => void;
  onAddCustomer?: () => void;
};

export function CustomersTable({ customers, onAddCustomer, onEdit }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Customers</h2>
        <div className="flex gap-2">
          <Button onClick={onAddCustomer}>Create Customer</Button>
        </div>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>TIN</TableHead>
            <TableHead>Contact Name</TableHead>
            <TableHead>Contact Phone</TableHead>
            <TableHead>Outstanding Creadit</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.length == 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center py-6 text-muted-foreground"
              >
                No Customers Found
              </TableCell>
            </TableRow>
          ) : (
            customers.map((customer) => {
              let outstandingCreadit = 0;
              if (customer.credits) {
                customer.credits.forEach(
                  (credit) => (outstandingCreadit += credit.amount),
                );
              }
              return (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.tinNumber ?? "_"}</TableCell>
                  <TableCell>{customer.contactName ?? "_"}</TableCell>
                  <TableCell>{customer.phone ?? "_"}</TableCell>
                  <TableCell>{`ETB ${outstandingCreadit}`}</TableCell>
                  <TableCell>
                    {customer.createdAt
                      ? new Date(customer.createdAt).toLocaleDateString()
                      : "_"}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Link href={`/customers/${customer.id}`}>View</Link>
                    </Button>
                    <Button size="sm" onClick={() => onEdit?.(customer)}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
