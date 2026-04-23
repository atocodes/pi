"use client";

import { useSupplier } from "../hooks/supplier.hook";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "@/components/Info";

import { ViewSkeleton } from "@/components/ViewSkeleton";
import { ErrorDialog } from "@/components/ErrorDialog";
import { SupplierModal } from "./CreateSupplier";
import ConfirmDeleteDailog from "@/components/ConfirmDeleteDialog";
import { useState } from "react";

export function SupplierView({
  supplierId,
}: {
  supplierId: string;
}) {
  const { supplier, loading, error, refetch, removeSupplier, updateSupplier } =
    useSupplier(supplierId);
  const [openEditForm, setOpenEditForm] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteForm] = useState<boolean>(false);

  if (loading) return <ViewSkeleton />;

  if (!supplier || error) {
    return (
      <ErrorDialog
        open
        title="Couldn't load supplier"
        message={error || "Supplier not found"}
        onRetry={refetch}
      />
    );
  }

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6">
      {/* HEADER */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">{supplier.name}</h1>
          <span className="text-sm text-muted-foreground">
            Supplier details
          </span>
        </div>

        <div className="flex gap-3">
          <Button onClick={() => setOpenEditForm(true)}>Edit</Button>
          <Button
            className="bg-red-600 text-primary"
            onClick={() => setOpenDeleteForm(true)}
          >
            Delete
          </Button>
        </div>
      </div>

      {/* INFO */}
      <Card>
        <CardHeader>
          <CardTitle>Supplier Info</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Info label="Name" value={supplier.name} />
          <Info label="Contact" value={supplier.contactName} />
          <Info label="Phone" value={supplier.phone} />
          <Info label="Address" value={supplier.address || "_"} />
          <Info label="TIN" value={supplier.tinNumber} />

          <Info
            label="Created"
            value={new Date(supplier.createdAt).toLocaleDateString()}
          />

          <Info
            label="Updated"
            value={new Date(supplier.updatedAt).toLocaleDateString()}
          />
        </CardContent>
      </Card>

      {/* MOVEMENTS (optional) */}
      {/* <MovementItemsTable movements={supplier.movements} /> */}

      <ConfirmDeleteDailog
        id={supplier.id!}
        name={supplier.name!}
        onDelete={removeSupplier}
        onOpenChange={setOpenDeleteForm}
        open={openDeleteDialog}
      />

      <SupplierModal
        onOpenChange={setOpenEditForm}
        open={openEditForm}
        initalData={supplier}
        onUpdate={updateSupplier}
      />
    </div>
  );
}
