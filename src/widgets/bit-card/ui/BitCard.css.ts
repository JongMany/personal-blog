import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const root = style({
  display: "block",
  padding: "1.25rem 0",
  transition: `opacity ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      opacity: 0.55,
    },
  },
});

export const title = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkText,
  lineHeight: vars.lineHeight.heading,
  letterSpacing: vars.letterSpacing.tight,
  marginBottom: "0.625rem",
});

export const meta = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flexWrap: "wrap",
});

export const date = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
});

export const dot = style({
  fontSize: vars.fontSize.xs,
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
