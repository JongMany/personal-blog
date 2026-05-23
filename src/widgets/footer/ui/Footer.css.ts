import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const footer = style({
  borderTop: `1px solid ${vars.color.divider2}`,
  marginTop: "5rem",
  transition: `border-color ${vars.transition.base}`,
});

export const inner = style({
  maxWidth: "42rem",
  margin: "0 auto",
  padding: "1.5rem 1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const social = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
});

export const socialLink = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  borderRadius: vars.radius.md,
  color: vars.color.inkTextLow,
  transition: `color ${vars.transition.fast}, background-color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      color: vars.color.inkText,
      backgroundColor: vars.color.interactionHover,
    },
  },
});

export const copyright = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
});
