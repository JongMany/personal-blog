import { ExternalLink } from "lucide-react";

import type { Bullet, Keyword } from "@/shared/data/resume.types";

import * as styles from "./BulletList.css";
import { KeywordText } from "./KeywordText";

interface Props {
  bullets: Bullet[];
  keywords?: Record<string, Keyword>;
  depth?: number;
}

export function BulletList({ bullets, keywords, depth = 0 }: Props) {
  const listClass = depth > 0 ? styles.nestedList : styles.rootList;
  const itemClass = depth > 0 ? styles.nestedItem : styles.rootItem;

  return (
    <ul className={listClass}>
      {bullets.map((bullet) => (
        <li key={bullet.text} className={itemClass}>
          <KeywordText text={bullet.text} keywords={keywords} />
          {bullet.links && bullet.links.length > 0 && (
            <div className={styles.links}>
              {bullet.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.label}
                  <ExternalLink size={10} />
                </a>
              ))}
            </div>
          )}
          {bullet.children && bullet.children.length > 0 && (
            <BulletList bullets={bullet.children} keywords={keywords} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}
