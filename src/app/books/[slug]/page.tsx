import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { MDXContent } from "@/shared/ui/MDXContent";

import * as styles from "./page.css";

import { books } from "#velite";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  books.map((book) => ({ slug: book.slug.split("/").pop() }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const book = books.find((b) => b.slug.split("/").pop() === slug);
  if (!book) return {};
  return { title: `${book.title} — ${book.author}` };
};

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = books.find((b) => b.slug.split("/").pop() === slug);

  if (!book) notFound();

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        {book.genre && <p className={styles.genre}>{book.genre}</p>}
        <h1 className={styles.title}>{book.title}</h1>
        <p className={styles.author}>{book.author}</p>
        <div className={styles.meta}>
          <time className={styles.metaItem} dateTime={book.finishedAt}>
            {new Date(book.finishedAt).toLocaleDateString("ko-KR")} 완독
          </time>
          {book.publisher && (
            <>
              <span className={styles.dot}>·</span>
              <span className={styles.metaItem}>{book.publisher}</span>
            </>
          )}
        </div>
        {book.tags.length > 0 && (
          <div className={styles.tags}>
            {book.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className={styles.prose}>
        <MDXContent code={book.content} />
      </div>
    </article>
  );
}
