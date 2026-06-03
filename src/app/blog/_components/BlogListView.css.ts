import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const wrapper = style({
  maxWidth: "54rem",
  margin: "0 auto",
  paddingTop: "2rem",
  paddingBottom: "4rem",
});

export const header = style({
  paddingBottom: "2rem",
});

export const title = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.inkText,
  letterSpacing: vars.letterSpacing.tight,
  marginBottom: "0.375rem",
});

export const count = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
});

/* 데스크톱 기본: 가로 flex */
export const body = style({
  display: "flex",
  flexDirection: "row",
  gap: "3rem",
  alignItems: "flex-start",
});

/* 모바일: 세로 flex (JS로 토글) */
export const bodyMobile = style({
  flexDirection: "column",
  gap: 0,
});

export const list = style({
  flex: 1,
  minWidth: 0,
  transition: `opacity 160ms ease`,
});

export const listExiting = style({
  opacity: 0,
});

export const empty = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
  paddingTop: "0.5rem",
});

/* 데스크톱 사이드바: 세로 목록 */
export const sidebar = style({
  flexShrink: 0,
  width: "6rem",
  display: "flex",
  flexDirection: "column",
  gap: 0,
  overflow: "hidden",
  scrollbarWidth: "none",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

/* 모바일 사이드바: 가로 탭 바 (JS로 토글) */
export const sidebarMobile = style({
  position: "relative",
  width: "100%",
  flexDirection: "row",
  overflow: "visible",
  overflowX: "auto",
  marginBottom: "1rem",
  order: -1,
});

export const indicator = style({
  display: "none",
  selectors: {
    [`.${sidebarMobile} &`]: {
      display: "block",
      position: "absolute",
      bottom: 0,
      height: "2px",
      backgroundColor: vars.color.inkText,
      transition: "left 250ms ease, width 250ms ease",
      pointerEvents: "none",
    },
  },
});

export const categoryBtn = style({
  display: "flex",
  alignItems: "center",
  padding: "0.375rem 0.5rem",
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
  transition: `color ${vars.transition.fast}`,
  cursor: "pointer",
  whiteSpace: "nowrap",
  selectors: {
    "&:hover": {
      color: vars.color.inkText,
    },
    [`.${sidebarMobile} &`]: {
      padding: "0.75rem 1rem",
    },
  },
});

export const categoryBtnActive = style({
  color: vars.color.inkText,
  fontWeight: vars.fontWeight.semibold,
});
