import type { Metadata } from "next";

import { BookListView } from "@/views/book-list";
import { getBookYearGroups, getSortedBooks } from "@/entities/book";

export const metadata: Metadata = {
  title: "읽은 책",
  description: "읽은 책과 독서 메모를 기록합니다.",
};

export default function BooksPage() {
  return <BookListView count={getSortedBooks().length} groups={getBookYearGroups()} />;
}
