import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SortBy } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertSortEnumToCamelCase(value: string): string {
  let sb: string = "";
  Object.keys(SortBy).forEach((s) => {
    const isMatch = s.split("_").join(" ").toLowerCase() == value.toLowerCase();
    if (isMatch) {
      let val = s.includes("_")
        ? s
            .toLowerCase()
            .split("_")
            .map((v, idx) => {
              if (idx > 0)
                return v
                  .split("")
                  .map((char, idx) => {
                    if (idx == 0) return char.toUpperCase();
                    return char;
                  })
                  .join("");
              return v;
            })
            .join("")
        : s.toLowerCase();
      sb = val;
      return;
    }
  });

  return sb;
}

export function formatSnakeCaseToText(s:string) {
  const splited = s.split("_");
  if (splited.length > 0) {
    return splited.join(" ");
  }
  return s;
}
