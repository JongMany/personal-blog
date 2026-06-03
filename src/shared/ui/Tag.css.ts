import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const tagList = style({
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
