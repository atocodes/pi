import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import z from "zod";
import { searchSchema, SearchValues } from "../schema/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchBatchParms } from "../types";
import { useRouter, useSearchParams } from "next/navigation";
import { useBatches } from "../hooks/batches.hook";
import { useEffect } from "react";
import { orderValues, sortValues } from "@/lib/constants";

type Props = {
  onSearch?: (values: SearchValues) => void;
};

export function SearchBatchesForm({ onSearch }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SearchValues>({
    resolver: zodResolver(searchSchema),
  });

  const submit = async (data: SearchValues) => {
    await onSearch!(data);
  };

  return (
    <form className="w-full" onChange={handleSubmit(submit)}>
      <FieldGroup className="flex flex-row">
        <Field className="">
          <FieldLabel>Search</FieldLabel>
          <Input {...register("q")} className="w-0.5" />
        </Field>
        <Field className="flex-1/3">
          <FieldLabel>Sort By</FieldLabel>
          <select {...register("sortBy")} className="text-xs">
            {...sortValues.map((sortValue) => {
              return <option value={sortValue}>{sortValue}</option>;
            })}
          </select>
        </Field>
        <Field className="flex-1/3">
          <FieldLabel>Order</FieldLabel>
          <select {...register("order")} className="text-xs">
            {...orderValues.map((orderValue) => {
              return <option value={orderValue}>{orderValue}</option>;
            })}
          </select>
        </Field>
      </FieldGroup>
      <div className="py-2 w-sm">
        <FieldGroup className="flex flex-row items-start justify-start">
          <Field className="flex flex-row gap-2 items-center ">
            <Input
              type="checkbox"
              {...register("expiredOnly")}
              className="h-3.5 flex-1/2"
            />
            <FieldLabel>Expired Only</FieldLabel>
          </Field>
          <Field className="flex flex-row items-center ">
            <Input
              type="checkbox"
              {...register("expiringSoonOnly")}
              className="h-3.5 flex-1/2"
            />
            <FieldLabel>Expiring Soon Only</FieldLabel>
          </Field>
        </FieldGroup>
      </div>
    </form>
  );
}
