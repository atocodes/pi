import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SupplierWithRelation } from "../types";
import { Info } from "@/components/Info";
import { Button } from "@/components/ui/button";
import { MovementItemsTable } from "@/features/movement";

export function SupplierDetails({
  supplier,
  onEdit,
  onDelete,
}: {
  supplier: SupplierWithRelation | undefined;
  onEdit: () => void;
  onDelete: () => void;
}) {
  if (!supplier) return <p>No Supplier</p>;
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-3xl">Supplier Details</h1>
          <span className="text-sm">
            Full details for {supplier?.name ?? "_"}
          </span>
        </div>
        <div className="">
          <Button onClick={onEdit}>Edit</Button>
          <Button className="bg-red-600 text-primary" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardHeader>Supplier</CardHeader>
          <CardContent>{supplier.name ?? "_"}</CardContent>
        </Card>
        <Card>
          <CardHeader>Contact</CardHeader>
          <CardContent>{supplier.contactName ?? "_"}</CardContent>
          <CardContent>{supplier.phone ?? "_"}</CardContent>
        </Card>
        <Card>
          <CardHeader>TIN</CardHeader>
          <CardContent>{supplier.tinNumber ?? "_"}</CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="grid  lg:grid-cols-3 grid-cols-2 gap-2">
          <Info label="Name" value={supplier.name} />
          <Info label="Contact Name" value={supplier.contactName} />
          <Info label="Address" value={supplier.address ?? "_"} />
          <Info
            label="Updated"
            value={new Date(supplier.updatedAt).toLocaleDateString()}
          />
          <Info label="TIN" value={supplier.tinNumber} />
          <Info label="Contact Phone" value={supplier.phone} />
          <Info
            label="Created"
            value={new Date(supplier.createdAt).toLocaleDateString()}
          />
        </CardContent>
      </Card>

      {/* <MovementItemsTable movements={supplier.movements} /> */}
    </div>
  );
}
