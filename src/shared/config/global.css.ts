import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import { vars } from "./theme.css";

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
  backgroundColor: vars.color.background,
  color: vars.color.textPrimary,
  lineHeight: vars.lineHeight.normal,
  transition: `background-color ${vars.transition.base}, color ${vars.transition.base}`,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
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
