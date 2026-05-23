import { useEffect, useState } from "react";

import { darkTheme, lightTheme } from "@/shared/config";
import { isServer } from "@/shared/lib";

type Theme = "light" | "dark";

function applyTheme(value: Theme) {
  const root = document.documentElement;
  root.classList.remove(lightTheme, darkTheme);
  root.classList.add(value === "dark" ? darkTheme : lightTheme);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (isServer()) return "light";
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme ?? (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return { theme, toggleTheme };
}
