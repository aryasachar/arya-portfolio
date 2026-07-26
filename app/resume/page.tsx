import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Resume — Arya Sachar",
};

const timeline = [
  {
    role: "Product Manager (Product Data Scientist II)",
    org: "Yahoo",
    period: "March 2022 — Present",
    bullets: [
      "Expanded into Product Management of internal data and AI products from mid-2025 — defining roadmaps and shipping products used across Yahoo's consumer, analytics, and engineering teams.",
      "Drove product strategy across the Yahoo Scout (AI/LLM-powered) product lifecycle from concept through launch, establishing north star metrics and KPI frameworks.",
      "Built an AI-powered experiment review agent using Claude — flagging anomalous data and generating first-draft experiment reviews, reducing manual review time.",
      "Uncovered a 19% search failure rate through in-depth analysis of key metrics, queries, and user sessions — guiding the formation of product squads and earning a Yahoo Spot Bonus (Nov. 2023).",
      "Led the redesign of Yahoo Search for US and international markets across Web and Mobile, running rapid experimentation in an agile framework through to a successful launch.",
      "Developed agentic dashboards using Claude and SQL, automatically generating plain-language narratives that translated product health metrics into insights for PMs and leadership.",
    ],
  },
  {
    role: "Content Analyst and Knowledge Engineer",
    org: "Yahoo",
    period: "August 2019 — March 2022",
    bullets: [
      "Extracted insights from large-scale data to improve product personalization for Yahoo Mail — partnering with Engineering to automate workflows and ship data-driven features.",
    ],
  },
];

const competencies = [
  {
    heading: "Product Management",
    items: [
      "Product Vision & AI Product Strategy",
      "Experimentation design — A/B & MAB tests",
      "PRDs & Roadmap Development",
      "Go-To-Market Strategy",
      "UX & User Research",
      "Cross-functional Leadership",
    ],
  },
  {
    heading: "Data Science & AI",
    items: [
      "KPI & North Star Metric Development",
      "SQL · Machine Learning",
      "Hands-on AI tooling & agent-building — Claude (Code, Design, Cowork)",
      "User Journey & Funnel Analysis",
      "Tableau · Google Data Studio",
    ],
  },
];

const education = [
  {
    degree: "M.S., Data Science",
    school: "Indiana University, Bloomington",
    period: "2026",
  },
  {
    degree: "B.S., Management Information Systems",
    school: "San Jose State University",
    period: "2019",
  },
];

export default function ResumePage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary">
            Resume
          </h1>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={15} strokeWidth={1.75} />
            Download PDF
          </a>
        </div>

        <div className="flex flex-col gap-10">
          {timeline.map((role) => (
            <div key={role.role} className="border-b border-border pb-10">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="text-base font-semibold text-text-primary">
                  {role.role}{" "}
                  <span className="font-normal text-text-muted">
                    · {role.org}
                  </span>
                </h2>
                <span className="text-sm text-text-muted">{role.period}</span>
              </div>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-text-muted">
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-2 grid gap-10 border-b border-border pb-10 sm:grid-cols-2">
          {competencies.map((group) => (
            <div key={group.heading}>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
                {group.heading}
              </h2>
              <ul className="space-y-1.5 text-sm leading-relaxed text-text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
            Education
          </h2>
          <div className="flex flex-col gap-2">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm"
              >
                <span className="text-text-primary">
                  {ed.degree}{" "}
                  <span className="text-text-muted">· {ed.school}</span>
                </span>
                <span className="text-text-muted">{ed.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
