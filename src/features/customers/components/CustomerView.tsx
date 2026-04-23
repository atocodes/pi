"use client";

import { useState } from "react";
import { useCustomer } from "../hooks/customer.hook";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "@/components/Info";

import { CustomerCreaditsTable } from "@/features/customer_credits/components/CreaditsTable";
import { MovementItemsTable } from "@/features/movement";

import { ViewSkeleton } from "@/components/ViewSkeleton";
import { ErrorDialog } from "@/components/ErrorDialog";
import { CustomerModal } from "./CustomerForm";
import ConfirmDeleteDailog from "@/components/ConfirmDeleteDialog";

export function CustomerView({ customerId }: { customerId: string }) {
  const { customer, loading, error, refetch, removeCustomer, editCustomer } =
    useCustomer(customerId);
  const [openEditForm, setOpenEditForm] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteForm] = useState<boolean>(false);
  if (loading) return <ViewSkeleton />;

  if (!customer || error) {
    return (
      <ErrorDialog
        open
        title="Couldn't load customer"
        message={error || "Customer not found"}
        onRetry={refetch}
      />
    );
  }

  let dueCredits = 0;
  let outstandingCredits = 0;

  customer.credits?.forEach((c) => {
    if (c.dueDate && c.dueDate < new Date()) {
      dueCredits += c.amount;
    } else {
      outstandingCredits += c.amount;
    }
  });

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6">
      {/* HEADER */}
      <div className="flex justify-between">
        <h1 className="text-xl md:text-2xl font-bold">{customer.name}</h1>

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
          <CardTitle>Customer Details</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Info label="Name" value={customer.name || "—"} />
          <Info label="Contact" value={customer.contactName || "—"} />
          <Info label="Address" value={customer.address || "—"} />
          <Info label="Phone" value={customer.phone || "—"} />
          <Info label="TIN" value={customer.tinNumber || "—"} />

          <Info label="Past Due" value={dueCredits.toString()} />
          <Info label="Outstanding" value={outstandingCredits.toString()} />

          <Info
            label="Created"
            value={
              customer.createdAt
                ? new Date(customer.createdAt).toLocaleDateString()
                : "_"
            }
          />

          <Info
            label="Updated"
            value={
              customer.updatedAt
                ? new Date(customer.updatedAt).toLocaleDateString()
                : "_"
            }
          />
        </CardContent>
      </Card>

      {/* TABLES */}
      <CustomerCreaditsTable creadits={customer.credits} />
      <MovementItemsTable movements={customer.movements} />

      <CustomerModal
        onOpenChange={setOpenEditForm}
        open={openEditForm}
        initalData={customer}
        onUpdate={editCustomer}
      />

      <ConfirmDeleteDailog
        id={customer?.id!}
        name={customer?.name!}
        onDelete={removeCustomer}
        onOpenChange={setOpenDeleteForm}
        open={openDeleteDialog}
      />
    </div>
  );
}
