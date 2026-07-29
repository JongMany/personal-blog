import { globalStyle, style } from "@vanilla-extract/css";

import { darkTheme, lightTheme, vars } from "@/shared/config";

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

globalStyle(`${prose} h4`, {
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.inkText,
  marginTop: "1.75rem",
  marginBottom: "0.625rem",
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
  color: vars.color.inkText,
  backgroundColor: vars.color.codeBackground,
  border: `1px solid ${vars.color.codeBorder}`,
  borderRadius: vars.radius.sm,
  padding: "0.12em 0.35em",
  whiteSpace: "break-spaces",
});

globalStyle(`${prose} figure[data-rehype-pretty-code-figure]`, {
  position: "relative",
  marginTop: "1rem",
  marginBottom: "1.5rem",
});

globalStyle(`${prose} figure[data-rehype-pretty-code-figure] pre`, {
  position: "relative",
  color: vars.color.inkText,
  backgroundColor: vars.color.codeBackground,
  border: `1px solid ${vars.color.codeBorder}`,
  borderRadius: vars.radius.md,
  padding: "2.25rem 1.25rem 1.25rem",
  overflowX: "auto",
  margin: 0,
  boxShadow: vars.shadow.sm,
});

globalStyle(`${prose} figure[data-rehype-pretty-code-figure] pre::before`, {
  content: "attr(data-language)",
  position: "absolute",
  top: "0.75rem",
  right: "0.875rem",
  zIndex: 1,
  fontFamily: vars.font.mono,
  fontSize: "0.6875rem",
  fontWeight: vars.fontWeight.medium,
  lineHeight: 1,
  color: vars.color.inkTextSubtle,
  textTransform: "uppercase",
  letterSpacing: "0",
});

globalStyle(`${prose} figure[data-rehype-pretty-code-figure] pre code`, {
  backgroundColor: "transparent",
  border: "none",
  borderRadius: 0,
  padding: 0,
  fontSize: vars.fontSize.sm,
  lineHeight: "1.75",
  whiteSpace: "pre",
});

globalStyle(`${prose} figure[data-rehype-pretty-code-figure] [data-line]`, {
  paddingLeft: "1.25rem",
  paddingRight: "1.25rem",
  marginLeft: "-1.25rem",
  marginRight: "-1.25rem",
});

globalStyle(`.${lightTheme} ${prose} figure[data-rehype-pretty-code-figure] pre`, {
  backgroundColor: "var(--shiki-light-bg)",
});

globalStyle(`.${darkTheme} ${prose} figure[data-rehype-pretty-code-figure] pre`, {
  backgroundColor: "var(--shiki-dark-bg)",
});

globalStyle(`.${lightTheme} ${prose} figure[data-rehype-pretty-code-figure] span`, {
  color: "var(--shiki-light, inherit)",
});

globalStyle(`.${darkTheme} ${prose} figure[data-rehype-pretty-code-figure] span`, {
  color: "var(--shiki-dark, inherit)",
});

globalStyle(`${prose} ul, ${prose} ol`, {
  paddingLeft: "1.5rem",
  marginBottom: "1.25rem",
});

globalStyle(`${prose} li`, {
  marginBottom: "0.375rem",
});

globalStyle(`${prose} li > p`, {
  marginBottom: "0.5rem",
});

globalStyle(`${prose} li > ul, ${prose} li > ol`, {
  marginTop: "0.5rem",
  marginBottom: "0.75rem",
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
