"use client";

import ConfirmDeleteDailog from "@/components/ConfirmDeleteDialog";
import { CustomerModal, CustomerView, useCustomer } from "@/features/customers";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function CustomerPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <>
      <CustomerView customerId={id!} />
    </>
  );
}
