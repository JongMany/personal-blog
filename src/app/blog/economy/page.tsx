import type { Metadata } from "next";

import { EconomyListView } from "@/views/economy-list";
import { getPublishedEconomyListItems } from "@/entities/post";

export const metadata: Metadata = {
  title: "경제",
  description: "투자와 경제에 대한 생각을 기록합니다.",
};

export default function EconomyPage() {
  return <EconomyListView posts={getPublishedEconomyListItems()} />;
}
