import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const root = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextSubtle,
});
