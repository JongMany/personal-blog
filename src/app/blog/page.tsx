import type { Metadata } from "next";

import { PostCard } from "@/widgets/post-card";

import * as styles from "./page.css";

import { posts } from "#velite";

export const metadata: Metadata = {
  title: "블로그",
  description: "개발 경험과 생각을 기록합니다.",
};

const sortedPosts = [...posts]
  .filter((p) => !p.draft)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogListPage() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>블로그</h1>
        <p className={styles.count}>총 {sortedPosts.length}편</p>
      </header>
      <div className={styles.list}>
        {sortedPosts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug.split("/").pop()!}
            title={post.title}
            summary={post.summary}
            date={post.date}
            category={post.category}
            readingTime={post.readingTime}
          />
        ))}
      </div>
    </>
  );
}
