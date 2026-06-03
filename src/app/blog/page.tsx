import type { Metadata } from "next";

import { BlogListView } from "./_components/BlogListView";

import { posts } from "#velite";

export const metadata: Metadata = {
  title: "블로그",
  description: "개발 경험과 생각을 기록합니다.",
};

const sortedPosts = [...posts]
  .filter((p) => !p.draft)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((p) => ({
    slug: p.slug.split("/").at(-1) ?? "",
    title: p.title,
    summary: p.summary,
    date: p.date,
    category: p.category,
    readingTime: p.readingTime,
  }));

export default function BlogListPage() {
  return <BlogListView posts={sortedPosts} />;
}
