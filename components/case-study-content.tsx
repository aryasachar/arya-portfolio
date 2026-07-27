import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Container } from "./container";

type Decision = { title: string; rationale: string };
type Stat = { value: string; label: string };

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  heroImage?: { src: string; alt: string; caption?: string };
  demo?: { url: string; label: string };
  stats?: Stat[];
  decisions?: Decision[];
  prd?: { href: string; label: string };
};

export function CaseStudyContent({
  eyebrow,
  title,
  intro,
  bullets,
  heroImage,
  demo,
  stats,
  decisions,
  prd,
}: Props) {
  return (
    <Container>
      <div className="py-16 sm:py-20">
        <Link
          href="/work"
          className="mb-8 inline-flex w-fit items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
        >
          <ArrowLeft size={14} strokeWidth={1.75} />
          Back to work
        </Link>

        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
        <h1 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h1>
        <p className="mb-10 max-w-xl leading-relaxed text-text-muted">
          {intro}
        </p>

        {heroImage && (
          <div className="mb-10">
            <div className="overflow-hidden rounded-xl border border-border">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={1400}
                height={900}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            {heroImage.caption && (
              <p className="mt-2 text-xs text-text-muted">
                {heroImage.caption}
              </p>
            )}
          </div>
        )}

        <ul className="flex max-w-xl flex-col gap-4">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-[15px] leading-relaxed text-text-primary"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {demo && (
          <div className="mt-12">
            <p className="mb-3 text-sm font-semibold text-text-primary">
              {demo.label}
            </p>
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src={demo.url}
                className="h-[600px] w-full"
                title={demo.label}
                loading="lazy"
              />
            </div>
          </div>
        )}

        {stats && (
          <div className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-5">
                <div className="mb-1 text-xl font-bold text-accent">
                  {s.value}
                </div>
                <div className="text-xs leading-snug text-text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {decisions && (
          <div className="mt-12 max-w-xl">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
              Key decisions
            </h2>
            <div className="flex flex-col gap-4">
              {decisions.map((d) => (
                <div
                  key={d.title}
                  className="rounded-lg border border-border p-4"
                >
                  <p className="mb-1.5 text-sm font-semibold text-text-primary">
                    {d.title}
                  </p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {d.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {prd && (
          <a
            href={prd.href}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {prd.label} ↗
          </a>
        )}
      </div>
    </Container>
  );
}
