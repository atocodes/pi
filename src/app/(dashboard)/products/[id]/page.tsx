"use client";

import { ProductView } from "@/features/products";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  return (
    <div className="w-full">
      <ProductView productId={id} />
    </div>
  );
}
