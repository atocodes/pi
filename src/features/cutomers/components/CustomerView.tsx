"use client";
import { useState } from "react";
import { Customer } from "../types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Info } from "@/components/Info";
import { MovementDetailTable } from "@/features/movement_history";
import { CustomerCreaditsTable } from "@/features/customer_creadits/components/CreaditsTable";

type Props = {
  customer: Customer | null;
  onEdit: () => void;
  onDelete: () => void;
};

export function CustomerView({ customer, onEdit, onDelete }: Props) {
  let dueCredites = 0;
  let outstandingCreadit = 0;
  if (customer && customer.credits)
    customer.credits.forEach((c) => {
      if (c.dueDate && c.dueDate < new Date()) {
        dueCredites += c.amount;
      } else {
        outstandingCreadit += c.amount;
      }
    });
  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-2xl font-bold">
          {customer?.name ?? ""}
        </h1>

        <div className="flex gap-3 items-center">
          <Button onClick={onEdit}>Edit</Button>
          <Button className="bg-red-600 text-primary" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>

      <div className="grid ">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Customer Details</CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 justify-between sm:grid-cols-2 gap-2">
            <div className="grid gap-2">
              <Info label="Name" value={customer?.name || "—"} />
              <Info label="Contact Name" value={customer?.contactName || "—"} />
              <Info label="Address" value={customer?.address || "—"} />
              <Info
                label="Past Due Credits"
                value={
                  customer?.credits.length == 0
                    ? "0"
                    : dueCredites.toString() || "0"
                }
              />

              <Info
                label="Updated"
                value={
                  customer?.updatedAt.toLocaleDateString ??  "__"
                }
              />
            </div>
            <div className="grid gap-5">
              <Info label="TIN" value={customer?.tinNumber || "__"} />
              <Info label="Contact Phone" value={customer?.phone || "__"} />
              <Info
                label="Outstanding Credits"
                value={outstandingCreadit.toString()}
              />
              <Info
                label="Created"
                value={customer?.createdAt.toLocaleDateString ?? "_"}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Credits */}
      <CustomerCreaditsTable creadits={customer?.credits!} />

      <MovementDetailTable movements={customer?.movements!} />
    </div>
  );
}
