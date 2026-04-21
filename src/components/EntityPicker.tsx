"use client";

import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardTitle } from "@/components/ui/card";

type EntityPickerProps<T> = {
  label: string;

  search: string;
  setSearch: (value: string) => void;

  results: T[];
  selected?: T | null;

  getLabel: (item: T) => string;

  onSearch: (query: string) => void;

  onSelect: (item: T) => void;
  onChange: () => void;
};

export function EntityPicker<T>({
  label,
  search,
  setSearch,
  results,
  getLabel,
  onSearch,
  onSelect,
  selected,
  onChange,
}: EntityPickerProps<T>) {
  console.log(selected)
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      {/* SELECTED STATE OR SEARCH INPUT */}
      {selected ? (
        <div className="flex items-center justify-between border rounded-md px-3 py-2">
          <span>{getLabel(selected)}</span>

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              onChange()
              setSearch("");
            }}
          >
            Change
          </Button>
        </div>
      ) : (
        <Input
          value={search}
          onChange={(e) => {
            const val = e.target.value;
            setSearch(val);
            onSearch(val);
          }}
          placeholder={`Search ${label}...`}
        />
      )}

      {/* RESULTS */}
      {!selected && search.length > 0 && results.length > 0 && (
        <div className="flex gap-3 flex-wrap mt-3">
          {results.map((item, i) => (
            <Card key={i} className="px-3 flex flex-row items-center">
              <CardTitle>{getLabel(item)}</CardTitle>

              <CardAction>
                <Button
                  type="button"
                  onClick={() => {
                    onSelect(item);
                    setSearch("");
                  }}
                >
                  Add
                </Button>
              </CardAction>
            </Card>
          ))}
        </div>
      )}

      {/* CLEAR SEARCH ONLY */}
      {!selected && (
        <Button
          type="button"
          variant="outline"
          className="mt-2"
          onClick={() => setSearch("")}
        >
          Clear
        </Button>
      )}
    </Field>
  );
}
