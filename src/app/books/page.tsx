import type { Metadata } from "next";

import { BookCard } from "@/widgets/book-card";

import * as styles from "./page.css";

import { books } from "#velite";

export const metadata: Metadata = {
  title: "읽은 책",
  description: "읽은 책과 독서 메모를 기록합니다.",
};

const sortedBooks = [...books].sort(
  (a, b) => new Date(b.finishedAt).getTime() - new Date(a.finishedAt).getTime()
);

const grouped = sortedBooks.reduce<Record<string, typeof sortedBooks>>((acc, book) => {
  const year = new Date(book.finishedAt).getFullYear().toString();
  if (!acc[year]) acc[year] = [];
  acc[year].push(book);
  return acc;
}, {});

const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

export default function BooksPage() {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>읽은 책</h1>
        <p className={styles.count}>총 {books.length}권</p>
      </header>

      {years.length === 0 && <p className={styles.empty}>아직 기록된 책이 없어요.</p>}

      {years.map((year) => (
        <section key={year} className={styles.yearGroup}>
          <p className={styles.yearLabel}>
            {year}년 · {grouped[year].length}권
          </p>
          {grouped[year].map((book) => (
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
