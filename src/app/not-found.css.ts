import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "60vh",
  gap: "2rem",
  padding: "3rem 1.5rem",
  textAlign: "center",
});

export const illustration = style({
  width: "100%",
  maxWidth: "24rem",
  height: "auto",
});

export const body = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
});

export const title = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.inkText,
  letterSpacing: vars.letterSpacing.tight,
});

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
  lineHeight: vars.lineHeight.body,
});

export const link = style({
  marginTop: "0.75rem",
  display: "inline-block",
  padding: "0.625rem 1.25rem",
  borderRadius: vars.radius.full,
  background: vars.color.primary,
  color: vars.color.inkTextInverse,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  transition: `background-color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      background: vars.color.primaryHover,
    },
  },
});
