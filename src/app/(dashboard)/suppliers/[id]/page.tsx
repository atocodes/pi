"use client";

import ConfirmDeleteDailog from "@/components/ConfirmDeleteDialog";
import {
  SupplierDetails,
  SupplierModal,
  useSupplier,
} from "@/features/suppliers";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const param = useParams();
  const id = param.id as string;
  console.log(id);
  const { supplier, loading, error, refetch, removeSupplier, updateSupplier } =
    useSupplier(id);
  const [openEditDialog, setEditDialog] = useState<boolean>(false);
  const [openDeleteDialog, setDeleteDialog] = useState<boolean>(false);
  return (
    <div className="w-full p-3">
      <SupplierDetails
        supplier={supplier}
        onDelete={() => setDeleteDialog(!openDeleteDialog)}
        onEdit={() => setEditDialog(!openEditDialog)}
      />
      <ConfirmDeleteDailog
        id={supplier?.id!}
        name={supplier?.name!}
        onDelete={removeSupplier}
        onOpenChange={() => setDeleteDialog(!openDeleteDialog)}
        open={openDeleteDialog}
      />

      <SupplierModal
        onOpenChange={() => {
          setEditDialog(!openEditDialog);
        }}
        open={openEditDialog}
        initalData={supplier}
        onUpdate={updateSupplier}
      />
    </div>
  );
}
