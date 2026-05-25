import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

// ── Layout ────────────────────────────────────────────────────────────────────

export const page = style({
  maxWidth: "48rem",
  margin: "0 auto",
  padding: `${vars.space["16"]} ${vars.space["6"]} ${vars.space["24"]}`,
  display: "flex",
  flexDirection: "column",
  gap: vars.space["12"],
});

// ── Profile ───────────────────────────────────────────────────────────────────

export const profileHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["4"],
});

export const nameBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["1"],
});

export const name = style({
  fontSize: vars.fontSize["3xl"],
  fontWeight: vars.fontWeight.bold,
  letterSpacing: vars.letterSpacing.tighter,
  color: vars.color.inkText,
  lineHeight: vars.lineHeight.heading,
});

export const tagline = style({
  fontSize: vars.fontSize.md,
  color: vars.color.inkTextLow,
  fontWeight: vars.fontWeight.regular,
});

export const contactRow = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: vars.space["4"],
});

export const contactLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "5px",
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
  transition: `color ${vars.transition.fast}`,
  selectors: {
    "&:hover": { color: vars.color.inkText },
  },
});

export const divider = style({
  border: "none",
  borderTop: `1px solid ${vars.color.divider2}`,
  margin: 0,
});

export const introList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["2"],
});

export const introItem = style({
  fontSize: vars.fontSize.sm,
  lineHeight: vars.lineHeight.loose,
  color: vars.color.inkTextLow,
});

// ── Section ───────────────────────────────────────────────────────────────────

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["6"],
});

export const sectionTitle = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space["3"],
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: vars.color.inkTextSubtle,
  "::after": {
    content: '""',
    flex: 1,
    height: "1px",
    backgroundColor: vars.color.divider2,
  },
});

// ── Experience ────────────────────────────────────────────────────────────────

export const experienceList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["10"],
});

export const experienceItem = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["3"],
});

export const experienceHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: vars.space["4"],
});

export const experienceMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const companyName = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkText,
  lineHeight: vars.lineHeight.heading,
});

export const roleName = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextLow,
});

export const period = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
  whiteSpace: "nowrap",
  flexShrink: 0,
  paddingTop: "2px",
});

export const techStack = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
  letterSpacing: "0.01em",
});

export const overview = style({
  fontSize: vars.fontSize.sm,
  lineHeight: vars.lineHeight.loose,
  color: vars.color.inkTextLow,
});

export const sectionList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["5"],
  marginTop: vars.space["1"],
});

export const sectionItem = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["1"],
});

export const sectionItemTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkText,
  lineHeight: vars.lineHeight.body,
});

export const sectionItemDescription = style({
  fontSize: vars.fontSize.xs,
  lineHeight: vars.lineHeight.loose,
  color: vars.color.inkTextSubtle,
  fontStyle: "italic",
  marginBottom: vars.space["1"],
});

export const sectionLinks = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space["2"],
});

export const sectionLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "3px",
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
  transition: `color ${vars.transition.fast}`,
  selectors: {
    "&:hover": { color: vars.color.inkText },
  },
});

// ── Education / Activity ──────────────────────────────────────────────────────

export const simpleList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["6"],
});

export const simpleItem = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["2"],
});

export const simpleHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: vars.space["4"],
});

export const simpleTitle = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkText,
  lineHeight: vars.lineHeight.heading,
});

export const simpleSubtitle = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextLow,
  marginTop: "2px",
});

export const gpaMeta = style({
  display: "flex",
  gap: vars.space["3"],
  flexWrap: "wrap",
});

export const gpaBadge = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
});
