"use client";

import { useCallback, useState } from "react";

export function useViewCount(slug: string) {
  const [views, setViews] = useState<number | null>(null);

  const fetchViews = useCallback(
    async (method: "GET" | "POST" = "GET") => {
      try {
        const response = await fetch(`/api/views/${slug}`, { method });
        if (!response.ok) {
          setViews(0);
          return;
        }

        const text = await response.text();
        if (!text) {
          setViews(0);
          return;
        }

        const data = JSON.parse(text) as { views?: unknown };
        setViews(typeof data.views === "number" ? data.views : 0);
      } catch {
        setViews(0);
      }
    },
    [slug]
  );

  return { views, fetchViews };
}
