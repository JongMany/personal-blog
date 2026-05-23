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

export const list = style({
  paddingBottom: "4rem",
  borderTop: `1px solid ${vars.color.divider2}`,
});
