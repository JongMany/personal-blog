import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { MDXContent } from "@/shared/ui/MDXContent";

import * as styles from "./page.css";

import { bits } from "#velite";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => bits.map((bit) => ({ slug: bit.slug.split("/").pop() }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const bit = bits.find((t) => t.slug.split("/").pop() === slug);
  if (!bit) return {};
  return { title: bit.title };
};

export default async function BitsDetailPage({ params }: Props) {
  const { slug } = await params;
  const bit = bits.find((t) => t.slug.split("/").pop() === slug);

  if (!bit) notFound();

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{bit.title}</h1>
        <div className={styles.meta}>
          <time className={styles.date} dateTime={bit.date}>
            {new Date(bit.date).toLocaleDateString("ko-KR")}
          </time>
          {bit.tags.length > 0 && (
            <>
              <span className={styles.dot}>·</span>
              <div className={styles.tags}>
                {bit.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>
      <div className={styles.prose}>
        <MDXContent code={bit.content} />
      </div>
    </article>
  );
}
