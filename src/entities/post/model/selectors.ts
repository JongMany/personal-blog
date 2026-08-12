import { slugTail } from "@/shared/lib";

import type { EconomyListItem, PostListItem } from "./types";

import { economy, posts } from "#velite";

const byDateDesc = <T extends { date: string }>(a: T, b: T) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

const toPostListItem = (post: (typeof posts)[number]): PostListItem => ({
  slug: slugTail(post.slug),
  title: post.title,
  summary: post.summary,
  date: post.date,
  category: post.category,
  readingTime: post.readingTime,
});

const toEconomyListItem = (post: (typeof economy)[number]): EconomyListItem => ({
  slug: slugTail(post.slug),
  title: post.title,
  summary: post.summary,
  date: post.date,
  readingTime: post.readingTime,
});

export const getPublishedPostListItems = () =>
  [...posts]
    .filter((post) => !post.draft)
    .sort(byDateDesc)
    .map(toPostListItem);

export const getRecentPosts = (limit: number) => getPublishedPostListItems().slice(0, limit);

export const getPostStaticParams = () => posts.map((post) => ({ slug: slugTail(post.slug) }));

export const findPostBySlug = (slug: string) => posts.find((post) => slugTail(post.slug) === slug);

export const getPublishedEconomyListItems = () =>
  [...economy]
    .filter((post) => !post.draft)
    .sort(byDateDesc)
    .map(toEconomyListItem);

export const getEconomyStaticParams = () => economy.map((post) => ({ slug: slugTail(post.slug) }));

export const findEconomyBySlug = (slug: string) =>
  economy.find((post) => slugTail(post.slug) === slug);
