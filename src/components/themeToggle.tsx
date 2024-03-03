"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [initialTheme, setInitialTheme] = useState<any>(null);

  useEffect(() => {
    setInitialTheme(theme);
  }, [theme]);

  if (!initialTheme) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="opacity-70 hover:opacity-100"
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme.`}
    >
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-90 transition-all dark:rotate-100 dark:scale-0" />
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-100 scale-0 transition-all dark:-rotate-0 dark:scale-90" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
