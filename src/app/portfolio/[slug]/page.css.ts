import { style } from "@vanilla-extract/css";

import { layout, vars } from "@/shared/config";

export { prose } from "@/shared/ui/prose.css";

export const article = style({
  maxWidth: layout.contentWidth,
  margin: "0 auto",
  paddingTop: "2rem",
  paddingBottom: "5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
});

export const back = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextLow,
  marginBottom: "2rem",
  transition: `color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      color: vars.color.inkText,
    },
  },
});

export const header = style({
  paddingTop: "1rem",
  paddingBottom: "2rem",
  borderBottom: `1px solid ${vars.color.divider2}`,
  marginBottom: "2.5rem",
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
  flexDirection: "column",
  gap: "0.75rem",
});

export const period = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
});

export const links = style({
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
});

export const linkBtn = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
  fontSize: vars.fontSize.sm,
  color: vars.color.primary,
  backgroundColor: vars.color.primaryLow,
  borderRadius: vars.radius.sm,
  padding: "0.375rem 0.875rem",
  transition: `background-color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      backgroundColor: vars.color.primaryLowHover,
    },
  },
});
