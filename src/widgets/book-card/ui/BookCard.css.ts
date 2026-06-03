import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const root = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",
  padding: "0.875rem 0",
  transition: `opacity ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      opacity: 0.6,
    },
  },
});

export const cover = style({
  position: "relative",
  flexShrink: 0,
  width: "2.75rem",
  height: "3.875rem",
  borderRadius: vars.radius.sm,
  overflow: "hidden",
  backgroundColor: vars.color.paperBackground,
});

export const coverImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  flex: 1,
  minWidth: 0,
});

export const title = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkText,
  lineHeight: vars.lineHeight.heading,
  letterSpacing: vars.letterSpacing.tight,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const author = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextLow,
});

export const bottom = style({
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
  marginTop: "0.2rem",
});

export const dot = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.divider3,
});

export const date = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
});

export const genre = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
});
