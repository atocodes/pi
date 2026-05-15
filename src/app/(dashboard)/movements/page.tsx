"use client";

import { ErrorDialog } from "@/components/ErrorDialog";
import { TableSkeleton } from "@/components/TableSkeleton";
import { MovementTable } from "@/features/movement";
import { useMovements } from "@/features/movement/hooks/movements.hook";

export default function Page() {
  const { movements, loading, error } = useMovements();

  if (loading) {
    return (
      <div className="w-full p-6">
        <TableSkeleton />
      </div>
    );
  }

  if (error) {
    return <ErrorDialog open={true} message={error} />;
  }

  return (
    <div className="w-full space-y-6 p-6">
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Movement History
        </h1>
        <p className="text-muted-foreground">
          Track all inventory movements, transfers, and stock updates in one place.
        </p>
      </div>

      {/* Table */}
      <MovementTable movements={movements} />
    </div>
  );
}