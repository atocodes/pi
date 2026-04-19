import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { SearchSupplierParams, Supplier } from "../types";
import { SearchSuppliersForm } from "./SearchSuppliersForm";

type Props = {
  suppliers: Supplier[];
  onAddSupplier?: () => void;
  onEdit?: (supplier: Supplier) => void;
  display?: boolean;
  filterSuppliers?: (data: any) => void;
  product?: Supplier;
};

export function SuppliersTable({
  suppliers,
  onAddSupplier,
  onEdit,
  display = true,
  filterSuppliers,
  product,
}: Props) {
  //   const [p, setProduct] = useState<ProductWithRelation | null>();

  //   useEffect(() => {
  //     if (product) {
  //       setProduct(product);
  //     }
  //   }, [null]);

  return (
    <Card>
      <CardContent>
        <div className="space-y-4 py-3.5">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Suppliers</h2>
            {display && (
              <div className="flex gap-2">
                <Button onClick={onAddSupplier}>Create Supplier</Button>
              </div>
            )}
          </div>
          <SearchSuppliersForm onSearch={filterSuppliers} />
          <Separator />
          <Table className="">
            <TableCaption>A List of your Suppliers</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>TIN</TableHead>
                <TableHead>Contact Name</TableHead>
                <TableHead>Contact Phone</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suppliers.length == 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-6 text-muted-foreground"
                  >
                    No Suppliers Found
                  </TableCell>
                </TableRow>
              ) : (
                suppliers.map((data) => {
                  return (
                    <TableRow key={data.id}>
                      <TableCell>{data.name ?? "_"}</TableCell>
                      <TableCell className="font-medium">
                        {data.tinNumber ?? "_"}
                      </TableCell>
                      <TableCell>{data.contactName ?? "_"}</TableCell>
                      <TableCell>{data.phone ?? "_"}</TableCell>
                      <TableCell>
                        {data.createdAt
                          ? new Date(data.createdAt).toLocaleDateString()
                          : "_"}
                      </TableCell>

                      <TableCell className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Link href={`/suppliers/${data.id}`}>View</Link>
                        </Button>
                        <Button onClick={() => onEdit!(data)}>Edit</Button>
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
