"use client";

import { useEffect, useState } from "react";

import * as styles from "./ViewCounter.css";

interface Props {
  slug: string;
}

export function ViewCount({ slug }: Props) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/views/${slug}`)
      .then((r) => r.json())
      .then((d) => setViews(d.views));
  }, [slug]);

  if (views === null) return null;

  return <span className={styles.root}>{views.toLocaleString()} views</span>;
}
