"use client";

import { useCallback, useState } from "react";

export function useViewCount(slug: string) {
  const [views, setViews] = useState<number | null>(null);

  const fetchViews = useCallback(
    (method: "GET" | "POST" = "GET") =>
      fetch(`/api/views/${slug}`, { method })
        .then((r) => r.json())
        .then((d) => setViews(d.views as number)),
    [slug]
  );

  return { views, fetchViews };
}
