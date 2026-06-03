import type { ReactNode } from "react";

import * as styles from "./ArticleLayout.css";
import { prose } from "./prose.css";

interface Props {
  header: ReactNode;
  children: ReactNode;
}

export function ArticleLayout({ header, children }: Props) {
  return (
    <article className={styles.article}>
      {header}
      <div className={prose}>{children}</div>
    </article>
  );
}
