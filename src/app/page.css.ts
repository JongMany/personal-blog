import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const hero = style({
  paddingTop: "3rem",
  paddingBottom: "3rem",
  borderBottom: `1px solid ${vars.color.divider2}`,
});

export const greeting = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.primary,
  letterSpacing: vars.letterSpacing.tight,
  marginBottom: "0.75rem",
});

export const name = style({
  fontSize: vars.fontSize["4xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.inkText,
  letterSpacing: vars.letterSpacing.tighter,
  lineHeight: vars.lineHeight.heading,
  marginBottom: "1rem",
});

export const bio = style({
  fontSize: vars.fontSize.md,
  color: vars.color.inkTextLow,
  lineHeight: vars.lineHeight.loose,
  marginBottom: "1.5rem",
  maxWidth: "36rem",
});

export const social = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const socialLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextLow,
  padding: "0.375rem 0.625rem",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.divider2}`,
  transition: `color ${vars.transition.fast}, border-color ${vars.transition.fast}, background-color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      color: vars.color.inkText,
      borderColor: vars.color.divider3,
      backgroundColor: vars.color.interactionHover,
    },
  },
});

export const section = style({
  paddingTop: "2.5rem",
});

export const sectionHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "1.25rem",
});

export const sectionTitle = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkTextSubtle,
  letterSpacing: vars.letterSpacing.tight,
  textTransform: "uppercase",
});

export const sectionMore = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
  transition: `color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      color: vars.color.inkText,
    },
  },
});

export const empty = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
  paddingTop: "0.5rem",
});
