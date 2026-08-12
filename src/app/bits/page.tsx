import type { Metadata } from "next";

import { BitListView } from "@/views/bit-list";
import { getBitDateGroups } from "@/entities/bit";

export const metadata: Metadata = {
  title: "단상",
  description: "배운 것들을 짧게 기록합니다.",
};

export default function BitsPage() {
  return <BitListView groups={getBitDateGroups()} />;
}
