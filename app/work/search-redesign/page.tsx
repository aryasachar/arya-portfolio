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
        "Spearheaded the Yahoo Search redesign across US and international markets — driving a 4% increase in search box engagement through analytics and experimentation strategy across Web and Mobile, from inception through launch.",
        "Identified and prioritized fixes for critical drop-off points across the Yahoo ecosystem, designing targeted interventions that improved Search funnel conversion by 2%.",
        "Ran rapid experimentation in an agile framework, resulting in a successful launch.",
      ]}
      stats={[
        { value: "+4%", label: "Search box engagement" },
        { value: "+2%", label: "Search funnel conversion" },
      ]}
    />
  );
}
