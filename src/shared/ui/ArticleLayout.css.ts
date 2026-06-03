import { style } from "@vanilla-extract/css";

import { layout } from "@/shared/config";

export const article = style({
  maxWidth: layout.contentWidth,
  margin: "0 auto",
  paddingTop: "2rem",
  paddingBottom: "5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
});
