import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  searchProductSchema,
  SearchProductValues,
} from "../schemas/product.schema";
import { orderValues, sortValues } from "@/lib/constants";

type Props = {
  onSearch?: (values: SearchProductValues) => void;
};

export function SearchProductsForm({ onSearch }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SearchProductValues>({
    resolver: zodResolver(searchProductSchema),
  });

  const submit = async (data: SearchProductValues) => {
    onSearch!(data)
  };

  return (
    <form className="w-full" onChange={handleSubmit(submit)}>
      <FieldGroup className="flex flex-row">
        <Field className="">
          <FieldLabel>Search (Name / SKU (item Id))</FieldLabel>
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
        <Field className="flex flex-row gap-2 items-center ">
          <Input
            type="checkbox"
            {...register("belowStokoutThreshold")}
            className="h-3.5 flex-1/2"
          />
          <FieldLabel>Below stock out threshold only</FieldLabel>
        </Field>
      </FieldGroup>
    </form>
  );
}
