import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/case-study-content";

export const metadata: Metadata = {
  title: "Growing Yahoo Scout's Engagement by 23% — Arya Sachar",
};

export default function Page() {
  return (
    <CaseStudyContent
      eyebrow="AI / LLM Product"
      title="Growing Yahoo Scout's Engagement by 23%"
      intro="Yahoo Scout is Yahoo's AI/LLM-powered product. I drove product strategy across its lifecycle from concept through launch."
      heroImage={{
        src: "/case-studies/yahoo-scout-ai-summary.png",
        alt: "Yahoo Scout AI Summary feature live in Yahoo Search results, showing an AI-generated answer with source attribution and suggested follow-up questions",
        caption: "Yahoo Scout's AI Summary, live in Yahoo Search today.",
      }}
      bullets={[
        "Owned product strategy and roadmap for Yahoo Scout from concept through launch — shipping features that increased consumer engagement by 23% across a diverse user base.",
        "Led cross-functional requirements gathering across Design, Engineering, Product, Legal, and Analytics to ship data products used across Yahoo's consumer team.",
        "The AI Summary shown above pairs a generated answer with source attribution and personalized follow-up questions, directly inside search results.",
      ]}
      stats={[
        { value: "+23%", label: "Consumer engagement lift from shipped features" },
        { value: "5", label: "Cross-functional teams aligned: Design, Eng, Product, Legal, Analytics" },
      ]}
    />
  );
}
