"use client"

import z from "zod";
import { customerSchema } from "../schema/customer.schema";
import { Customer } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormValues = z.infer<typeof customerSchema>;

export function CustomerModal({
  open,
  onOpenChange,
  initalData,
  onSubmit,
  onUpdate,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initalData?: Customer | null;
  onUpdate?: (data: FormValues, id?: string) => Promise<void> | null;
  onSubmit?: (data: FormValues) => Promise<void> | null;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
      tinNumber: null,
      contactName: null,
      address: null,
      phone: null,
    },
  });

  useEffect(() => {
    if (initalData) {
      reset({ ...initalData });
    } else {
      reset();
    }
  }, [initalData, reset]);

  const submit = async (data: FormValues) => {
    if (initalData) {
      await onUpdate!(data, initalData.id);
    } else {
      await onSubmit!(data);
    }
    onOpenChange(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2x1">
        <DialogHeader>
          <DialogTitle>
            {initalData ? "Edit Customer" : "Create Customer"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <FieldGroup>
            <Field>
              <FieldLabel>Name (Required)</FieldLabel>
              <Input placeholder="Customer name" {...register("name")} />
            </Field>
            <Field>
              <FieldLabel>TIN (Optional)</FieldLabel>
              <Input placeholder="Optional" {...register("tinNumber")} />
            </Field>
            <Field>
              <FieldLabel>Contact Name (Optional)</FieldLabel>
              <Input placeholder="Optional" {...register("contactName")} />
            </Field>
            <Field>
              <FieldLabel>Contact Phone (Optional)</FieldLabel>
              <Input placeholder="Optional" {...register("phone")} />
            </Field>
          </FieldGroup>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {initalData ? "Update" : "Create Customer"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
