import { style } from "@vanilla-extract/css";

import { layout, vars } from "@/shared/config";

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

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
});

export { empty } from "@/shared/ui/empty.css";

export const section = style({
  paddingBottom: "3rem",
});

export const wrapper = style({
  maxWidth: layout.contentWidth,
  margin: "0 auto",
  paddingTop: "2rem",
});

export const dateGroup = style({
  paddingTop: "2rem",
});

export const dateLabel = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.inkTextSubtle,
  letterSpacing: vars.letterSpacing.normal,
  marginBottom: "0.25rem",
});
