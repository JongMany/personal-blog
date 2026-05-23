import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "@/shared/config";

// 해: 아래에서 CCW로 올라오며 등장
const sunEnterKf = keyframes({
  from: {
    transform: "translateY(8px) rotate(90deg) scale(0.5)",
    opacity: 0,
  },
  to: {
    transform: "translateY(0) rotate(0deg) scale(1)",
    opacity: 1,
  },
});

// 달: 위에서 CCW로 내려오며 등장
const moonEnterKf = keyframes({
  from: {
    transform: "translateY(-8px) rotate(90deg) scale(0.5)",
    opacity: 0,
  },
  to: {
    transform: "translateY(0) rotate(0deg) scale(1)",
    opacity: 1,
  },
});

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  borderRadius: vars.radius.md,
  color: vars.color.inkTextLow,
  transition: `color ${vars.transition.fast}, background-color ${vars.transition.fast}`,
  selectors: {
    "&:hover": {
      color: vars.color.inkText,
      backgroundColor: vars.color.interactionHover,
    },
    "&:active": {
      backgroundColor: vars.color.interactionPressed,
    },
  },
});

export const sunEnter = style({
  display: "flex",
  animation: `${sunEnterKf} 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
});

export const moonEnter = style({
  display: "flex",
  animation: `${moonEnterKf} 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
});
