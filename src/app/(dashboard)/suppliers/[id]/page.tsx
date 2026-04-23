"use client";

import { SupplierView } from "@/features/suppliers";
import { useParams } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const param = useParams();
  const id = param.id as string;
  return (
    <div className="w-full p-3">
      <SupplierView supplierId={id} />
    </div>
  );
}
