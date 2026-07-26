import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

export function WorkRow({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group flex items-center justify-between gap-4 border-b border-border py-5 transition-colors first:pt-0 hover:border-accent/40"
    >
      <div>
        <div className="mb-1.5 flex items-center gap-2.5">
          <h3 className="text-[15px] font-semibold text-text-primary">
            {caseStudy.title}
          </h3>
          <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-text-muted">
            {caseStudy.category}
          </span>
        </div>
        <p className="text-sm text-text-muted">{caseStudy.summary}</p>
      </div>
      <ArrowUpRight
        size={18}
        strokeWidth={1.75}
        className="shrink-0 text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </Link>
  );
}
