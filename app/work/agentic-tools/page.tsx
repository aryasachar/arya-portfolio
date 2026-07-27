import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/case-study-content";

export const metadata: Metadata = {
  title: "Agentic Tools — Arya Sachar",
};

export default function Page() {
  return (
    <CaseStudyContent
      eyebrow="Internal AI Tools"
      title="Agentic Tools"
      intro="Building the internal AI tooling that makes other PMs, analysts, and engineers faster."
      bullets={[
        "Developed agentic dashboards and summaries using Claude and SQL — automatically generating daily plain-language narratives that translate product health metrics into actionable insights for PMs, engineers, and leadership.",
        "Built an AI-powered experiment review agent using Claude — flagging anomalous data and generating first-draft experiment reviews, reducing manual review time and improving experiment quality.",
        "Shipped AI-powered internal tools that prototype product concepts, integrate APIs, and automate query categorization — work that uncovered model-tagging issues and enabled engineering teams to ship targeted model improvements.",
      ]}
    />
  );
}
