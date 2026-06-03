"use client";

import { type ReactNode, useEffect, useRef } from "react";

import { fade, observePageTransitions } from "@/shared/lib/page-transition";

export function PageTransition({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    return observePageTransitions(container, fade());
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {children}
    </div>
  );
}
