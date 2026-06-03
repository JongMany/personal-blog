import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const card = style({
  display: "flex",
  flexDirection: "column",
  background: "none",
  border: `1px solid ${vars.color.divider2}`,
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  textAlign: "left",
  cursor: "pointer",
  transition: `border-color ${vars.transition.fast}, box-shadow ${vars.transition.fast}, transform ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      borderColor: vars.color.divider3,
      boxShadow: vars.shadow.md,
      transform: "translateY(-2px)",
    },
  },
});

export const accent = style({
  height: "8rem",
  flexShrink: 0,
  backgroundColor: vars.color.paperSheet,
});

export const body = style({
  flex: 1,
  padding: "1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.625rem",
});

export const title = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkText,
  lineHeight: vars.lineHeight.heading,
  letterSpacing: vars.letterSpacing.tight,
});

export const summary = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextLow,
  lineHeight: vars.lineHeight.body,
  flex: 1,
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

export const footer = style({
  padding: "0 1.25rem 1.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const period = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
});

export const arrow = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
  transition: `transform ${vars.transition.fast}, color ${vars.transition.fast}`,
  selectors: {
    [`${card}:hover &`]: {
      transform: "translateX(3px)",
      color: vars.color.primary,
    },
  },
});
