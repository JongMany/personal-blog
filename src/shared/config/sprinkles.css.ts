import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { vars } from "./theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline", "inline-flex", "grid"],
    flexDirection: ["row", "column"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
    ],
    flexWrap: ["nowrap", "wrap"],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    width: { full: "100%", auto: "auto" },
    maxWidth: {
      prose: "65ch",
      container: "72rem",
      full: "100%",
    },
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    lineHeight: vars.lineHeight,
    letterSpacing: vars.letterSpacing,
    textAlign: ["left", "center", "right"],
  },
  shorthands: {
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    placeItems: ["alignItems", "justifyContent"],
  },
});

const colorProperties = defineProperties({
  properties: {
    color: vars.color,
    background: vars.color,
    borderColor: vars.color,
  },
});

const borderProperties = defineProperties({
  properties: {
    borderRadius: vars.radius,
  },
});

const shadowProperties = defineProperties({
  properties: {
    boxShadow: vars.shadow,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  borderProperties,
  shadowProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
