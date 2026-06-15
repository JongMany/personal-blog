import type { Metadata } from "next";

import { PostCard } from "@/widgets/post-card";
import { slugTail } from "@/shared/lib";

import { SubTabs } from "../_components/SubTabs";
import * as styles from "./page.css";

import { economy } from "#velite";

export const metadata: Metadata = {
  title: "경제",
  description: "투자와 경제에 대한 생각을 기록합니다.",
};

const posts = [...economy]
  .filter((p) => !p.draft)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((p) => ({
    slug: slugTail(p.slug),
    title: p.title,
    summary: p.summary,
    date: p.date,
    readingTime: p.readingTime,
  }));

export default function EconomyPage() {
  return (
    <div className={styles.wrapper}>
      <SubTabs active="economy" />
      <header className={styles.header}>
        <h1 className={styles.title}>경제</h1>
        <p className={styles.count}>총 {posts.length}편</p>
      </header>

      {posts.length === 0 ? (
        <p className={styles.empty}>아직 작성된 경제 글이 없어요.</p>
      ) : (
        <div className={styles.list}>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              summary={post.summary}
              date={post.date}
              readingTime={post.readingTime}
              basePath="/blog/economy"
              viewSlug={`economy-${post.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
