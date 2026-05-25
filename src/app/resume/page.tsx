import { ExternalLink, Link, Mail } from "lucide-react";

import resumeJson from "@/shared/data/resume.json";
import type { Experience, ResumeData, Section } from "@/shared/data/resume.types";

import { BulletList } from "./_components/BulletList";
import * as styles from "./page.css";

const data = resumeJson as unknown as ResumeData;

const formatPeriod = (period: { start: string; end: string | null }) => {
  const fmt = (s: string) => {
    const [year, month] = s.split("-");
    return `${year}.${month}`;
  };
  return `${fmt(period.start)} – ${period.end ? fmt(period.end) : "현재"}`;
};

function ExperienceBlock({ exp }: { exp: Experience }) {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.experienceHeader}>
        <div className={styles.experienceMeta}>
          <span className={styles.companyName}>{exp.company}</span>
          <span className={styles.roleName}>{exp.role}</span>
        </div>
        <span className={styles.period}>{formatPeriod(exp.period)}</span>
      </div>

      {exp.techStack && exp.techStack.length > 0 && (
        <p className={styles.techStack}>{exp.techStack.join(" · ")}</p>
      )}

      {exp.overview && <p className={styles.overview}>{exp.overview}</p>}

      {exp.sections && exp.sections.length > 0 && (
        <div className={styles.sectionList}>
          {exp.sections
            .filter((s: Section) => s.title || s.bullets.length > 0)
            .map((s: Section) => (
              <div key={s.title || s.description} className={styles.sectionItem}>
                {s.title && <h4 className={styles.sectionItemTitle}>{s.title}</h4>}
                {s.description && <p className={styles.sectionItemDescription}>{s.description}</p>}
                {s.links && s.links.length > 0 && (
                  <div className={styles.sectionLinks}>
                    {s.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.sectionLink}
                      >
                        {link.label}
                        <ExternalLink size={10} />
                      </a>
                    ))}
                  </div>
                )}
                <BulletList bullets={s.bullets} keywords={exp.keywords} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default function ResumePage() {
  const { profile, experiences, sideProjects, education, activities } = data;

  return (
    <main className={styles.page}>
      {/* Profile */}
      <section className={styles.profileHeader}>
        <div className={styles.nameBlock}>
          <h1 className={styles.name}>{profile.name}</h1>
          <span className={styles.tagline}>{profile.tagline}</span>
        </div>

        <div className={styles.contactRow}>
          <a href={`mailto:${profile.contact.email}`} className={styles.contactLink}>
            <Mail size={13} />
            {profile.contact.email}
          </a>
          {profile.contact.github && (
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Link size={13} />
              GitHub
            </a>
          )}
          {profile.contact.linkedin && (
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Link size={13} />
              LinkedIn
            </a>
          )}
        </div>

        <hr className={styles.divider} />

        <ul className={styles.introList}>
          {profile.intro.map((line) => (
            <li key={line} className={styles.introItem}>
              {line}
            </li>
          ))}
        </ul>
      </section>

      {/* Experiences */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.experienceList}>
          {experiences.map((exp) => (
            <ExperienceBlock key={exp.company} exp={exp} />
          ))}
        </div>
      </section>

      {/* Side Projects */}
      {sideProjects && sideProjects.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.experienceList}>
            {sideProjects.map((proj) => (
              <ExperienceBlock key={proj.company} exp={proj} />
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.simpleList}>
          {education.map((edu) => (
            <div key={edu.school} className={styles.simpleItem}>
              <div className={styles.simpleHeader}>
                <div>
                  <div className={styles.simpleTitle}>{edu.school}</div>
                  {edu.degree && <div className={styles.simpleSubtitle}>{edu.degree}</div>}
                </div>
                <span className={styles.period}>{formatPeriod(edu.period)}</span>
              </div>
              {edu.gpa && (
                <div className={styles.gpaMeta}>
                  {edu.gpa.major && <span className={styles.gpaBadge}>전공 {edu.gpa.major}</span>}
                  {edu.gpa.overall && (
                    <span className={styles.gpaBadge}>평균 {edu.gpa.overall}</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Activities */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Activities</h2>
        <div className={styles.simpleList}>
          {activities.map((act) => (
            <div key={act.title} className={styles.simpleItem}>
              <div className={styles.simpleHeader}>
                <span className={styles.simpleTitle}>{act.title}</span>
                {act.period && <span className={styles.period}>{formatPeriod(act.period)}</span>}
              </div>
              <BulletList bullets={act.bullets} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
