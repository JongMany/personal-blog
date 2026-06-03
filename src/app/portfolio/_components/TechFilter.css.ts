import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const bar = style({
  display: "flex",
  gap: "0.375rem",
  flexWrap: "wrap",
  paddingBottom: "1.5rem",
});

export const chip = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.inkTextLow,
  backgroundColor: vars.color.paperSheet,
  border: `1px solid ${vars.color.divider2}`,
  borderRadius: vars.radius.full,
  padding: "0.3rem 0.875rem",
  cursor: "pointer",
  transition: `color ${vars.transition.fast}, background-color ${vars.transition.fast}, border-color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      color: vars.color.inkText,
      borderColor: vars.color.divider3,
    },
  },
});

export const activeChip = style({
  color: vars.color.primary,
  backgroundColor: vars.color.primaryLow,
  borderColor: vars.color.primary,
  selectors: {
    "&:hover": {
      color: vars.color.primary,
      borderColor: vars.color.primary,
    },
  },
});
