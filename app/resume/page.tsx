import type { Metadata } from "next";
import { Download, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Resume — Arya Sachar",
};

const summary =
  "Product Manager with 6+ years at Yahoo, owning AI and data product strategy from concept through launch. Currently driving the roadmap for Yahoo Scout (AI/LLM-powered) — shipping features that grew consumer engagement by 23% — while building AI-powered internal tools with Claude that cut experiment review cycle time by 30% and save 5+ hours of manual reporting weekly. Grounded in data science, with a track record of quantifiable product impact: from a 19% search-failure investigation that reshaped Yahoo Search's roadmap, to independently designing and shipping the PM Experiment Planner, an AI tool that helps PMs plan structured A/B experiments.";

// Verbatim from resume — keep this in sync with public/resume.pdf.
const timeline = [
  {
    role: "Product Data Scientist II / Product Manager, AI & Data",
    org: "Yahoo",
    period: "May 2024 — Present",
    bullets: [
      "Led cross-functional requirements gathering across Design, Engineering, Product, Legal, and Analytics to ship data products used across Yahoo's consumer team.",
      "Owned product strategy and roadmap for Yahoo Scout (AI/LLM-powered) from concept through launch — shipping features that increased consumer engagement by 23% across a diverse user base.",
      "Built and shipped AI-powered internal tools using Claude: an experiment review agent that cut review cycle time by 30%, agentic dashboards saving 5+ hours of manual reporting weekly, and API workflows that uncovered 3 key model-tagging errors in production.",
      "Defined the experimentation strategy for the Generative AI module, increasing consumer engagement by 4% through hypothesis-driven experimentation and quantitative analysis to modify the product roadmap.",
      "Identified and prioritized fixes for critical drop-off points across the Yahoo ecosystem, designing targeted interventions that improved Search funnel conversion by 2%.",
      "Designed and launched an AI-powered Success Metrics Builder using Claude, automating the synthesis of stakeholder success criteria into a unified composite metric.",
    ],
  },
  {
    role: "Product Data Scientist I",
    org: "Yahoo",
    period: "March 2022 — May 2024",
    bullets: [
      "Directed product action to improve click engagement by 2.5% by diagnosing underperforming query categories in the \"people\" module.",
      "Uncovered a 19% search failure rate through deep analysis of queries and user sessions — segmenting failures into actionable categories and guiding dedicated product squads to resolution. Recognized with Yahoo's Above and Beyond Product Impact award (Nov. 2023) for presenting findings to VP-level leadership and developing an analysis framework adopted across multiple Yahoo Search projects.",
      "Spearheaded the Yahoo Search redesign across US and International markets — driving a 4% increase in search box engagement through analytics and experimentation strategy across Web and Mobile platforms, from inception through launch.",
      "Achieved a 3% gain in click-through rate by investigating the drop in clicks for the local module, identifying causality and delivering targeted recommendations directly to the product team.",
    ],
  },
  {
    role: "Content Analyst and Knowledge Engineer",
    org: "Yahoo",
    period: "August 2019 — March 2022",
    bullets: [
      "Improved product personalization for 200M+ Yahoo Mail users — partnering with Engineering to automate workflows and ship data-driven features.",
      "Optimized and debugged code for reduced latency and applied pattern recognition to resolve complex problems.",
    ],
  },
];

const recognition = [
  {
    title: "PM Experiment Planner",
    link: "https://pm-experiment-planner.lovable.app",
    body: "Independently built and shipped an AI-powered tool for Product Managers — generating structured A/B experiment plans including metrics, guardrails, and success criteria.",
  },
  {
    title: "Above and Beyond Product Impact — Yahoo",
    period: "November 2023",
    body: "Recognized for leading a cross-functional search quality initiative — presenting findings to VP-level leadership, forming dedicated product squads, and developing an analysis framework adopted across multiple Yahoo Search projects.",
  },
];

const competencies = [
  {
    heading: "Product Management",
    items: [
      "Product Vision & Strategy",
      "AI/ML Product Management",
      "Experimentation design — A/B & MAB (Multi-Armed Bandits) tests",
      "Product Requirements (PRDs) and Roadmap Development",
      "Go-To-Market strategy",
      "UX & User Research",
    ],
  },
  {
    heading: "Data Science & AI",
    items: [
      "KPI and North Star Metric Development",
      "Product Analytics",
      "Hands-on AI tooling and Building Agents — Claude (Code, Design, Cowork)",
      "User Journey and Funnel Analysis",
      "Tableau",
      "SQL",
      "Machine Learning",
    ],
  },
];

const education = [
  {
    degree: "Master of Science, Data Science",
    school: "Indiana University, Bloomington",
    period: "Graduated 2026",
  },
  {
    degree: "Bachelor of Science, Management Information Systems",
    school: "San Jose State University",
    period: "Graduated 2019",
  },
];

export default function ResumePage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Resume
          </h1>
          <a
            href="/resume.pdf"
            download="Arya_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={15} strokeWidth={1.75} />
            Download PDF
          </a>
        </div>

        <p className="mb-12 max-w-2xl leading-relaxed text-text-muted">
          {summary}
        </p>

        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
          Experience
        </h2>
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

        <div className="mt-2 border-b border-border pb-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
            Projects and Recognition
          </h2>
          <div className="flex flex-col gap-5">
            {recognition.map((r) => (
              <div key={r.title}>
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="text-sm font-semibold text-text-primary">
                    {r.link ? (
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        {r.title}
                        <ArrowUpRight size={13} strokeWidth={1.75} />
                      </a>
                    ) : (
                      r.title
                    )}
                  </p>
                  {r.period && (
                    <span className="text-sm text-text-muted">
                      {r.period}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-text-muted">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
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
