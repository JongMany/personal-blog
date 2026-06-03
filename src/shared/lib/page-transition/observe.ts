import type { TransitionConfig } from "./types";

const EXIT_ATTR = "data-page-exit-clone";

export function observePageTransitions(
  container: HTMLElement,
  config: TransitionConfig
): () => void {
  let currentExitEl: HTMLElement | null = null;

  const observer = new MutationObserver((mutations) => {
    const removed: HTMLElement[] = [];
    const added: HTMLElement[] = [];

    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      mutation.removedNodes.forEach((n) => {
        if (n instanceof HTMLElement && !n.hasAttribute(EXIT_ATTR)) removed.push(n);
      });
      mutation.addedNodes.forEach((n) => {
        if (n instanceof HTMLElement && !n.hasAttribute(EXIT_ATTR)) added.push(n);
      });
    }

    if (removed.length === 0 || added.length === 0) return;

    currentExitEl?.remove();

    const exitWrapper = document.createElement("div");
    exitWrapper.setAttribute(EXIT_ATTR, "");
    exitWrapper.style.cssText = "position:absolute;top:0;left:0;width:100%;pointer-events:none;";
    removed.forEach((node) => exitWrapper.appendChild(node.cloneNode(true)));
    container.appendChild(exitWrapper);
    currentExitEl = exitWrapper;

    config.out(exitWrapper, () => {
      exitWrapper.remove();
      if (currentExitEl === exitWrapper) currentExitEl = null;
    });

    added.forEach((node) => config.in(node));
  });

  observer.observe(container, { childList: true });
  return () => observer.disconnect();
}
