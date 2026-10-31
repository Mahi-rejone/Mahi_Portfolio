# Mahi Portfolio

Personal portfolio built with Next.js (App Router), React 19, TypeScript and Tailwind CSS 4.
Animations use Framer Motion and GSAP, and smooth scrolling uses Lenis.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Script                 | What it does                      |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start the dev server              |
| `npm run build`        | Production build                  |
| `npm run start`        | Serve the production build        |
| `npm run lint`         | Run ESLint                        |
| `npm run typecheck`    | Run the TypeScript compiler       |
| `npm run format`       | Format all files with Prettier    |
| `npm run format:check` | Check formatting without changing |

## Project structure

```
src/
  app/                 Next.js routes: layout, page, global styles
  assets/images/       Images imported from code (optimised by next/image)
  components/
    layout/            Navbar, Footer, Container, SkipLink
    sections/          One folder per page section (Hero, Pitch, About, Skills, ...)
    ui/                Reusable pieces: Button, Badge, Tag, AnimatedText, SocialLinks, ...
    icons/             One file per SVG icon
    providers/         Client providers (smooth scrolling, reduced-motion)
    motion/            Scroll-driven effects
  config/              All site content, one file per section
  hooks/               Reusable React hooks
  lib/                 Helpers (scroll, fonts, cn)
  types/               Shared TypeScript types
public/                Files served as-is (logo, project screenshots, CV)
```

Import with the `@/` alias, which points at `src/`, for example `import Button from "@/components/ui/Button"`.

## Editing content

Nothing is hard-coded in the components. Edit the files in `src/config/`:

| File            | Controls                                          |
| --------------- | ------------------------------------------------- |
| `site.ts`       | Name, email, location, page title and description |
| `navigation.ts` | Nav links and the call-to-action label            |
| `social.ts`     | Social links and the CV file (empty URL = hidden) |
| `hero.ts`       | Headline, intro, badges                           |
| `pitch.ts`      | The dark "Need a developer" section               |
| `about.ts`      | Biography and stats                               |
| `skills.ts`     | Skill categories (a category with no items hides) |
| `projects.ts`   | Project cards                                     |
| `services.ts`   | Service cards                                     |
| `contact.ts`    | Contact section text                              |

Search the folder for `TODO` to find placeholders that still need real content.

### Images

- Portraits live in `src/assets/images/profile/` and are imported in the Hero and About sections.
- Project screenshots go in `public/images/projects/` and are referenced from `projects.ts`
  as `"/images/projects/name.webp"`.
- To offer a CV, put the file in `public/` and set its path in `social.ts`.

## Conventions

- Components use PascalCase file names and one component per file.
- Section folders have an `index.ts`, so you import `@/components/sections/About`.
- Components are server components unless they need state, effects or browser APIs
  (then they start with `"use client"`).
- Code is formatted with Prettier, including Tailwind class ordering. Run `npm run format` before committing.

## Deployment

Built for Vercel. Analytics and Speed Insights are already wired up in `src/app/layout.tsx`.
