import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const header = style({
  paddingTop: "3rem",
  paddingBottom: "2rem",
});

export const title = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.inkText,
  letterSpacing: vars.letterSpacing.tight,
  marginBottom: "0.375rem",
});

export const count = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
});

export const yearGroup = style({
  paddingTop: "2.5rem",
});

export const yearLabel = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkTextSubtle,
  letterSpacing: vars.letterSpacing.tight,
  textTransform: "uppercase",
  marginBottom: "0.5rem",
});

export const list = style({
  maxWidth: "42rem",
  margin: "0 auto",
  paddingTop: "2rem",
  paddingBottom: "4rem",
});

export { empty } from "@/shared/ui/empty.css";
