import type { ReactNode } from "react";

import * as styles from "./Callout.css";

interface Props {
  children: ReactNode;
}

export function Callout({ children }: Props) {
  return <div className={styles.callout}>{children}</div>;
}
