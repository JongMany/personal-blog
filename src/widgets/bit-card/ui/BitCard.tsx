import Link from "next/link";

import * as styles from "./BitCard.css";

interface Props {
  slug: string;
  title: string;
  date: string;
  tags: string[];
}

export function BitCard({ slug, title, date, tags }: Props) {
  return (
    <Link href={`/bits/${slug}`} className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.meta}>
        <time className={styles.date} dateTime={date}>
          {new Date(date).toLocaleDateString("ko-KR")}
        </time>
        {tags.length > 0 && (
          <>
            <span className={styles.dot}>·</span>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
