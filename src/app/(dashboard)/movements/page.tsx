"use client";
import { ErrorDialog } from "@/components/ErrorDialog";
import { TableSkeleton } from "@/components/TableSkeleton";
import { MovementTable } from "@/features/movement";
import { useMovements } from "@/features/movement/hooks/movements.hook";

export default function Page() {
  const { movements, createMovement, loading, error } = useMovements();
  console.log(movements);
  console.log("HIT PAGE");
  if (loading) return <TableSkeleton />;
  if (error) return <ErrorDialog open={true} message={error} />;
  return (
    <div className="w-full p-3">
      <MovementTable movements={movements} />
    </div>
  );
}
