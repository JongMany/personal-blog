import { slugTail } from "@/shared/lib";

import { projects } from "#velite";

export const getSortedProjects = () => [...projects].sort((a, b) => a.order - b.order);

export const getProjectTags = (items: typeof projects) =>
  [...new Set(items.flatMap((project) => project.tags))].sort();

export const filterProjectsByTag = (items: typeof projects, tag: string | null) =>
  tag ? items.filter((project) => project.tags.includes(tag)) : items;

export const getProjectStaticParams = () =>
  projects.map((project) => ({ slug: slugTail(project.slug) }));

export const findProjectBySlug = (slug: string) =>
  projects.find((project) => slugTail(project.slug) === slug);
