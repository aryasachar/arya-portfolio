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
        "Designed and executed experiments across Generative AI modules, leveraging quantitative analysis and user behavior data.",
        "Findings were used to improve consumer engagement and prioritize future product investment.",
      ]}
    />
  );
}
