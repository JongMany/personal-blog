"use client";

import type { Keyword } from "@/shared/data/resume.types";

import { KeywordTooltip } from "./KeywordTooltip";

interface Props {
  text: string;
  keywords?: Record<string, Keyword>;
}

export function KeywordText({ text, keywords }: Props) {
  if (!keywords) return <>{text}</>;

  const parts: React.ReactNode[] = [];
  const pattern = /\[([^\]]+)\]/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const keyword = match[1];
    const keywordData = keywords[keyword];

    if (keywordData) {
      parts.push(<KeywordTooltip key={key++} keyword={keyword} data={keywordData} />);
    } else {
      parts.push(keyword);
    }

    lastIndex = match.index + match[0].length;
    key++;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
