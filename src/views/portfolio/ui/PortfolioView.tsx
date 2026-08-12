"use client";

import { type MouseEvent, useCallback, useState } from "react";

import { ProjectCard } from "@/widgets/project-card";
import { ProjectDetailDialog } from "@/features/project-detail-dialog";
import { TagFilter } from "@/features/tag-filter";
import { slugTail } from "@/shared/lib";

import * as styles from "./PortfolioView.css";

import type { Project } from "#velite";

interface Props {
  projects: Project[];
}

export const PortfolioView = ({ projects }: Props) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const tags = [...new Set(projects.flatMap((project) => project.tags))].sort();
  const filtered = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects;

  const handleCardClick = useCallback((project: Project, e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSelectedProject(project);
    setCardRect(rect);
    setDialogOpen(true);
    window.history.pushState(
      { portfolioSlug: slugTail(project.slug) },
      "",
      `/portfolio/${slugTail(project.slug)}`
    );
  }, []);

  const handleClose = useCallback(() => {
    setDialogOpen(false);
    setSelectedProject(null);
    setCardRect(null);
    window.history.replaceState({}, "", "/portfolio");
  }, []);

  return (
    <div className={styles.wrapper}>
      <header className={styles.pageHeader}>
        <p className={styles.label}>Portfolio</p>
        <h1 className={styles.title}>프로젝트</h1>
        <p className={styles.description}>
          개발하면서 경험하고 배운 것들을 담은 프로젝트 모음입니다.
        </p>
      </header>

      <p className={styles.sectionTitle}>Projects · {projects.length}</p>

      <TagFilter tags={tags} active={activeTag} onChange={setActiveTag} />

      <div className={styles.grid}>
        {filtered.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            summary={project.summary}
            tags={project.tags}
            color={project.color}
            period={project.period}
            thumbnail={project.thumbnail}
            onClick={(e) => handleCardClick(project, e)}
          />
        ))}
      </div>

      {selectedProject && cardRect && (
        <ProjectDetailDialog
          project={selectedProject}
          cardRect={cardRect}
          open={dialogOpen}
          onClose={handleClose}
        />
      )}
    </div>
  );
};
