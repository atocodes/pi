// features/stock-movements/components/StockMovementForm.tsx

"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Card } from "@/components/ui/card";

import { EntityPicker } from "@/components/EntityPicker";

import { useCustomers } from "@/features/cutomers";
import { useBatches } from "@/features/batches";

import { CustomerModal } from "@/features/cutomers";

import { movementConfig } from "../config/movement.config";
import { MovementItem, MovementMode } from "../types";
import {
  movementItemSchema,
  MovementItemValues,
  movementSchema,
  movementTypeValues,
  MovementValues,
  paymentTypeValues,
} from "../schema/movement.schema";
import { useProducts } from "@/features/products";
import { SupplierModal, useSupplier, useSuppliers } from "@/features/suppliers";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: MovementMode;
};

export function StockMovementForm({ open, onOpenChange, mode }: Props) {
  const config = movementConfig[mode];

  const form = useForm<MovementValues>({
    resolver: zodResolver(movementSchema),
    defaultValues: {
      issueNumber: mode == "ISSUE" ? "" : undefined,
      receiveNumber: mode == "RECEIVE" ? "" : undefined,
      reason: movementTypeValues[0],
      customerId: mode == "ISSUE" ? "" : undefined,
      supplierId: mode == "ISSUE" ? "" : undefined,
      paymentType: paymentTypeValues[0],
      notes: "",
      items: [],
    },
  });

  const { register, handleSubmit, control, setValue, reset } = form;

  const {
    fields: items,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "items",
  });

  const itemForm = useForm<MovementItemValues>({
    resolver: zodResolver(movementItemSchema),
    defaultValues: {
      batchId: "",
      productId: "",
      quantity: 1,
      unitPrice: 0,
    },
  });

  // hooks
  const {
    customers,
    setFilters: setCustomerFilter,
    addCustomer,
  } = useCustomers();
  const { products, setFilters: setProductFilter } = useProducts();
  const { batches, setFilters: setBatchFilter } = useBatches();
  const {
    suppliers,
    setFilters: setSupplierFilter,
    createSupplier,
  } = useSuppliers();

  // UI state
  const [customerSearch, setCustomerSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [batchSearch, setBatchSearch] = useState("");
  const [supplierSearch, setSupplierSearch] = useState("");

  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedBatch, setSelectedBatch] = useState<any>(null);
  const [selectedSupplier, setSelectedSupplier] = useState<any>(null);

  const [openCustomerModal, setCustomerModalOpen] = useState(false);
  const [openSupplierModal, setSupplierModalOpen] = useState(false);

  const submit = (data: MovementValues) => {
    console.log("SUBMIT", data);
    reset();
    setSelectedCustomer(null);
    setSelectedSupplier(null);
    onOpenChange(false);
  };

  const addItem = (data: MovementItemValues) => {
    append(data);
    itemForm.reset();
    setSelectedProduct(null);
    setSelectedBatch(null);
    setProductSearch("");
    setBatchSearch("");
  };

  const resetAllStates = () => {
    setSelectedProduct(null);
    setSelectedBatch(null);
    setProductSearch("");
    setBatchSearch("");
    setSelectedCustomer(null);
    setSelectedSupplier(null);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        onOpenChange(!open);
        resetAllStates();
      }}
    >
      <DialogContent className="lg:!w-[95vw] lg:!max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{config.title}</DialogTitle>
          <DialogDescription>{config.description}</DialogDescription>
        </DialogHeader>

        <form
          id="movement-form"
          onSubmit={handleSubmit(submit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* LEFT */}
          <div className="grid gap-4">
            <Field>
              <FieldLabel>{mode} Number</FieldLabel>
              <Input
                {...register(mode == "ISSUE" ? "issueNumber" : "receiveNumber")}
              />
            </Field>

            <Field>
              <FieldLabel>Reason</FieldLabel>
              <select {...register("reason")}>
                {movementTypeValues.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </Field>

            {config.showCustomer && (
              <EntityPicker
                label="Customer"
                search={customerSearch}
                setSearch={setCustomerSearch}
                results={customerSearch ? customers : []}
                getLabel={(c) => c.name}
                onSearch={(q) => setCustomerFilter({ q })}
                selected={selectedCustomer}
                onSelect={(c) => {
                  setSelectedCustomer(c);
                  setValue("customerId", c.id);
                  setCustomerSearch("");
                }}
                onChange={() => {
                  setSelectedCustomer(null);
                }}
              />
            )}

            {config.showSupplier && (
              <EntityPicker
                label="Supplier (Optional)"
                search={supplierSearch}
                setSearch={setSupplierSearch}
                results={supplierSearch ? suppliers : []}
                getLabel={(s) => s.name}
                onSearch={(q) => setSupplierFilter({ q })}
                selected={selectedSupplier}
                onSelect={(s) => {
                  setSelectedSupplier(s);
                  setValue("supplierId", s.id);
                  setSupplierSearch("");
                }}
                onChange={() => {
                  setSelectedSupplier(null);
                }}
              />
            )}

            <Button
              type="button"
              onClick={() =>
                mode == "ISSUE"
                  ? setCustomerModalOpen(true)
                  : setSupplierModalOpen(true)
              }
            >
              Add {mode == "ISSUE" ? "Customer" : "Supplier"}
            </Button>

            {config.showPaymentType && (
              <Field>
                <FieldLabel>Payment Type</FieldLabel>
                <select {...register("paymentType")}>
                  {paymentTypeValues.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>
            )}

            <Field>
              <FieldLabel>Notes</FieldLabel>
              <Input {...register("notes")} />
            </Field>

            <div>
              <h3 className="font-semibold">Items ({items.length})</h3>

              {items.map((item, i) => (
                <Card key={item.id} className="p-3">
                  <div>
                    Product:{" "}
                    {products.find((p) => p.id == item.productId)?.name}
                  </div>
                  <div>
                    Batch:{" "}
                    {batches.find((b) => b.id == item.batchId)?.batchNumber}
                  </div>
                  <div>Qty: {item.quantity}</div>

                  <Button type="button" onClick={() => remove(i)}>
                    Remove
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4 border-l pl-6">
            <EntityPicker
              label="Product"
              search={productSearch}
              setSearch={setProductSearch}
              results={productSearch ? products : []}
              getLabel={(p) => p.name}
              onSearch={(q) => setProductFilter({ q })}
              selected={selectedProduct}
              onSelect={(p) => {
                itemForm.setValue("productId", p.id);
                setSelectedProduct(p);
              }}
              onChange={() => {
                setSelectedProduct(null);
              }}
            />

            <EntityPicker
              label="Batch"
              search={batchSearch}
              setSearch={setBatchSearch}
              results={batchSearch ? batches : []}
              getLabel={(b) => b.batchNumber}
              onSearch={(q) =>
                setBatchFilter({
                  q,
                  expiredOnly: false,
                  expiringSoonOnly: false,
                })
              }
              selected={selectedBatch}
              onSelect={(b) => {
                setSelectedBatch(b);
                itemForm.setValue("batchId", b.id);
              }}
              onChange={() => setSelectedBatch(null)}
            />

            <Field>
              <FieldLabel>Quantity</FieldLabel>
              <Input {...itemForm.register("quantity")} />
            </Field>

            <Field>
              <FieldLabel>Unit Price</FieldLabel>
              <Input {...itemForm.register("unitPrice")} />
            </Field>

            <Button type="button" onClick={itemForm.handleSubmit(addItem)}>
              Add Item
            </Button>
          </div>
        </form>

        <DialogFooter>
          <Button type="submit" form="movement-form">
            Save Movement
          </Button>
        </DialogFooter>
      </DialogContent>

      <CustomerModal
        open={openCustomerModal}
        onOpenChange={setCustomerModalOpen}
        onSubmit={addCustomer}
      />

      <SupplierModal
        open={openSupplierModal}
        onOpenChange={setSupplierModalOpen}
        onSubmit={createSupplier}
      />
    </Dialog>
  );
}
