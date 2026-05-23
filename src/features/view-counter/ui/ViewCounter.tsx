"use client";

import { useEffect, useState } from "react";

import * as styles from "./ViewCounter.css";

interface Props {
  slug: string;
}

export function ViewCounter({ slug }: Props) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const sessionKey = `viewed:${slug}`;
    const alreadyViewed = sessionStorage.getItem(sessionKey);

    if (alreadyViewed) {
      fetch(`/api/views/${slug}`)
        .then((r) => r.json())
        .then((d) => setViews(d.views));
      return;
    }

    sessionStorage.setItem(sessionKey, "1");
    fetch(`/api/views/${slug}`, { method: "POST" })
      .then((r) => r.json())
      .then((d) => setViews(d.views));
  }, [slug]);

  if (views === null) return null;

  return <span className={styles.root}>{views.toLocaleString()} views</span>;
}
