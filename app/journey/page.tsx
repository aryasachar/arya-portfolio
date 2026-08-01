import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Journey — Arya Sachar",
};

const sections = [
  {
    heading: "Where I started",
    body: "I started at Yahoo in 2019 as a Content Analyst and Knowledge Engineer, improving product personalization for 200M+ Yahoo Mail users — partnering closely with Engineering to turn analysis into shipped, data-driven features, and optimizing code along the way to resolve complex problems.",
  },
  {
    heading: "Where I evolved",
    body: "In 2022 I moved into a Product Data Scientist role, digging into user flow and session data across Web and Mobile to uncover a 19% search failure rate — work recognized with Yahoo's Above and Beyond Product Impact award for reshaping how the team thought about search quality. I carried that same rigor into spearheading the Yahoo Search redesign across US and International markets, driving a 4% increase in search box engagement from inception through launch.",
  },
  {
    heading: "Where I'm going",
    body: "Since May 2024 I have functionally stepped into Product Management for Yahoo's AI & Data products — owning the Yahoo Scout (AI/LLM-powered) roadmap from concept through launch and growing consumer engagement by 23%, while building AI-powered internal tools with Claude: an experiment review agent, agentic dashboards, and a Success Metrics Builder that together save my team hours every week. I've also independently designed and shipped the PM Experiment Planner, an AI tool that helps PMs plan structured A/B experiments. I'm now looking for the next room to bring that same instinct: start with the data, ship something people actually use.",
  },
];

export default function JourneyPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <h1 className="mb-12 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Journey
        </h1>
        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
                {s.heading}
              </h2>
              <p className="max-w-xl leading-relaxed text-text-primary">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
