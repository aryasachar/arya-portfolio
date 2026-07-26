import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Search Redesign — Arya Sachar",
};

export default function Page() {
  return <ComingSoon eyebrow="Product Strategy" title="Search Redesign" />;
}
