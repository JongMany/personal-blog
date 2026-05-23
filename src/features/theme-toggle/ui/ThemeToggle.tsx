"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/shared/hooks/useTheme";

import * as styles from "./ThemeToggle.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip.Provider delayDuration={400}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            className={styles.button}
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
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
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.tooltipContent} sideOffset={8}>
            {theme === "dark" ? "라이트 모드" : "다크 모드"}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
