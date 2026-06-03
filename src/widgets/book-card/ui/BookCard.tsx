import Image from "next/image";
import Link from "next/link";

import * as styles from "./BookCard.css";

interface Props {
  slug: string;
  title: string;
  author: string;
  finishedAt: string;
  genre?: string;
  coverImage?: string;
}

export function BookCard({ slug, title, author, finishedAt, genre, coverImage }: Props) {
  const slugTail = slug.split("/").at(-1) ?? slug;
  return (
    <Link href={`/books/${slugTail}`} className={styles.root}>
      {coverImage && (
        <div className={styles.cover}>
          <Image src={coverImage} alt={title} fill className={styles.coverImg} sizes="44px" />
        </div>
      )}
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <div className={styles.bottom}>
          <time className={styles.date} dateTime={finishedAt}>
            {new Date(finishedAt).toLocaleDateString("ko-KR")}
          </time>
          {genre && (
            <>
              <span className={styles.dot}>·</span>
              <span className={styles.genre}>{genre}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
