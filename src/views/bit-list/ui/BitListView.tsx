import { BitCard } from "@/widgets/bit-card";
import type { BitDateGroup } from "@/entities/bit";
import { slugTail } from "@/shared/lib";

import * as styles from "./BitListView.css";

interface Props {
  groups: BitDateGroup[];
}

export function BitListView({ groups }: Props) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>단상</h1>
        <p className={styles.description}>배운 것들을 짧게 기록합니다.</p>
      </header>

      {groups.length === 0 ? (
        <p className={styles.empty}>아직 기록된 단상이 없어요.</p>
      ) : (
        <div className={styles.section}>
          {groups.map((group) => (
            <div key={group.date} className={styles.dateGroup}>
              <p className={styles.dateLabel}>{group.date}</p>
              {group.bits.map((bit) => (
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
