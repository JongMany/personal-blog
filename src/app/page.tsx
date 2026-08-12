import { HomeView } from "@/views/home";
import { getRecentBits } from "@/entities/bit";
import { getRecentBooks } from "@/entities/book";
import { getRecentPosts } from "@/entities/post";

export default function HomePage() {
  return (
    <HomeView
      recentPosts={getRecentPosts(3)}
      recentBits={getRecentBits(5)}
      recentBooks={getRecentBooks(3)}
    />
  );
}
