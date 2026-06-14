"use client";

import { type MouseEvent, useCallback, useEffect, useMemo, useState } from "react";

import { slugTail } from "@/shared/lib";

import * as styles from "../page.css";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { TechFilter } from "./TechFilter";

interface Project {
  title: string;
  summary: string;
  tags: string[];
  github?: string;
  demo?: string;
  thumbnail?: string;
  color?: string;
  period?: string;
  order: number;
  slug: string;
  content: string;
}

interface Props {
  projects: Project[];
}

export const PortfolioClient = ({ projects }: Props) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const allTags = useMemo(() => [...new Set(projects.flatMap((p) => p.tags))].sort(), [projects]);

  const filtered = useMemo(
    () => (activeTag ? projects.filter((p) => p.tags.includes(activeTag)) : projects),
    [projects, activeTag]
  );

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

  // 브라우저 뒤로 가기로 dialog를 닫을 때 (animation 없이 즉시 닫힘)
  useEffect(() => {
    const handlePop = () => {
      if (!window.location.pathname.startsWith("/portfolio/")) {
        setDialogOpen(false);
        setSelectedProject(null);
        setCardRect(null);
      }
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  return (
    <>
      <TechFilter tags={allTags} active={activeTag} onChange={setActiveTag} />

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
        <ProjectDetail
          project={selectedProject}
          cardRect={cardRect}
          open={dialogOpen}
          onClose={handleClose}
        />
      )}
    </>
  );
};
