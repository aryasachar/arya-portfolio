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
        "Built an AI-powered experiment review agent using Claude — flagging anomalous data and generating first-draft experiment reviews, cutting review cycle time by 30%.",
        "Developed agentic dashboards using Claude and SQL — automatically generating plain-language narratives of product health metrics, saving 5+ hours of manual reporting weekly.",
        "Shipped AI-powered API workflows that automate query categorization — uncovering 3 key model-tagging errors in production and enabling engineering teams to ship targeted model improvements.",
        "Designed and launched an AI-powered Success Metrics Builder using Claude, automating the synthesis of stakeholder success criteria into a unified composite metric.",
      ]}
      stats={[
        { value: "-30%", label: "Experiment review cycle time" },
        { value: "5+ hrs", label: "Manual reporting saved weekly" },
        { value: "3", label: "Model-tagging errors uncovered" },
      ]}
    />
  );
}
