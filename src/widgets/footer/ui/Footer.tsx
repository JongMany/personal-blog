import Link from "next/link";

import { siteConfig } from "@/shared/config";
import { GithubIcon } from "@/shared/ui/icons/GithubIcon";
import { LinkedinIcon } from "@/shared/ui/icons/LinkedinIcon";

import * as styles from "./Footer.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.social}>
          <Link
            href={siteConfig.author.github}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </Link>
          <Link
            href={siteConfig.author.linkedin}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </Link>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {siteConfig.author.name}
        </p>
      </div>
    </footer>
  );
}
