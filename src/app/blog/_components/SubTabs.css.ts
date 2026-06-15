import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const bar = style({
  display: "flex",
  gap: "1.5rem",
  borderBottom: `1px solid ${vars.color.divider2}`,
  marginBottom: "2rem",
});

export const tab = style({
  position: "relative",
  paddingBottom: "0.75rem",
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkTextSubtle,
  letterSpacing: vars.letterSpacing.tight,
  transition: `color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      color: vars.color.inkText,
    },
  },
});

export const tabActive = style({
  color: vars.color.inkText,
  selectors: {
    "&::after": {
      content: "''",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "-1px",
      height: "2px",
      backgroundColor: vars.color.inkText,
    },
  },
});
