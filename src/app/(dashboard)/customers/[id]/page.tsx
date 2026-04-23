"use client";

import { CustomerView } from "@/features/customers";
import { useParams } from "next/navigation";

export default function CustomerPage() {
  const params = useParams();
  const id = params.id as string;

  return <CustomerView customerId={id!} />;
}
