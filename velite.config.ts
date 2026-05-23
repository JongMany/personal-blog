import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      date: s.isodate(),
      category: s.enum(["개발", "회고", "기록", "경제"]),
      tags: s.array(s.string()).default([]),
      summary: s.string().max(300),
      draft: s.boolean().default(false),
      coverImage: s.string().optional(),
      slug: s.path(),
      raw: s.raw(),
      content: s.mdx(),
      toc: s.toc(),
    })
    .transform((data) => ({
      ...data,
      readingTime: Math.ceil(data.raw.split(/\s+/).length / 200),
    })),
});

const books = defineCollection({
  name: "Book",
  pattern: "books/**/*.mdx",
  schema: s.object({
    title: s.string(),
    author: s.string(),
    publisher: s.string().optional(),
    finishedAt: s.isodate(),
    rating: s.number().min(1).max(5),
    coverImage: s.string().optional(),
    genre: s.string().optional(),
    tags: s.array(s.string()).default([]),
    slug: s.path(),
    content: s.mdx(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:8].[ext]",
    clean: true,
  },
  collections: { posts, books },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { theme: { dark: "github-dark", light: "github-light" } }]],
    remarkPlugins: [],
  },
});
