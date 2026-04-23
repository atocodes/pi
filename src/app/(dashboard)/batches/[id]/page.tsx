"use client";
import { BatchView } from "@/features/batches/components/BatchView";
import { useParams } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const param = useParams();

  return (
    <div className="w-full gap-2">
      <BatchView batchId={param.id as string} />
    </div>
  );
}
