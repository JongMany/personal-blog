import Link from "next/link";

import { BookCard } from "@/widgets/book-card";
import { PostCard } from "@/widgets/post-card";
import { siteConfig } from "@/shared/config";
import { GithubIcon } from "@/shared/ui/icons/GithubIcon";
import { LinkedinIcon } from "@/shared/ui/icons/LinkedinIcon";

import * as styles from "./page.css";

import { bits, books, posts } from "#velite";

const recentPosts = [...posts]
  .filter((p) => !p.draft)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const recentBits = [...bits]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 5);

const recentBooks = [...books]
  .sort((a, b) => new Date(b.finishedAt).getTime() - new Date(a.finishedAt).getTime())
  .slice(0, 3);

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.greeting}>안녕하세요</p>
        <h1 className={styles.name}>{siteConfig.author.name}</h1>
        <p className={styles.bio}>
          개발 경험과 생각, 읽은 책을 기록하는 공간입니다.
          <br />
          소프트웨어를 만들며 배운 것들을 나눕니다.
        </p>
        <div className={styles.social}>
          <Link
            href={siteConfig.author.github}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={14} />
            GitHub
          </Link>
          <Link
            href={siteConfig.author.linkedin}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={14} />
            LinkedIn
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>최근 글</h2>
          <Link href="/blog" className={styles.sectionMore}>
            전체 보기 →
          </Link>
        </div>
        {recentPosts.length === 0 ? (
          <p className={styles.empty}>아직 작성된 글이 없어요.</p>
        ) : (
          recentPosts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug.split("/").at(-1) ?? ""}
              title={post.title}
              summary={post.summary}
              date={post.date}
              category={post.category}
              readingTime={post.readingTime}
            />
          ))
        )}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>단상</h2>
          <Link href="/bits" className={styles.sectionMore}>
            전체 보기 →
          </Link>
        </div>
        {recentBits.length === 0 ? (
          <p className={styles.empty}>아직 기록된 단상이 없어요.</p>
        ) : (
          <div className={styles.timeline}>
            {recentBits.map((bit) => {
              const slugTail = bit.slug.split("/").at(-1) ?? "";
              return (
                <div key={bit.slug} className={styles.timelineItem}>
                  <Link href={`/bits/${slugTail}`} className={styles.timelineLink}>
                    <time className={styles.timelineDate} dateTime={bit.date}>
                      {new Date(bit.date).toLocaleDateString("ko-KR", {
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <div className={styles.timelineMeta}>
                      <p className={styles.timelineTitle}>{bit.title}</p>
                      {bit.tags.length > 0 && (
                        <div className={styles.timelineTags}>
                          {bit.tags.map((tag) => (
                            <span key={tag} className={styles.timelineTag}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {recentBooks.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>읽은 책</h2>
            <Link href="/books" className={styles.sectionMore}>
              전체 보기 →
            </Link>
          </div>
          {recentBooks.map((book) => (
            <BookCard
              key={book.slug}
              slug={book.slug}
              title={book.title}
              author={book.author}
              finishedAt={book.finishedAt}
              genre={book.genre}
              coverImage={book.coverImage}
            />
          ))}
        </section>
      )}
    </div>
  );
}
