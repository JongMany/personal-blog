import { BookCard } from "@/widgets/book-card";
import type { BookYearGroup } from "@/entities/book";

import * as styles from "./BookListView.css";

interface Props {
  count: number;
  groups: BookYearGroup[];
}

export function BookListView({ count, groups }: Props) {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>읽은 책</h1>
        <p className={styles.count}>총 {count}권</p>
      </header>

      {groups.length === 0 && <p className={styles.empty}>아직 기록된 책이 없어요.</p>}

      {groups.map((group) => (
        <section key={group.year} className={styles.yearGroup}>
          <p className={styles.yearLabel}>
            {group.year}년 · {group.books.length}권
          </p>
          {group.books.map((book) => (
            <BookCard
              key={book.slug}
              slug={book.slug}
              title={book.title}
              author={book.author}
              finishedAt={book.finishedAt}
              genre={book.genre}
              coverImage={book.coverImage}
            />
          ))}
        </section>
      ))}
    </div>
  );
}
