import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { findBookBySlug, getBookStaticParams } from "@/entities/book";
import { formatDate } from "@/shared/lib";
import { ArticleLayout } from "@/shared/ui/ArticleLayout";
import { MDXContent } from "@/shared/ui/MDXContent";
import { Tag, TagList } from "@/shared/ui/Tag";

import * as styles from "./page.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = getBookStaticParams;

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const book = findBookBySlug(slug);
  if (!book) return {};
  return { title: `${book.title} — ${book.author}` };
};

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = findBookBySlug(slug);

  if (!book) notFound();

  return (
    <ArticleLayout
      header={
        <header className={styles.header}>
          {book.genre && <p className={styles.genre}>{book.genre}</p>}
          <h1 className={styles.title}>{book.title}</h1>
          <p className={styles.author}>{book.author}</p>
          <div className={styles.meta}>
            <time className={styles.metaItem} dateTime={book.finishedAt}>
              {formatDate(book.finishedAt)} 완독
            </time>
            {book.publisher && (
              <>
                <span className={styles.dot}>·</span>
                <span className={styles.metaItem}>{book.publisher}</span>
              </>
            )}
          </div>
          {book.tags.length > 0 && (
            <TagList>
              {book.tags.map((tag) => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </TagList>
          )}
        </header>
      }
    >
      <MDXContent code={book.content} />
    </ArticleLayout>
  );
}
