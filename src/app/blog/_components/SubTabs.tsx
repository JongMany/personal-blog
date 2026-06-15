import Link from "next/link";

import { cn } from "@/shared/lib";

import * as styles from "./SubTabs.css";

const tabs = [
  { href: "/blog", label: "블로그", key: "blog" },
  { href: "/blog/economy", label: "경제", key: "economy" },
] as const;

interface Props {
  active: "blog" | "economy";
}

export function SubTabs({ active }: Props) {
  return (
    <nav className={styles.bar}>
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          href={tab.href}
          className={cn(styles.tab, active === tab.key ? styles.tabActive : "")}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
