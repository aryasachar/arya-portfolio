import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "The 19% Problem — Arya Sachar",
};

export default function Page() {
  return <ComingSoon eyebrow="Research & Analysis" title="The 19% Problem" />;
}
