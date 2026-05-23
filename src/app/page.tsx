import Link from "next/link";

import { siteConfig } from "@/shared/config";
import { GithubIcon } from "@/shared/ui/icons/GithubIcon";
import { LinkedinIcon } from "@/shared/ui/icons/LinkedinIcon";

import * as styles from "./page.css";

export default function HomePage() {
  return (
    <>
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
        <p className={styles.empty}>아직 작성된 글이 없어요.</p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>읽은 책</h2>
          <Link href="/books" className={styles.sectionMore}>
            전체 보기 →
          </Link>
        </div>
        <p className={styles.empty}>아직 기록된 책이 없어요.</p>
      </section>
    </>
  );
}
