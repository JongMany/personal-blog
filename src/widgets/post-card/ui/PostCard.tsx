import Link from "next/link";

import { ViewCount } from "@/features/view-counter";
import { formatDate } from "@/shared/lib";

import * as styles from "./PostCard.css";

interface Props {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category?: string;
  readingTime: number;
  basePath?: string;
  viewSlug?: string;
}

export function PostCard({
  slug,
  title,
  summary,
  date,
  category,
  readingTime,
  basePath = "/blog",
  viewSlug,
}: Props) {
  return (
    <Link href={`${basePath}/${slug}`} className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.meta}>
        <span className={styles.metaItem}>{formatDate(date)}</span>
        {category && (
          <>
            <span className={styles.dot}>·</span>
            <span className={styles.metaItem}>{category}</span>
          </>
        )}
        <span className={styles.dot}>·</span>
        <span className={styles.metaItem}>약 {readingTime}분</span>
        <span className={styles.dot}>·</span>
        <ViewCount slug={viewSlug ?? slug} />
      </div>
    </Link>
  );
}
