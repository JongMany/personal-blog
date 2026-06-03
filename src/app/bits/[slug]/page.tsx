import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { formatDate, slugTail } from "@/shared/lib";
import { ArticleLayout } from "@/shared/ui/ArticleLayout";
import { MDXContent } from "@/shared/ui/MDXContent";
import { Tag, TagList } from "@/shared/ui/Tag";

import * as styles from "./page.css";

import { bits } from "#velite";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => bits.map((bit) => ({ slug: slugTail(bit.slug) }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const bit = bits.find((t) => slugTail(t.slug) === slug);
  if (!bit) return {};
  return { title: bit.title };
};

export default async function BitsDetailPage({ params }: Props) {
  const { slug } = await params;
  const bit = bits.find((t) => slugTail(t.slug) === slug);

  if (!bit) notFound();

  return (
    <ArticleLayout
      header={
        <header className={styles.header}>
          <h1 className={styles.title}>{bit.title}</h1>
          <div className={styles.meta}>
            <time className={styles.date} dateTime={bit.date}>
              {formatDate(bit.date)}
            </time>
            {bit.tags.length > 0 && (
              <>
                <span className={styles.dot}>·</span>
                <TagList>
                  {bit.tags.map((tag) => (
                    <Tag key={tag}>#{tag}</Tag>
                  ))}
                </TagList>
              </>
            )}
          </div>
        </header>
      }
    >
      <MDXContent code={bit.content} />
    </ArticleLayout>
  );
}
