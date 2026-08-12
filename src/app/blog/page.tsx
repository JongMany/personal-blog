import type { Metadata } from "next";

import { BlogListView } from "@/views/blog-list";
import { getPublishedPostListItems } from "@/entities/post";

export const metadata: Metadata = {
  title: "블로그",
  description: "개발 경험과 생각을 기록합니다.",
};

export default function BlogListPage() {
  return <BlogListView posts={getPublishedPostListItems()} />;
}
