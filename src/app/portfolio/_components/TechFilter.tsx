import { cn } from "@/shared/lib";

import * as styles from "./TechFilter.css";

interface Props {
  tags: string[];
  active: string | null;
  onChange: (tag: string | null) => void;
}

export const TechFilter = ({ tags, active, onChange }: Props) => (
  <div className={styles.bar}>
    <button
      className={cn(styles.chip, active === null ? styles.activeChip : "")}
      onClick={() => onChange(null)}
    >
      전체
    </button>
    {tags.map((tag) => (
      <button
        key={tag}
        className={cn(styles.chip, active === tag ? styles.activeChip : "")}
        onClick={() => onChange(tag)}
      >
        {tag}
      </button>
    ))}
  </div>
);
