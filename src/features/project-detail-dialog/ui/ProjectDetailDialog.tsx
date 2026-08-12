"use client";

import { useCallback, useRef } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { expandIn, expandOut } from "@/shared/lib";
import { GithubIcon } from "@/shared/ui/icons/GithubIcon";
import { MDXContent } from "@/shared/ui/MDXContent";
import { Tag, TagList } from "@/shared/ui/Tag";

import * as styles from "./ProjectDetailDialog.css";

interface Project {
  title: string;
  tags: string[];
  github?: string;
  demo?: string;
  period?: string;
  content: string;
}

interface Props {
  project: Project;
  cardRect: DOMRect;
  open: boolean;
  onClose: () => void;
}

export const ProjectDetailDialog = ({ project, cardRect, open, onClose }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOpenAutoFocus = useCallback(
    (e: Event) => {
      e.preventDefault();
      if (contentRef.current) expandIn(contentRef.current, cardRect);
    },
    [cardRect]
  );

  const handleOpenChange = useCallback(
    (value: boolean) => {
      if (!value && contentRef.current) {
        const anim = expandOut(contentRef.current, cardRect);
        if (overlayRef.current) {
          overlayRef.current.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 320,
            easing: "ease",
            fill: "forwards",
          });
        }
        anim.addEventListener("finish", onClose);
      } else if (!value) {
        onClose();
      }
    },
    [cardRect, onClose]
  );

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay ref={overlayRef} className={styles.overlay} />
        <Dialog.Content
          ref={contentRef}
          className={styles.content}
          onOpenAutoFocus={handleOpenAutoFocus}
        >
          <VisuallyHidden.Root asChild>
            <Dialog.Title>{project.title}</Dialog.Title>
          </VisuallyHidden.Root>

          <div className={styles.topBar}>
            <Dialog.Close className={styles.closeBtn}>← 닫기</Dialog.Close>
          </div>

          <div className={styles.body}>
            <h1 className={styles.projectTitle}>{project.title}</h1>

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
                <Tooltip.Provider delayDuration={300}>
                  <div className={styles.links}>
                    {project.github && (
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkBtn}
                          >
                            <GithubIcon size={14} />
                            GitHub
                          </a>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content sideOffset={6}>{project.github}</Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    )}
                    {project.demo && (
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkBtn}
                          >
                            ↗ Demo
                          </a>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content sideOffset={6}>{project.demo}</Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    )}
                  </div>
                </Tooltip.Provider>
              )}
            </div>

            <div className={styles.prose}>
              <MDXContent code={project.content} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
