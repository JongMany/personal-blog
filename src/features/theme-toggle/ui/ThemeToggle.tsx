"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/shared/hooks/useTheme";

import * as styles from "./ThemeToggle.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme} aria-label="테마 변경">
      {theme === "dark" ? (
        <span key="moon" className={styles.moonEnter}>
          <Moon size={18} />
        </span>
      ) : (
        <span key="sun" className={styles.sunEnter}>
          <Sun size={18} />
        </span>
      )}
    </button>
  );
}
