"use client";

import { useEffect, useState } from "react";
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
import { BatchWithRelation } from "../types";
import { batchSchema } from "../schema/schemas";
import { Product, ProductWithRelation, useProducts } from "@/features/products";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDateForInput } from "../utils";

type FormValues = z.infer<typeof batchSchema>;

export function BatchModal({
  open,
  onOpenChange,
  initialData,
  onSubmit,
  onUpdate,
  initalProducts,
  batchProduct,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initalProducts?: ProductWithRelation[] | null;
  initialData?: BatchWithRelation | null;
  onUpdate?: (data: FormValues, productId: string) => Promise<void> | null;
  onSubmit?: (
    data: FormValues,
    product?: Product | null,
  ) => Promise<void> | null;
  batchProduct?: ProductWithRelation | null;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(batchSchema),
    defaultValues: {
      batchNumber: "",
      expiryDate: formatDateForInput(new Date()),
      manufactureDate: formatDateForInput(new Date()),
      product: "",
    },
  });

  const [products, setProducts] = useState<ProductWithRelation[]>([]);
  const [selectedProduct, setProduct] = useState<ProductWithRelation | null>(
    batchProduct || null,
  );

  useEffect(() => {
    if (initialData) {
      reset({
        product: batchProduct?.name,
        batchNumber: initialData.batchNumber,
        expiryDate: initialData.expiryDate
          ? formatDateForInput(new Date(initialData.expiryDate))
          : formatDateForInput(new Date()),
        manufactureDate: initialData.manufactureDate
          ? formatDateForInput(new Date(initialData.manufactureDate))
          : formatDateForInput(new Date()),
      });
    } else {
      reset();
    }
  }, [initialData, reset]);

  const submit = async (data: FormValues) => {
    if (initialData) {
      await onUpdate!(data, selectedProduct?.id!);
    } else {
      await onSubmit!(data, selectedProduct!);
      reset();
    }
    onOpenChange(false);
    setProduct(null)
    reset();
  };

  function filterProduct(v: any) {
    const value = v.currentTarget.value.toLowerCase();
    const products =
      initalProducts?.filter((product) => {
        if (value != "" && product.name.toLowerCase().includes(value)) {
          return product;
        }
      }) ?? [];

    if (value == "") setProducts([]);
    if (products.length > 0) setProducts(products);
  }

  useEffect(() => {
    if (batchProduct) {
      setProduct(batchProduct);
    }
  }, [batchProduct]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Batch" : "Create Batch"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <FieldGroup>
            <Field>
              <FieldLabel>Product</FieldLabel>
              <Input
                placeholder="Paracetamol"
                {...register("product")}
                onChange={filterProduct}
              />
              {selectedProduct && (
                <div className="">
                  <Button
                    onClick={() => setProduct(null)}
                    className="border-2 border-red-700 bg-transparent text-red-700 hover:bg-red-700 hover:text-primary hover:border-0"
                  >
                    Clear
                  </Button>
                </div>
              )}
              {selectedProduct && (
                <Card className="py-2">
                  <CardHeader>
                    <CardTitle>{selectedProduct.name}</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <p>{`SKU (Item id): ${selectedProduct.sku}`}</p>
                  </CardFooter>
                </Card>
              )}
              <Separator />
              {products.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {...products.map((product) => {
                    return (
                      <Card className="flex flex-row justify-between items-center p-2">
                        <CardContent>{product.name}</CardContent>
                        <CardAction>
                          <Button
                            onClick={() => {
                              setProduct(product);
                              setProducts([]);
                            }}
                          >
                            Add
                          </Button>
                        </CardAction>
                      </Card>
                    );
                  })}
                </div>
              )}
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Batch Number</FieldLabel>
                <Input {...register("batchNumber")} />
              </Field>

              <Field>
                <FieldLabel>Expiry Date</FieldLabel>
                <Input type="date" {...register("expiryDate")} />
              </Field>

              <Field>
                <FieldLabel>Manufactured Date</FieldLabel>
                <Input type="date" {...register("manufactureDate")} />
              </Field>
            </div>
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
              {initialData ? "Update Batch" : "Create Batch"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
