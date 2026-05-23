import Link from "next/link";

import { ThemeToggle } from "@/features/theme-toggle";
import { siteConfig } from "@/shared/config";

import * as styles from "./Header.css";

const navLinks = [
  { href: "/blog", label: "블로그" },
  { href: "/books", label: "책" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/resume", label: "이력서" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            {siteConfig.author.name}
          </Link>
          <nav className={styles.nav}>
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.navLink}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
