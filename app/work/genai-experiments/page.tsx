import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/case-study-content";

export const metadata: Metadata = {
  title: "A 3% Lift in Query Engagement From Generative AI Experiments — Arya Sachar",
};

export default function Page() {
  return (
    <CaseStudyContent
      eyebrow="GenAI / Experimentation"
      title="A 3% Lift in Query Engagement From Generative AI Experiments"
      intro="Running structured experiments across Yahoo's generative AI surfaces to guide where to invest next."
      bullets={[
        "Executed a comprehensive experimentation strategy for the Generative AI module, increasing follow-on query engagement by 3% through hypothesis-driven experimentation and quantitative analysis.",
        "Findings were used to modify the product roadmap and prioritize future product investment.",
      ]}
      stats={[{ value: "+3%", label: "Follow-on query engagement from GenAI module experiments" }]}
    />
  );
}
