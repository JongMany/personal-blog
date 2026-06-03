import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export { prose } from "@/shared/ui/prose.css";

export const article = style({
  maxWidth: "42rem",
  margin: "0 auto",
  paddingTop: "2rem",
  paddingBottom: "5rem",
});

export const header = style({
  paddingTop: "2.5rem",
  paddingBottom: "2.5rem",
  marginBottom: "2.5rem",
});

export const genre = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.primary,
  marginBottom: "0.75rem",
});

export const title = style({
  fontSize: vars.fontSize["3xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.inkText,
  letterSpacing: vars.letterSpacing.tight,
  lineHeight: vars.lineHeight.heading,
  marginBottom: "0.5rem",
});

export const author = style({
  fontSize: vars.fontSize.md,
  color: vars.color.inkTextLow,
  marginBottom: "1.25rem",
});

export const meta = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flexWrap: "wrap",
  marginBottom: "1.25rem",
});

export const metaItem = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
});

export const dot = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.divider3,
});

export const tags = style({
  display: "flex",
  gap: "0.375rem",
  flexWrap: "wrap",
});

export const tag = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.primary,
  backgroundColor: vars.color.primaryLow,
  borderRadius: vars.radius.xs,
  padding: "0.125rem 0.5rem",
});
