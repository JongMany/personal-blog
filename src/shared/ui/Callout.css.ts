import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const callout = style({
  borderLeft: `3px solid ${vars.color.primary}`,
  background: vars.color.primaryLow,
  borderRadius: vars.radius.sm,
  padding: "0.875rem 1.25rem",
  margin: "1.5rem 0",
});

// 박스 내부 첫/마지막 요소의 바깥 여백만 제거해 위아래 패딩을 일정하게 유지.
// (:first-child/:last-child 의사 클래스로 prose의 p 마진보다 우선)
globalStyle(`${callout} > :first-child`, { marginTop: 0 });
globalStyle(`${callout} > :last-child`, { marginBottom: 0 });
