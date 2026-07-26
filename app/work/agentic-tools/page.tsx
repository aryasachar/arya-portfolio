import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Agentic Tools — Arya Sachar",
};

export default function Page() {
  return <ComingSoon eyebrow="Internal AI Tools" title="Agentic Tools" />;
}
