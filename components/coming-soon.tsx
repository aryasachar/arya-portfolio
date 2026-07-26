import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "./container";

export function ComingSoon({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Container>
      <div className="flex min-h-[50vh] flex-col justify-center py-20">
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
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-text-primary">
          {title}
        </h1>
        <p className="max-w-md text-text-muted">
          This case study is being written up. Check back soon — or ask
          Arya directly using the chat in the corner.
        </p>
      </div>
    </Container>
  );
}
