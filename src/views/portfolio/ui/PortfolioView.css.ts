import { style } from "@vanilla-extract/css";

import { layout, vars } from "@/shared/config";

export const wrapper = style({
  maxWidth: layout.contentWidth,
  margin: "0 auto",
  paddingTop: "3rem",
  paddingBottom: "5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
});

export const pageHeader = style({
  marginBottom: "3rem",
});

export const label = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.primary,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  marginBottom: "0.625rem",
});

export const title = style({
  fontSize: vars.fontSize["3xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.inkText,
  letterSpacing: vars.letterSpacing.tighter,
  lineHeight: vars.lineHeight.heading,
  marginBottom: "0.75rem",
});

export const description = style({
  fontSize: vars.fontSize.md,
  color: vars.color.inkTextLow,
  lineHeight: vars.lineHeight.body,
});

export const sectionTitle = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkTextSubtle,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  marginBottom: "1rem",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",
  "@media": {
    "(max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
  },
});
