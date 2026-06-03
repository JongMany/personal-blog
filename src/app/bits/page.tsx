import type { Metadata } from "next";

import { BitCard } from "@/widgets/bit-card";
import { formatDate, slugTail } from "@/shared/lib";

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
  const key = formatDate(bit.date);
  if (!acc[key]) acc[key] = [];
  acc[key].push(bit);
  return acc;
}, {});

const dates = Object.keys(grouped);

export default function BitsPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>단상</h1>
        <p className={styles.description}>배운 것들을 짧게 기록합니다.</p>
      </header>

      {dates.length === 0 ? (
        <p className={styles.empty}>아직 기록된 단상이 없어요.</p>
      ) : (
        <div className={styles.section}>
          {dates.map((date) => (
            <div key={date} className={styles.dateGroup}>
              <p className={styles.dateLabel}>{date}</p>
              {grouped[date].map((bit) => (
                <BitCard
                  key={bit.slug}
                  slug={slugTail(bit.slug)}
                  title={bit.title}
                  date={bit.date}
                  tags={bit.tags}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
