import type { Metadata } from "next";
import { Container } from "@/components/container";
import { WorkRow } from "@/components/work-row";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Work — Arya Sachar",
};

export default function WorkPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Work
        </h1>
        <p className="mb-10 max-w-md text-text-muted">
          Case studies from six years of turning data into products at
          Yahoo.
        </p>
        <div>
          {caseStudies.map((cs) => (
            <WorkRow key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </section>
    </Container>
  );
}
