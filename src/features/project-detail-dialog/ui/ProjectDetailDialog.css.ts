import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export { prose } from "@/shared/ui/prose.css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const overlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: vars.color.overlayDim,
  zIndex: vars.zIndex.overlay,
  selectors: {
    '&[data-state="open"]': {
      animation: `${fadeIn} 300ms ease`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 320ms ease forwards`,
    },
  },
});

export const content = style({
  position: "fixed",
  inset: 0,
  zIndex: vars.zIndex.modal,
  backgroundColor: vars.color.paperDefault,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  outline: "none",
  transformOrigin: "center center",
});

export const topBar = style({
  position: "sticky",
  top: 0,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1.5rem",
  height: "3.5rem",
  backgroundColor: vars.color.paperDefault,
  borderBottom: `1px solid ${vars.color.divider2}`,
  backdropFilter: "blur(8px)",
  flexShrink: 0,
});

export const closeBtn = style({
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextLow,
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0.375rem 0",
  transition: `color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      color: vars.color.inkText,
    },
  },
});

export const body = style({
  maxWidth: "42rem",
  margin: "0 auto",
  width: "100%",
  padding: "2.5rem 1.5rem 5rem",
  flex: 1,
});

export const projectTitle = style({
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
  marginBottom: "2rem",
  paddingBottom: "2rem",
  borderBottom: `1px solid ${vars.color.divider2}`,
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
