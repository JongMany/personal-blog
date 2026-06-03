import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const empty = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.inkTextSubtle,
  paddingTop: "0.5rem",
});
