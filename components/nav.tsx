"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/journey", label: "Journey" },
  { href: "/resume", label: "Resume" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-[15px] font-bold tracking-tight text-text-primary"
        >
          Arya Sachar
        </Link>

        <nav className="flex items-center gap-6">
          {LINKS.map((link) => {
            const isActive =
              link.href === "/work"
                ? pathname === "/work" || pathname.startsWith("/work/")
                : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm underline decoration-1 underline-offset-4 transition-colors ${
                  isActive
                    ? "font-semibold text-accent decoration-accent"
                    : "text-text-muted decoration-border hover:text-text-primary hover:decoration-text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
