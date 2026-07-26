export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
};

// NOTE: case study pages themselves are still "coming soon" — these
// one-liners are grounded in the resume; full write-ups are next.
export const caseStudies: CaseStudy[] = [
  {
    slug: "yahoo-scout",
    title: "Yahoo Scout",
    category: "AI / LLM Product",
    summary:
      "Driving product strategy across Yahoo Scout's AI/LLM lifecycle, from north star metrics to shipped features.",
  },
  {
    slug: "search-failure",
    title: "The 19% Problem",
    category: "Research & Analysis",
    summary:
      "Analyzing queries and sessions across Web and Mobile to uncover a 19% search failure rate — and a Yahoo Spot Bonus.",
  },
  {
    slug: "search-redesign",
    title: "Search Redesign",
    category: "Product Strategy",
    summary:
      "Leading the US and international redesign of Yahoo Search from inception through launch.",
  },
  {
    slug: "agentic-tools",
    title: "Agentic Tools",
    category: "Internal AI Tools",
    summary:
      "Building agentic dashboards and an AI experiment-review agent using Claude and SQL.",
  },
  {
    slug: "experiment-planner",
    title: "PM Experiment Planner",
    category: "0 → 1 Build",
    summary:
      "Independently designing and shipping an AI tool that helps PMs plan structured A/B experiments.",
  },
  {
    slug: "genai-experiments",
    title: "GenAI Experiments",
    category: "GenAI / Experimentation",
    summary:
      "Designing and running experiments across generative AI modules to prioritize product investment.",
  },
];
