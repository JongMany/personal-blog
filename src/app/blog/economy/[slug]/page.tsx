import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { ViewTracker } from "@/features/view-counter";
import { formatDate, slugTail } from "@/shared/lib";
import { ArticleLayout } from "@/shared/ui/ArticleLayout";
import { MDXContent } from "@/shared/ui/MDXContent";

import * as styles from "../../[slug]/page.css";

import { economy } from "#velite";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => economy.map((post) => ({ slug: slugTail(post.slug) }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const post = economy.find((p) => slugTail(p.slug) === slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
};

export default async function EconomyDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = economy.find((p) => slugTail(p.slug) === slug);

  if (!post) notFound();

  return (
    <ArticleLayout
      header={
        <header className={styles.header}>
          <p className={styles.category}>경제</p>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <time className={styles.metaItem} dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span className={styles.dot}>·</span>
            <span className={styles.metaItem}>{post.readingTime}분 읽기</span>
            <span className={styles.dot}>·</span>
            <ViewTracker slug={`economy-${slug}`} />
          </div>
        </header>
      }
    >
      <MDXContent code={post.content} />
    </ArticleLayout>
  );
}
