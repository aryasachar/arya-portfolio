import Link from "next/link";
import { Container } from "@/components/container";
import { WorkRow } from "@/components/work-row";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <p className="mb-4 text-sm font-medium text-accent">
          Product Manager, AI &amp; Data Products · Yahoo
        </p>
        <h1 className="mb-5 max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl">
          Product strategist and builder.
        </h1>
        <p className="mb-8 max-w-md text-base leading-relaxed text-text-muted">
          6+ years at Yahoo turning data into product decisions — from
          uncovering a{" "}
          <span className="font-semibold text-text-primary">
            19% search failure rate
          </span>{" "}
          to independently shipping an AI tool that helps PMs plan
          experiments.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/work"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View work
          </Link>
          <Link
            href="/resume"
            className="text-sm font-medium text-text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-text-primary"
          >
            View resume
          </Link>
        </div>
      </section>

      {/* Selected work */}
      <section className="pb-24">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-text-muted">
          Selected work
        </h2>
        <div className="mt-6">
          {caseStudies.map((cs) => (
            <WorkRow key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </section>
    </Container>
  );
}
