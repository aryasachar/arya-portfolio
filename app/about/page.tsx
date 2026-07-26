import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About — Arya Sachar",
};

const sections = [
  {
    heading: "Where I started",
    body: "I started at Yahoo in 2019 as a Content Analyst and Knowledge Engineer, extracting insights from large-scale data to improve product personalization for Yahoo Mail — partnering closely with Engineering to turn analysis into shipped, data-driven features.",
  },
  {
    heading: "Where I evolved",
    body: "In 2022 I moved into a Product Manager / Product Data Scientist role, driving strategy across the Yahoo Scout AI/LLM product lifecycle and leading the redesign of Yahoo Search for US and international markets. Along the way I dug into user flow and session data across Web and Mobile and uncovered a 19% search failure rate — work that earned a Yahoo Spot Bonus and reshaped how the team thought about search quality.",
  },
  {
    heading: "Where I'm going",
    body: "Since mid-2025 I've formally expanded into Product Management for Yahoo's internal Data & AI Tools — building agentic dashboards and an AI-powered experiment review agent with Claude, and independently designing and shipping an AI tool that helps PMs plan structured A/B experiments. I'm now looking for the next room to bring that same instinct: start with the data, ship something people actually use.",
  },
];

export default function AboutPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <h1 className="mb-12 text-3xl font-bold tracking-tight text-text-primary">
          About
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
