import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/case-study-content";

export const metadata: Metadata = {
  title: "Yahoo Scout — Arya Sachar",
};

export default function Page() {
  return (
    <CaseStudyContent
      eyebrow="AI / LLM Product"
      title="Yahoo Scout"
      intro="Yahoo Scout is Yahoo's AI/LLM-powered product. I drove product strategy across its lifecycle from concept through launch."
      heroImage={{
        src: "/case-studies/yahoo-scout-ai-summary.png",
        alt: "Yahoo Scout AI Summary feature live in Yahoo Search results, showing an AI-generated answer with source attribution and suggested follow-up questions",
        caption: "Yahoo Scout's AI Summary, live in Yahoo Search today.",
      }}
      bullets={[
        "Established north star metrics and KPI frameworks for the product, then shipped features that moved key metrics for a diverse consumer base.",
        "Expanded into formal Product Management of Yahoo's internal Data & AI Tools from mid-2025 — defining roadmaps and gathering requirements across Product, Analytics, Engineering, and Legal.",
        "The AI Summary shown above pairs a generated answer with source attribution and personalized follow-up questions, directly inside search results.",
      ]}
    />
  );
}
