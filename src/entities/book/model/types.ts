import type { Book } from "#velite";

export interface BookYearGroup {
  year: string;
  books: Book[];
}
