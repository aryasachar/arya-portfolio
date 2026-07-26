import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Yahoo Scout — Arya Sachar",
};

export default function Page() {
  return <ComingSoon eyebrow="AI / LLM Product" title="Yahoo Scout" />;
}
