import Link from "next/link";

import { ViewCount } from "@/features/view-counter";

import * as styles from "./PostCard.css";

interface Props {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  readingTime: number;
}

export function PostCard({ slug, title, summary, date, category, readingTime }: Props) {
  return (
    <Link href={`/blog/${slug}`} className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.meta}>
        <span className={styles.metaItem}>{new Date(date).toLocaleDateString("ko-KR")}</span>
        <span className={styles.dot}>·</span>
        <span className={styles.metaItem}>{category}</span>
        <span className={styles.dot}>·</span>
        <span className={styles.metaItem}>약 {readingTime}분</span>
        <span className={styles.dot}>·</span>
        <ViewCount slug={slug} />
      </div>
    </Link>
  );
}
