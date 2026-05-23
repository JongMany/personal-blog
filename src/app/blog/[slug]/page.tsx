import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { ViewTracker } from "@/features/view-counter";
import { MDXContent } from "@/shared/ui/MDXContent";

import * as styles from "./page.css";

import { posts } from "#velite";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  posts.map((post) => ({ slug: post.slug.split("/").pop() }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const post = posts.find((p) => p.slug.endsWith(slug));
  if (!post) return {};
  return { title: post.title, description: post.summary };
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug.endsWith(slug));

  if (!post) notFound();

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <p className={styles.category}>{post.category}</p>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <time className={styles.metaItem} dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("ko-KR")}
          </time>
          <span className={styles.dot}>·</span>
          <span className={styles.metaItem}>{post.readingTime}분 읽기</span>
          <span className={styles.dot}>·</span>
          <ViewTracker slug={slug} />
        </div>
      </header>
      <div className={styles.prose}>
        <MDXContent code={post.content} />
      </div>
    </article>
  );
}
