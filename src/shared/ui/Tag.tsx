import type { ReactNode } from "react";

import * as styles from "./Tag.css";

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return <span className={styles.tag}>{children}</span>;
}

interface TagListProps {
  children: ReactNode;
}

export function TagList({ children }: TagListProps) {
  return <div className={styles.tagList}>{children}</div>;
}
