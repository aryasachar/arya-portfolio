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
    title: "Growing Yahoo Scout's Engagement by 23%",
    category: "AI / LLM Product",
    summary:
      "Owning Yahoo Scout's AI/LLM roadmap from concept through launch — shipping features that grew consumer engagement by 23%.",
  },
  {
    slug: "search-failure",
    title: "Finding the 19% Failure in Search",
    category: "Research & Analysis",
    summary:
      "Analyzing queries and sessions across Web and Mobile to uncover a 19% search failure rate — recognized with Yahoo's Above and Beyond Product Impact award.",
  },
  {
    slug: "search-redesign",
    title: "An Analytics-Driven Redesign of Yahoo Search, Start to Launch",
    category: "Product Strategy",
    summary:
      "Leading the US and international redesign of Yahoo Search from inception through launch, driving a 4% lift in search box engagement.",
  },
  {
    slug: "agentic-tools",
    title: "Building AI Agents That Save Hours Across the Product Lifecycle",
    category: "Internal AI Tools",
    summary:
      "Building AI-powered internal tools with Claude — cutting experiment review time by 30% and saving 5+ hours of manual reporting weekly.",
  },
  {
    slug: "experiment-planner",
    title: "Shipping an AI Experiment Planner, Solo",
    category: "0 → 1 Build",
    summary:
      "Independently designing and shipping an AI tool that helps PMs plan structured A/B experiments.",
  },
  {
    slug: "genai-experiments",
    title: "A 3% Lift in Query Engagement From Generative AI Experiments",
    category: "GenAI / Experimentation",
    summary:
      "Designing and running experiments across generative AI modules, increasing follow-on query engagement by 3%.",
  },
];
