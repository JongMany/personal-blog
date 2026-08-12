import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const wrapper = style({
  maxWidth: "54rem",
  margin: "0 auto",
  paddingTop: "2rem",
  paddingBottom: "4rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
});

export const header = style({
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
  display: "flex",
  flexDirection: "column",
});

export { empty } from "@/shared/ui/empty.css";
