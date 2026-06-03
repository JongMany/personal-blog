export interface TransitionConfig {
  in(el: HTMLElement): void;
  out(el: HTMLElement, onDone: () => void): void;
}
