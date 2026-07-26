# aryasachar.com

Personal PM portfolio for Arya Sachar. Next.js 16 (App Router) + TypeScript + Tailwind v4.

## Design tokens (app/globals.css)
- Font: Verdana
- Accent: #4F46E5 (light) / #6366F1 (dark)
- Text primary: #111827 / #F3F4F6
- Text muted: #6B7280 / #9CA3AF
- Border: #E5E7EB / #2A2A2E
- Background: #FFFFFF / #0F0F0F, Surface: #F9FAFB / #17171A

## Structure
- `app/` — routes (Home, Work, About, Resume, 6 case studies under `app/work/[slug]`)
- `components/` — Nav, Footer, ThemeToggle, Container, WorkRow, ComingSoon
- `lib/case-studies.ts` — shared case study data used by Home + Work

## Status
Design system, navigation, dark mode, and all 10 routes are scaffolded.
Page copy is placeholder pending final resume/case study content — see
`// NOTE:` comments in `app/about/page.tsx`, `app/resume/page.tsx`, and
`lib/case-studies.ts`.

## Deploying
This project has no Git repo attached on purpose. To deploy: go to
vercel.com/drop and drag this folder (or the .zip it came in) into the
browser. Vercel detects Next.js and builds it automatically.
