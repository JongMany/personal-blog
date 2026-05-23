import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const root = style({
  display: "block",
  padding: "1.75rem 0",
  borderBottom: `1px solid ${vars.color.divider2}`,
  transition: `opacity ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      opacity: 0.6,
    },
  },
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkText,
  lineHeight: vars.lineHeight.heading,
  marginBottom: "0.5rem",
  letterSpacing: vars.letterSpacing.tight,
});

export const summary = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextLow,
  lineHeight: vars.lineHeight.body,
  marginBottom: "1rem",
  display: "-webkit-box",
  overflow: "hidden",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
});

export const meta = style({
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
});

export const metaItem = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
});

export const dot = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.divider3,
});
