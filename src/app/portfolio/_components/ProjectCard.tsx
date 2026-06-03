import type { MouseEvent } from "react";

import { Tag, TagList } from "@/shared/ui/Tag";

import * as styles from "./ProjectCard.css";

interface Props {
  title: string;
  summary: string;
  tags: string[];
  color?: string;
  period?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ProjectCard = ({ title, summary, tags, color, period, onClick }: Props) => (
  <button className={styles.card} onClick={onClick}>
    <div
      className={styles.accent}
      style={
        color
          ? {
              background: `linear-gradient(135deg, ${color}33 0%, ${color}11 100%)`,
              borderBottom: `2px solid ${color}44`,
            }
          : undefined
      }
    />
    <div className={styles.body}>
      <p className={styles.title}>{title}</p>
      {tags.length > 0 && (
        <TagList>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
      )}
      <p className={styles.summary}>{summary}</p>
    </div>
    <div className={styles.footer}>
      {period && <span className={styles.period}>{period}</span>}
      <span className={styles.arrow}>→</span>
    </div>
  </button>
);
