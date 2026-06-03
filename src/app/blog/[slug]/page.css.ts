import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const header = style({
  paddingTop: "2.5rem",
  paddingBottom: "2rem",
  borderBottom: `1px solid ${vars.color.divider2}`,
  marginBottom: "2.5rem",
});

export const category = style({
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
  marginBottom: "1rem",
});

export const meta = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flexWrap: "wrap",
});

export const metaItem = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
});

export const dot = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
});
