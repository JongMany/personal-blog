import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const prose = style({
  fontSize: vars.fontSize.md,
  lineHeight: vars.lineHeight.loose,
  color: vars.color.inkText,
});

globalStyle(`${prose} h2`, {
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkText,
  marginTop: "2.5rem",
  marginBottom: "1rem",
});

globalStyle(`${prose} h3`, {
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  marginTop: "2rem",
  marginBottom: "0.75rem",
});

globalStyle(`${prose} p`, {
  marginBottom: "1.25rem",
});

globalStyle(`${prose} a`, {
  color: vars.color.primary,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
});

globalStyle(`${prose} code`, {
  fontSize: "0.875em",
  backgroundColor: vars.color.paperSheet,
  borderRadius: vars.radius.sm,
  padding: "0.15em 0.35em",
});

globalStyle(`${prose} pre`, {
  backgroundColor: vars.color.paperSheet,
  borderRadius: vars.radius.md,
  padding: "1.25rem",
  overflowX: "auto",
  marginBottom: "1.5rem",
});

globalStyle(`${prose} pre code`, {
  backgroundColor: "transparent",
  padding: 0,
  fontSize: vars.fontSize.sm,
});

globalStyle(`${prose} ul, ${prose} ol`, {
  paddingLeft: "1.5rem",
  marginBottom: "1.25rem",
});

globalStyle(`${prose} li`, {
  marginBottom: "0.375rem",
});

globalStyle(`${prose} blockquote`, {
  borderLeft: `3px solid ${vars.color.divider3}`,
  paddingLeft: "1rem",
  color: vars.color.inkTextLow,
  marginBottom: "1.25rem",
});

globalStyle(`${prose} hr`, {
  border: "none",
  borderTop: `1px solid ${vars.color.divider2}`,
  margin: "2rem 0",
});
