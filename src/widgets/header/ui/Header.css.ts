import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const header = style({
  position: "sticky",
  top: 0,
  zIndex: vars.zIndex.sticky,
  backgroundColor: vars.color.paperDefault,
  backdropFilter: "blur(8px)",
  transition: `background-color ${vars.transition.base}`,
});

export const inner = style({
  maxWidth: "42rem",
  margin: "0 auto",
  padding: "0 1.5rem",
  height: "3.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const logo = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkText,
  letterSpacing: vars.letterSpacing.tight,
  flexShrink: 0,
  transition: `color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      color: vars.color.primary,
    },
  },
});

export const left = style({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: "0.125rem",
});

export const navLink = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextLow,
  padding: "0.3rem 0.5rem",
  borderRadius: vars.radius.sm,
  transition: `color ${vars.transition.fast}, background-color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      color: vars.color.inkText,
      backgroundColor: vars.color.interactionHover,
    },
  },
});
