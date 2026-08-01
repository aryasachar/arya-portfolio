import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/case-study-content";

export const metadata: Metadata = {
  title: "Finding the 19% failure in Search — Arya Sachar",
};

export default function Page() {
  return (
    <CaseStudyContent
      eyebrow="Research & Analysis"
      title="Finding the 19% failure in Search"
      intro="A deep dive into Yahoo Search quality that started with a simple question: how often does search actually fail?"
      bullets={[
        "Uncovered a 19% search failure rate through in-depth analysis of key metrics, queries, and user sessions across Web and Mobile.",
        "Segmented failures into actionable categories and proposed solutions, guiding the formation of dedicated product squads to address them.",
        "Recognized with Yahoo's Above and Beyond Product Impact award (Nov. 2023) for presenting findings to VP-level leadership and developing an analysis framework adopted across multiple Yahoo Search projects.",
        "Directed product action to improve click engagement by 2.5% by diagnosing underperforming query categories in the \"people\" module.",
        "Achieved a 3% gain in click-through rate by investigating the drop in clicks for the local module, identifying causality and delivering targeted recommendations directly to the product team.",
      ]}
      stats={[
        { value: "19%", label: "Search failure rate uncovered" },
        { value: "+2.5%", label: "Click engagement, people module" },
        { value: "+3%", label: "Click-through rate, local module" },
      ]}
      demo={{
        url: "https://flow-shaper-06.lovable.app",
        label: "Interactive failure-rate waterfall",
      }}
    />
  );
}
