import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/case-study-content";

export const metadata: Metadata = {
  title: "Search Redesign — Arya Sachar",
};

export default function Page() {
  return (
    <CaseStudyContent
      eyebrow="Product Strategy"
      title="Search Redesign"
      intro="Following the failure-rate findings, I led the redesign of Yahoo Search end-to-end — from inception through launch."
      bullets={[
        "Led the redesign of Yahoo Search for US and international markets, across Web and Mobile, from inception to launch.",
        "Identified critical drop-off points by analyzing user flow and behavioral patterns across the Yahoo ecosystem, designing targeted interventions that improved funnel conversion.",
        "Ran rapid experimentation in an agile framework, resulting in a successful launch.",
      ]}
    />
  );
}
