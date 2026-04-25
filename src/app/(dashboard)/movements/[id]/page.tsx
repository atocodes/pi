"use client";

import ConfirmDeleteDailog from "@/components/ConfirmDeleteDialog";
import { ErrorDialog } from "@/components/ErrorDialog";
import { Info } from "@/components/Info";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ViewSkeleton } from "@/components/ViewSkeleton";
import { MovementItemsTable } from "@/features/movement";
import { useMovement } from "@/features/movement/hooks/movement.hook";
import { useParams } from "next/navigation";
import { useState } from "react";

type Props = {
  id: string;
};

export default function Page({ props }: { props: Props }) {
  const parm = useParams();
  const { movement, deleteMovement, loading, error, refetch } = useMovement(
    parm.id as string,
  );
  const [openErrorDialog, setErrorDialog] = useState<boolean>(false);

  if (loading) return <ViewSkeleton />;
  if (error)
    return (
      <ErrorDialog open={true} message={error.toString()} onOpenChange={setErrorDialog} onClose={refetch} />
    );

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-2xl font-bold">
          {movement?.issueNumber}
        </h1>
      </div>
      <div className="flex gap-3 items-center">
        <Button
          className="bg-red-600 text-primary"
          onClick={() => setErrorDialog(true)}
        >
          Delete
        </Button>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 md:gird-cols-2 sm:grid-cols-1">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Movement Details</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-5">
            <Info label="Issue Number" value={movement?.issueNumber} />
            <Info label="Type" value={movement?.type} />
            <Info label="Payment Type" value={movement?.paymentType} />
            <Info label="Items Issued" value={movement?.items.length} />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Customer Detail</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-5">
            <Info label="Name" value={movement?.customer?.name || "—"} />
            <Info
              label="Contact Name"
              value={movement?.customer?.contactName || "—"}
            />
            <Info label="Address" value={movement?.customer?.address || "—"} />
            <Info label="TIN" value={movement?.customer?.tinNumber || "__"} />
            <Info
              label="Contact Phone"
              value={movement?.customer?.phone || "__"}
            />
          </CardContent>
        </Card>
      </div>
      <MovementItemsTable movements={movement?.items || []} />

      <ConfirmDeleteDailog
        open={openErrorDialog}
        onOpenChange={setErrorDialog}
        onDelete={deleteMovement}
        id={movement?.id!}
        name={movement?.issueNumber!}
      />
    </div>
  );
}
