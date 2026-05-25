"use client";

import NextImage from "next/image";

import * as Tooltip from "@radix-ui/react-tooltip";

import type { Keyword } from "@/shared/data/resume.types";

import * as styles from "./KeywordTooltip.css";

interface Props {
  keyword: string;
  data: Keyword;
}

export function KeywordTooltip({ keyword, data }: Props) {
  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className={styles.trigger}>{keyword}</span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.content} sideOffset={6}>
            {data.image && (
              <NextImage
                src={data.image}
                alt={keyword}
                width={0}
                height={0}
                sizes="352px"
                unoptimized
                className={styles.image}
              />
            )}
            {data.description && <p className={styles.description}>{data.description}</p>}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
