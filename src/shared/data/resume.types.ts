export type Keyword = {
  image?: string;
  description?: string;
};

export type Link = {
  label: string;
  url: string;
  type?: "portfolio" | "github" | "blog" | "demo";
};

export type Bullet = {
  text: string;
  links?: Link[];
  children?: Bullet[];
};

export type Section = {
  title: string;
  description?: string;
  links?: Link[];
  bullets: Bullet[];
};

export type Experience = {
  company: string;
  role: string;
  period: { start: string; end: string | null };
  overview?: string;
  techStack?: string[];
  keywords?: Record<string, Keyword>;
  sections?: Section[];
};

export type Education = {
  school: string;
  degree?: string;
  period: { start: string; end: string | null };
  gpa?: { major?: string; overall?: string };
  note?: string;
};

export type Activity = {
  title: string;
  period?: { start: string; end: string | null };
  bullets: Bullet[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Profile = {
  name: string;
  tagline: string;
  intro: string[];
  contact: {
    email: string;
    github?: string;
    linkedin?: string;
    blog?: string;
  };
  photoUrl?: string;
};

export type ResumeData = {
  profile: Profile;
  skills: SkillGroup[];
  experiences: Experience[];
  sideProjects?: Experience[];
  education: Education[];
  activities: Activity[];
};
