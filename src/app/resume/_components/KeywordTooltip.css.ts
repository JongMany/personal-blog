import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(4px) scale(0.97)" },
  to: { opacity: 1, transform: "translateY(0) scale(1)" },
});

export const trigger = style({
  display: "inline",
  fontWeight: vars.fontWeight.medium,
  color: vars.color.primary,
  backgroundColor: vars.color.primaryLow,
  borderRadius: vars.radius.xs,
  padding: "1px 5px",
  cursor: "help",
  borderBottom: `2px solid transparent`,
  transition: `background-color ${vars.transition.fast}, border-color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      backgroundColor: vars.color.primaryLowHover,
      borderBottomColor: vars.color.primary,
    },
  },
});

export const content = style({
  zIndex: vars.zIndex.dropdown,
  width: "22rem",
  backgroundColor: vars.color.paperFloating,
  border: `1px solid ${vars.color.divider2}`,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.lg,
  overflow: "hidden",
  selectors: {
    '&[data-state="delayed-open"]': {
      animationName: fadeIn,
      animationDuration: vars.transition.fast,
      animationFillMode: "forwards",
    },
  },
});

export const image = style({
  display: "block",
  width: "100% !important",
  height: "auto !important",
  maxHeight: "16rem",
  objectFit: "cover",
});

export const description = style({
  padding: `${vars.space["2"]} ${vars.space["3"]}`,
  fontSize: vars.fontSize.xs,
  color: vars.color.inkTextLow,
  lineHeight: vars.lineHeight.body,
  borderTop: `1px solid ${vars.color.divider2}`,
});
