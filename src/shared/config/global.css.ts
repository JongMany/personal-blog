import { globalFontFace, globalStyle } from "@vanilla-extract/css";

import { darkTheme, lightTheme, vars } from "./theme.css";

globalFontFace("Pretendard", {
  src: "url('/fonts/PretendardVariable.woff2') format('woff2')",
  fontWeight: "100 900",
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html", {
  fontFamily: vars.font.sans,
  fontSize: "16px",
  WebkitTextSizeAdjust: "100%",
  scrollBehavior: "smooth",
});

globalStyle("body", {
  backgroundColor: vars.color.paperDefault,
  color: vars.color.inkText,
  lineHeight: vars.lineHeight.body,
  transition: `background-color ${vars.transition.base}, color ${vars.transition.base}`,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});

globalStyle("code, pre", {
  fontFamily: vars.font.mono,
});

globalStyle("button", {
  cursor: "pointer",
  background: "none",
  border: "none",
  font: "inherit",
});

globalStyle("hr", {
  border: "none",
  borderTop: `1px solid ${vars.color.divider2}`,
});

// rehype-pretty-code: 테마에 맞는 코드 블록만 표시
globalStyle(`.${lightTheme} [data-theme="dark"]`, { display: "none" });
globalStyle(`.${darkTheme} [data-theme="light"]`, { display: "none" });
