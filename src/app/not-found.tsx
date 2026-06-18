import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

import * as styles from "./not-found.css";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
};

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/404.svg"
        alt="404 Not Found"
        width={420}
        height={280}
        className={styles.illustration}
        priority
      />
      <div className={styles.body}>
        <h1 className={styles.title}>페이지를 찾을 수 없습니다</h1>
        <p className={styles.description}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link href="/" className={styles.link}>
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
