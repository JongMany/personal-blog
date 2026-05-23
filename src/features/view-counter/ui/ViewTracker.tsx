"use client";

import { useEffect } from "react";

import { useViewCount } from "../model/useViewCount";
import * as styles from "./ViewCount.css";

interface Props {
  slug: string;
}

export function ViewTracker({ slug }: Props) {
  const { views, fetchViews } = useViewCount(slug);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      fetchViews();
      return;
    }

    const sessionKey = `viewed:${slug}`;
    if (sessionStorage.getItem(sessionKey)) {
      fetchViews();
      return;
    }
    sessionStorage.setItem(sessionKey, "1");
    fetchViews("POST");
  }, [slug, fetchViews]);

  if (views === null) return null;

  return <span className={styles.root}>{views.toLocaleString()} views</span>;
}
