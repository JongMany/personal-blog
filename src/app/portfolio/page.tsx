import type { Metadata } from "next";

import { PortfolioClient } from "./_components/PortfolioClient";
import * as styles from "./page.css";

import { projects } from "#velite";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "진행했던 프로젝트들을 소개합니다.",
};

const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

export default function PortfolioPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.pageHeader}>
        <p className={styles.label}>Portfolio</p>
        <h1 className={styles.title}>프로젝트</h1>
        <p className={styles.description}>
          개발하면서 경험하고 배운 것들을 담은 프로젝트 모음입니다.
        </p>
      </header>

      <p className={styles.sectionTitle}>Projects · {sortedProjects.length}</p>

      <PortfolioClient projects={sortedProjects} />
    </div>
  );
}
