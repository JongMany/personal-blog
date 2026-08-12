import { BlogTabs } from "@/widgets/blog-tabs";
import { PostCard } from "@/widgets/post-card";
import type { EconomyListItem } from "@/entities/post";

import * as styles from "./EconomyListView.css";

interface Props {
  posts: EconomyListItem[];
}

export function EconomyListView({ posts }: Props) {
  return (
    <div className={styles.wrapper}>
      <BlogTabs active="economy" />
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
