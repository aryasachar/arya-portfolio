import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/case-study-content";

export const metadata: Metadata = {
  title: "GenAI Experiments — Arya Sachar",
};

export default function Page() {
  return (
    <CaseStudyContent
      eyebrow="GenAI / Experimentation"
      title="GenAI Experiments"
      intro="Running structured experiments across Yahoo's generative AI surfaces to guide where to invest next."
      bullets={[
        "Defined the experimentation strategy for the Generative AI module, increasing consumer engagement by 4% through hypothesis-driven experimentation and quantitative analysis.",
        "Findings were used to modify the product roadmap and prioritize future product investment.",
      ]}
      stats={[{ value: "+4%", label: "Consumer engagement from GenAI module experiments" }]}
    />
  );
}
