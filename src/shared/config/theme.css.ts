import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: null,
    surface: null,
    surfaceHover: null,
    border: null,
    borderSubtle: null,

    textPrimary: null,
    textSecondary: null,
    textTertiary: null,
    textInverse: null,

    accent: null,
    accentHover: null,
    accentSubtle: null,

    codeBackground: null,
  },
  font: {
    sans: null,
    mono: null,
  },
  fontSize: {
    xs: null,
    sm: null,
    base: null,
    lg: null,
    xl: null,
    "2xl": null,
    "3xl": null,
    "4xl": null,
  },
  fontWeight: {
    normal: null,
    medium: null,
    semibold: null,
    bold: null,
  },
  lineHeight: {
    tight: null,
    snug: null,
    normal: null,
    relaxed: null,
  },
  space: {
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "8": null,
    "10": null,
    "12": null,
    "16": null,
    "20": null,
    "24": null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    full: null,
  },
  shadow: {
    sm: null,
    md: null,
    lg: null,
  },
  transition: {
    fast: null,
    base: null,
  },
});

const baseTokens = {
  font: {
    sans: "var(--font-pretendard), system-ui, sans-serif",
    mono: "var(--font-jetbrains-mono), 'Courier New', monospace",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.75",
  },
  space: {
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
  },
  radius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  transition: {
    fast: "150ms ease",
    base: "250ms ease",
  },
};

export const lightTheme = createTheme(vars, {
  ...baseTokens,
  color: {
    background: "#ffffff",
    surface: "#f8f9fa",
    surfaceHover: "#f1f3f5",
    border: "#dee2e6",
    borderSubtle: "#e9ecef",

    textPrimary: "#212529",
    textSecondary: "#495057",
    textTertiary: "#868e96",
    textInverse: "#ffffff",

    accent: "#3b82f6",
    accentHover: "#2563eb",
    accentSubtle: "#eff6ff",

    codeBackground: "#f1f3f5",
  },
});

export const darkTheme = createTheme(vars, {
  ...baseTokens,
  color: {
    background: "#0d1117",
    surface: "#161b22",
    surfaceHover: "#21262d",
    border: "#30363d",
    borderSubtle: "#21262d",

    textPrimary: "#e6edf3",
    textSecondary: "#8b949e",
    textTertiary: "#6e7681",
    textInverse: "#0d1117",

    accent: "#58a6ff",
    accentHover: "#79b8ff",
    accentSubtle: "#0d1f36",

    codeBackground: "#161b22",
  },
});
