import type { TransitionConfig } from "../types";

export const fade = (durationMs = 200): TransitionConfig => ({
  in(el) {
    el.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: durationMs,
      easing: "ease",
    });
  },
  out(el, onDone) {
    el.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: durationMs,
      easing: "ease",
      fill: "forwards",
    }).addEventListener("finish", onDone);
  },
});
