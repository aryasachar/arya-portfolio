import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/case-study-content";

export const metadata: Metadata = {
  title: "The 19% Problem — Arya Sachar",
};

export default function Page() {
  return (
    <CaseStudyContent
      eyebrow="Research & Analysis"
      title="The 19% Problem"
      intro="A deep dive into Yahoo Search quality that started with a simple question: how often does search actually fail?"
      bullets={[
        "Uncovered a 19% search failure rate through in-depth analysis of key metrics, queries, and user sessions across Web and Mobile.",
        "Segmented failures into actionable categories and proposed solutions, guiding the formation of dedicated product squads to address them.",
        "The work was recognized with a Yahoo Spot Bonus (Nov. 2023) for outstanding product impact.",
      ]}
      demo={{
        url: "https://flow-shaper-06.lovable.app",
        label: "Interactive failure-rate waterfall",
      }}
    />
  );
}
