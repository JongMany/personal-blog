import type { Metadata } from "next";

import { BitCard } from "@/widgets/bit-card";

import * as styles from "./page.css";

import { bits } from "#velite";

export const metadata: Metadata = {
  title: "단상",
  description: "배운 것들을 짧게 기록합니다.",
};

const sortedBits = [...bits].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const grouped = sortedBits.reduce<Record<string, typeof sortedBits>>((acc, bit) => {
  const key = new Date(bit.date).toLocaleDateString("ko-KR");
  if (!acc[key]) acc[key] = [];
  acc[key].push(bit);
  return acc;
}, {});

export default function BitsListPage() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>단상</h1>
        <p className={styles.description}>배운 것들을 짧게 기록합니다. 총 {bits.length}개</p>
      </header>
      <div className={styles.section}>
        {Object.entries(grouped).map(([date, items]) => (
          <div key={date} className={styles.dateGroup}>
            <p className={styles.dateLabel}>{date}</p>
            {items.map((bit) => (
              <BitCard
                key={bit.slug}
                slug={bit.slug.split("/").pop()!}
                title={bit.title}
                date={bit.date}
                tags={bit.tags}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
