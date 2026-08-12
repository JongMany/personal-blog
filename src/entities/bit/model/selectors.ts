import { compareByDateDescThenSlugDesc, formatDate, slugTail } from "@/shared/lib";

import type { BitDateGroup } from "./types";

import { bits } from "#velite";

export const getSortedBits = () => [...bits].sort(compareByDateDescThenSlugDesc);

export const getRecentBits = (limit: number) => getSortedBits().slice(0, limit);

export const getBitDateGroups = (): BitDateGroup[] => {
  const grouped = getSortedBits().reduce<Record<string, typeof bits>>((acc, bit) => {
    const key = formatDate(bit.date);
    if (!acc[key]) acc[key] = [];
    acc[key].push(bit);
    return acc;
  }, {});

  return Object.entries(grouped).map(([date, groupBits]) => ({ date, bits: groupBits }));
};

export const getBitStaticParams = () => bits.map((bit) => ({ slug: slugTail(bit.slug) }));

export const findBitBySlug = (slug: string) => bits.find((bit) => slugTail(bit.slug) === slug);
