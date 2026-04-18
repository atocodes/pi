"use client";

import ConfirmDeleteDailog from "@/components/ConfirmDeleteDialog";
import { CustomerModal, CustomerView, useCustomer } from "@/features/cutomers";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function CustomerPage() {
  const params = useParams();
  const id = params.id as string;
  const { error, loading, customer, editCustomer, removeCustomer, refetch } =
    useCustomer(id);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openEditForm, setOpenEditForm] = useState<boolean>(false);

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(!openDeleteDialog);
  };

  const handleOpenEditForm = () => {
    setOpenEditForm(!openEditForm);
  };
  return (
    <>
      <CustomerView
        customer={customer!}
        onDelete={handleOpenDeleteDialog}
        onEdit={handleOpenEditForm}
      />

      <CustomerModal
        onOpenChange={handleOpenEditForm}
        open={openEditForm}
        initalData={customer}
        onUpdate={editCustomer}
      />

      <ConfirmDeleteDailog
        id={customer?.id!}
        name={customer?.name!}
        onDelete={removeCustomer}
        onOpenChange={handleOpenDeleteDialog}
        open={openDeleteDialog}
      />
    </>
  );
}
