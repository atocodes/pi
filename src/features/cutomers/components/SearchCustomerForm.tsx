import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderValues, sortValues, supplierSortValues } from "@/lib/constants";
import {
    searchCustomerSchema,
  SearchCustomerValues,
} from "../schemas/searchCustomers.schema";

type Props = {
  onSearch?: (values: SearchCustomerValues) => void;
};

export function SearchCustomersForm({ onSearch }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SearchCustomerValues>({
    resolver: zodResolver(searchCustomerSchema),
  });

  const submit = async (data: SearchCustomerValues) => {
    await onSearch!(data);
  };
  return (
    <form className="w-full" onChange={handleSubmit(submit)}>
      <FieldGroup className="flex flex-row">
        <Field className="">
          <FieldLabel>Search</FieldLabel>
          <Input placeholder="Search by name or tin" {...register("q")} className="w-0.5" />
        </Field>
        <Field className="flex-1/3">
          <FieldLabel>Sort By</FieldLabel>
          <select {...register("sortBy")} className="text-xs">
            {...supplierSortValues.map((sortValue) => {
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
    </form>
  );
}
