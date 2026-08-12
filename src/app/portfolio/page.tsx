import type { Metadata } from "next";

import { PortfolioView } from "@/views/portfolio";
import { getSortedProjects } from "@/entities/project";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "진행했던 프로젝트들을 소개합니다.",
};

export default function PortfolioPage() {
  return <PortfolioView projects={getSortedProjects()} />;
}
