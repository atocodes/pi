"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      className="p-2 border fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
    >
      {theme == "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}
