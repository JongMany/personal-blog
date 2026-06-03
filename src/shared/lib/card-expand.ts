export const expandIn = (el: HTMLElement, from: DOMRect): Animation => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const sx = from.width / vw;
  const sy = from.height / vh;
  const tx = from.left + from.width / 2 - vw / 2;
  const ty = from.top + from.height / 2 - vh / 2;

  return el.animate(
    [
      {
        transform: `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})`,
        opacity: "0.8",
        borderRadius: "12px",
      },
      { transform: "none", opacity: "1", borderRadius: "0px" },
    ],
    { duration: 420, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" }
  );
};

export const expandOut = (el: HTMLElement, to: DOMRect): Animation => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const sx = to.width / vw;
  const sy = to.height / vh;
  const tx = to.left + to.width / 2 - vw / 2;
  const ty = to.top + to.height / 2 - vh / 2;

  return el.animate(
    [
      { transform: "none", opacity: "1", borderRadius: "0px" },
      {
        transform: `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})`,
        opacity: "0.8",
        borderRadius: "12px",
      },
    ],
    { duration: 320, easing: "cubic-bezier(0.4, 0, 0.8, 0.6)", fill: "forwards" }
  );
};
