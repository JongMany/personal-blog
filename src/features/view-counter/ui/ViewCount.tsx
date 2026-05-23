"use client";

import { useEffect } from "react";

import { useViewCount } from "../model/useViewCount";
import * as styles from "./ViewCount.css";

interface Props {
  slug: string;
}

export function ViewCount({ slug }: Props) {
  const { views, fetchViews } = useViewCount(slug);

  useEffect(() => {
    fetchViews();
  }, [fetchViews]);

  if (views === null) return null;

  return <span className={styles.root}>{views.toLocaleString()} views</span>;
}
