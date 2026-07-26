import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "PM Experiment Planner — Arya Sachar",
};

export default function Page() {
  return <ComingSoon eyebrow="0 → 1 Build" title="PM Experiment Planner" />;
}
