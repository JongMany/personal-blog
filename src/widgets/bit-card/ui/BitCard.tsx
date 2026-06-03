import Link from "next/link";

import { formatDate } from "@/shared/lib";
import { Tag, TagList } from "@/shared/ui/Tag";

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
          {formatDate(date)}
        </time>
        {tags.length > 0 && (
          <>
            <span className={styles.dot}>·</span>
            <TagList>
              {tags.map((tag) => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </TagList>
          </>
        )}
      </div>
    </Link>
  );
}
