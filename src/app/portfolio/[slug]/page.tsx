import Link from "next/link";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { findProjectBySlug, getProjectStaticParams } from "@/entities/project";
import { GithubIcon } from "@/shared/ui/icons/GithubIcon";
import { MDXContent } from "@/shared/ui/MDXContent";
import { Tag, TagList } from "@/shared/ui/Tag";

import * as styles from "./page.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = getProjectStaticParams;

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className={styles.article}>
      <Link href="/portfolio" className={styles.back}>
        ← 포트폴리오
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          {project.tags.length > 0 && (
            <TagList>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          )}
          {project.period && <p className={styles.period}>{project.period}</p>}
          {(project.github || project.demo) && (
            <div className={styles.links}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                >
                  ↗ Demo
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      <div className={styles.prose}>
        <MDXContent code={project.content} />
      </div>
    </article>
  );
}
