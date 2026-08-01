// Single source of truth for what "Ask Arya" is allowed to know and say.
// Keep this in sync with the resume and case study content elsewhere on
// the site — this file is what actually gets sent to the model.

export const SITE_CONTENT = `
ARYA SACHAR — Product Manager, AI & Data, Yahoo

EXPERIENCE

Product Data Scientist II / Product Manager, AI & Data, Yahoo — May 2024 to Present
- Led cross-functional requirements gathering across Design, Engineering, Product, Legal, and Analytics to ship data products used across Yahoo's consumer team.
- Owned product strategy and roadmap for Yahoo Scout (AI/LLM-powered) from concept through launch, shipping features that increased consumer engagement by 23% across a diverse user base.
- Built and shipped AI-powered internal tools using Claude: an experiment review agent that cut review cycle time by 30%, agentic dashboards saving 5+ hours of manual reporting weekly, and API workflows that uncovered 3 key model-tagging errors in production.
- Defined the experimentation strategy for the Generative AI module, increasing consumer engagement by 4% through hypothesis-driven experimentation.
- Identified and prioritized fixes for critical drop-off points across the Yahoo ecosystem, improving Search funnel conversion by 2%.
- Designed and launched an AI-powered Success Metrics Builder using Claude, automating the synthesis of stakeholder success criteria into a unified composite metric.

Product Data Scientist I, Yahoo — March 2022 to May 2024
- Improved click engagement by 2.5% by diagnosing underperforming query categories in the "people" module.
- Uncovered a 19% search failure rate through deep analysis of queries and user sessions, segmenting failures into actionable categories and guiding dedicated product squads to resolution. Recognized with Yahoo's Above and Beyond Product Impact award (Nov. 2023) for presenting findings to VP-level leadership.
- Spearheaded the Yahoo Search redesign across US and International markets, driving a 4% increase in search box engagement, from inception through launch.
- Achieved a 3% gain in click-through rate by investigating the drop in clicks for the local module.

Content Analyst and Knowledge Engineer, Yahoo — August 2019 to March 2022
- Improved product personalization for 200M+ Yahoo Mail users, partnering with Engineering to automate workflows.
- Optimized and debugged code for reduced latency and applied pattern recognition to resolve complex problems.

PROJECTS AND RECOGNITION
- PM Experiment Planner: independently built and shipped an AI-powered tool for Product Managers, generating structured A/B experiment plans including metrics, guardrails, and success criteria. Live demo on the site.
- Above and Beyond Product Impact award, Yahoo (Nov. 2023): recognized for leading a cross-functional search quality initiative, presenting findings to VP-level leadership, forming dedicated product squads, and developing an analysis framework adopted across multiple Yahoo Search projects.

SKILLS
Product Management: Product Vision & Strategy, AI/ML Product Management, Experimentation design (A/B & Multi-Armed Bandit tests), PRDs and Roadmap Development, Go-To-Market strategy, UX & User Research.
Data Science & AI: KPI and North Star Metric Development, Product Analytics, hands-on AI tooling and agent-building with Claude, User Journey and Funnel Analysis, Tableau, SQL, Machine Learning.

EDUCATION
Master of Science, Data Science — Indiana University, Bloomington (2026)
Bachelor of Science, Management Information Systems — San Jose State University (2019)

CASE STUDIES ON THE SITE
- Growing Yahoo Scout's Engagement by 23%: owned product strategy and roadmap from concept through launch, growing consumer engagement 23%.
- Finding the 19% Failure in Search: uncovered a 19% search failure rate via deep session/query analysis; also improved people-module click engagement 2.5% and local-module CTR 3%.
- An Analytics-Driven Redesign of Yahoo Search, Start to Launch: spearheaded the Yahoo Search redesign across US and International markets, driving a 4% increase in search box engagement.
- Building AI Agents That Save Hours Across the Product Lifecycle: built an AI experiment review agent (-30% review time), agentic dashboards (5+ hrs saved weekly), and a Success Metrics Builder, all using Claude.
- Shipping an AI Experiment Planner, Solo: independently designed and shipped an AI tool that generates structured A/B experiment plans with metrics, guardrails, and success criteria. Built solo in about a week. Deliberately does not recommend ship/kill decisions.
- A 4% Engagement Lift From Generative AI Experiments: defined experimentation strategy for the Generative AI module, increasing consumer engagement 4%.
`.trim();

export const SYSTEM_PROMPT = `You are "Ask Arya," an assistant embedded on Arya Sachar's product management portfolio site. You answer questions from visitors — mostly recruiters and hiring managers — about Arya's experience, using ONLY the information below.

Rules:
- Only answer using the SITE CONTENT below. Do not use outside knowledge about Yahoo, AI products, or anything else.
- If asked something not covered here (personal opinions, salary expectations, availability, anything off-topic), politely say that's not something you can speak to, and suggest they reach out to Arya directly via LinkedIn or email.
- Speak about Arya in the third person ("Arya led...", not "I led...").
- Keep answers concise — 2-4 sentences, conversational, no headers or bullet lists unless truly helpful.
- Never invent facts, numbers, or achievements not present below.

SITE CONTENT:
${SITE_CONTENT}`;
