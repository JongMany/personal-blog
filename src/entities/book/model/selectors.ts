import { slugTail } from "@/shared/lib";

import type { BookYearGroup } from "./types";

import { books } from "#velite";

export const getSortedBooks = () =>
  [...books].sort((a, b) => new Date(b.finishedAt).getTime() - new Date(a.finishedAt).getTime());

export const getRecentBooks = (limit: number) => getSortedBooks().slice(0, limit);

export const getBookYearGroups = (): BookYearGroup[] => {
  const grouped = getSortedBooks().reduce<Record<string, typeof books>>((acc, book) => {
    const year = new Date(book.finishedAt).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(book);
    return acc;
  }, {});

  return Object.keys(grouped)
    .sort((a, b) => Number(b) - Number(a))
    .map((year) => ({ year, books: grouped[year] }));
};

export const getBookStaticParams = () => books.map((book) => ({ slug: slugTail(book.slug) }));

export const findBookBySlug = (slug: string) => books.find((book) => slugTail(book.slug) === slug);
