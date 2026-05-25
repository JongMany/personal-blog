import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

export const rootList = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: vars.space["2"],
  marginTop: vars.space["2"],
});

export const nestedList = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: vars.space["1"],
  marginTop: vars.space["2"],
  paddingLeft: vars.space["2"],
});

const itemBase = {
  position: "relative" as const,
  paddingLeft: "1.25rem",
  fontSize: vars.fontSize.sm,
  lineHeight: vars.lineHeight.loose,
  "::before": {
    content: '""',
    position: "absolute" as const,
    left: "2px",
    top: "0.48em",
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    backgroundColor: vars.color.inkTextSubtle,
    flexShrink: 0,
  },
};

export const rootItem = style({
  ...itemBase,
  color: vars.color.inkText,
});

export const nestedItem = style({
  ...itemBase,
  color: vars.color.inkTextLow,
  "::before": {
    ...itemBase["::before"],
    width: "4px",
    height: "4px",
    backgroundColor: vars.color.inkTextSubtle,
    opacity: 0.6,
  },
});

export const links = style({
  display: "inline-flex",
  flexWrap: "wrap",
  gap: vars.space["2"],
  marginTop: vars.space["1"],
});

export const link = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "3px",
  fontSize: vars.fontSize.xs,
  color: vars.color.primary,
  opacity: 0.7,
  transition: `opacity ${vars.transition.fast}`,
  selectors: {
    "&:hover": { opacity: 1 },
  },
});
