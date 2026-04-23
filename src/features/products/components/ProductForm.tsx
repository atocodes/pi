"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group";
import { Product } from "../types";
import { productSchema, unitValues } from "../schema/product.schema";

type FormValues = z.infer<typeof productSchema>;

export function ProductModal({
  open,
  onOpenChange,
  initialData,
  onSubmit,
  onUpdate,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Product | null;
  onUpdate?: (data: FormValues, id?: string) => Promise<void> | null;
  onSubmit?: (data: FormValues) => Promise<void> | null;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      sku: null,
      barcode: null,
      category: null,
      unit: null,
      sellingPrice: 0,
      description: null,
      lowStockAlert: null,
      stock: 0,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name,
        sku: initialData.sku,
        barcode: initialData.barcode,
        category: initialData.category,
        unit: initialData.unit,
        sellingPrice: initialData.sellingPrice,
        description: initialData.description ?? null,
        lowStockAlert: initialData.lowStockAlert ?? null,
        stock: initialData.stock,
      });
    } else {
      reset();
    }
  }, [initialData, reset]);

  const submit = async (data: FormValues) => {
    if (initialData) {
      await onUpdate!(data, initialData.id);
    } else {
      await onSubmit!(data);
    }
    onOpenChange(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Product" : "Add Product"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <FieldGroup>
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input placeholder="Paracetamol" {...register("name")} />
              {errors.name && <FieldError>{errors.name.message}</FieldError>}
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>SKU</FieldLabel>
                <Input {...register("sku")} />
              </Field>

              <Field>
                <FieldLabel>Barcode</FieldLabel>
                <Input {...register("barcode")} />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Category</FieldLabel>
                <Input {...register("category")} />
              </Field>

              <Field>
                <FieldLabel>Unit</FieldLabel>
                <select
                  className="w-full border rounded-md p-2"
                  {...register("unit")}
                >
                  <option value="">Select</option>
                  {...unitValues.map((unit) => (
                    <option value={unit}>{unit}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Price</FieldLabel>
                <InputGroup>
                  <InputGroupAddon>
                    <InputGroupText>ETB</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" {...register("sellingPrice")} />
                </InputGroup>
              </Field>

              <Field>
                <FieldLabel>Stock</FieldLabel>
                <Input type="number" {...register("stock")} />
              </Field>
            </div>

            <Field>
              <FieldLabel>Low Stock Alert</FieldLabel>
              <Input type="number" {...register("lowStockAlert")} />
            </Field>

            <Field>
              {/* <InputGroupTextarea> */}
                <FieldLabel>Description</FieldLabel>
                <Textarea
                  rows={3}
                  // type="text"
                  {...register("description")}
                />
                <FieldDescription>Optional product details</FieldDescription>
              {/* </InputGroupTextarea> */}
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
              {initialData ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
