import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/case-study-content";

export const metadata: Metadata = {
  title: "PM Experiment Planner — Arya Sachar",
};

export default function Page() {
  return (
    <CaseStudyContent
      eyebrow="0 → 1 Build"
      title="PM Experiment Planner"
      intro="A tool I designed and shipped independently, end to end — no team, no handoffs."
      bullets={[
        "Independently built and shipped an AI-powered tool for Product Managers — generating structured A/B experiment plans including metrics, guardrails, and success criteria.",
      ]}
      demo={{
        url: "https://pm-experiment-planner.lovable.app",
        label: "Try the PM Experiment Planner",
      }}
      stats={[
        { value: "~1 week", label: "End-to-end build time, solo" },
        { value: "~$0.02", label: "Cost per generated plan" },
        { value: "Shipped", label: "Status" },
      ]}
      decisions={[
        {
          title: "Pivoted from a review generator to a planner",
          rationale:
            "The original idea generated stakeholder write-ups from experiment results — but interpreting results needs proprietary context Claude can't reliably access. Planning an experiment draws on generalizable expertise instead, which removed the hallucination risk while delivering more value earlier in the process.",
        },
        {
          title: "The tool never recommends ship or kill",
          rationale:
            "That call depends on business context and priorities the tool can't see. It defines what good looks like — the PM still makes the decision.",
        },
      ]}
      prd={{
        href: "/pm-experiment-planner-prd.html",
        label: "Read the full PRD",
      }}
    />
  );
}
