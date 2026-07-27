import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Resume — Arya Sachar",
};

const summary =
  "Product Strategist with 6+ years at Yahoo defining product vision, driving B2B and B2C product strategy, and delivering end-to-end product launches through cross-functional execution. Proven track record owning AI and consumer product initiatives from concept through launch, defining roadmaps and delivering consumer experiences that drive engagement. Bringing deep analytical expertise and strong product intuition to define product vision, identify strategic opportunities, and ship impactful products. Independently built and shipped an AI-powered product that helps Product Managers design structured A/B experiment strategies.";

// Verbatim from resume — keep this in sync with public/resume.pdf.
const timeline = [
  {
    role: "Product Manager (Product Data Scientist II)",
    org: "Yahoo",
    period: "March 2022 — Present",
    bullets: [
      "Expanded into Product Management of internal data and AI products from mid-2025 — defining product roadmaps, gathering requirements from Product, Analytics, Engineering, and Legal teams, and shipping products used across Yahoo's consumer product, analytics, and engineering teams.",
      "Drove product strategy across the Yahoo Scout (AI/LLM-powered) product lifecycle from concept through launch — establishing north star metrics and KPI frameworks, and shipping features that moved key metrics for a diverse consumer base.",
      "Developed agentic dashboards and summaries using Claude and SQL, automatically generating daily plain-language narratives that translated product health metrics into actionable insights for PMs, Engineers, and leadership.",
      "Shipped AI-powered internal tools — prototyping product concepts, integrating APIs, and automating query categorization workflows that uncovered model-tagging issues, enabling engineering teams to ship targeted improvements to production models.",
      "Built an AI-powered experiment review agent using Claude — flagging anomalous data, generating first-draft experiment reviews for the analytics team, reducing manual review time and improving experiment quality.",
      "Identified critical drop-off points by analyzing user flow and behavioral patterns across the Yahoo ecosystem — designing targeted interventions that improved funnel conversion and informed broader product strategy across Yahoo Search.",
      "Uncovered a 19% search failure rate through an in-depth analysis involving key metrics, queries and user sessions across Web and Mobile — segmenting failures into actionable categories, while providing solutions and guiding the formation of product squads, earning a Yahoo Spot Bonus (Nov. 2023) for outstanding product impact.",
      "Designed and executed experiments across Generative AI modules leveraging quantitative analysis and user behavior data to improve consumer engagement and prioritize future product investments.",
      "Led the redesign of Yahoo Search for US and International markets across Web and Mobile from inception to launch, running rapid experimentation in an agile framework resulting in a successful launch.",
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
      "Product Vision",
      "AI Product Strategy",
      "Experimentation design — A/B & MAB (Multi-Armed Bandits) tests",
      "Product Requirements (PRDs) and Roadmap Development",
      "Go-To-Market strategy",
      "UX & User Research",
      "Cross-functional Leadership",
    ],
  },
  {
    heading: "Data Science & AI",
    items: [
      "KPI and North Star Metric Development",
      "SQL",
      "Machine Learning",
      "Hands-on AI tooling and Building Agents — Claude (Code, Design, Cowork)",
      "User Journey and Funnel Analysis",
      "Tableau",
      "Google Data Studio",
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

        <p className="mb-12 max-w-2xl leading-relaxed text-text-muted">
          {summary}
        </p>

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
