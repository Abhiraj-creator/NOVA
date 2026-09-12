# NOVA

NOVA is a fictional AI-powered productivity platform for teams, presented as a premium, frontend-only product landing page.

## Overview

The site explains how one workspace can connect project management, collaboration, AI assistance, workflow automation, analytics, scheduling, and integrations. All product data, teams, testimonials, metrics, and plans are fictional.

## Screenshots

![NOVA hero section](./public/Screenshot%202026-09-11%20214443.png)
![NOVA capabilities section](./public/Screenshot%202026-09-11%20214453.png)
![NOVA workflow section](./public/Screenshot%202026-09-11%20214509.png)
![NOVA pricing section](./public/Screenshot%202026-09-11%20214519.png)
![NOVA team notes section](./public/Screenshot%202026-09-11%20214528.png)
![NOVA product metrics section](./public/Screenshot%202026-09-11%20214545.png)
![NOVA product overview section](./public/Screenshot%202026-09-11%20214555.png)
![NOVA resource FAQ section](./public/Screenshot%202026-09-11%20214607.png)

## Features

- Editorial product landing page with original React-built product mockups
- Eight product capabilities, interactive product tabs, and use-case views
- Responsive navigation, smooth scrolling, FAQ accordion, pricing toggle, and testimonial carousel
- Demo modal, animated GSAP reveals, newsletter validation, and back-to-top control

## Tech Stack

- React, Vite, and TypeScript
- Tailwind CSS
- GSAP
- Lenis
- Lucide React

## Design

NOVA uses an original, restrained editorial technology-product language: near-black and warm-white surfaces, controlled pink accents, strong typography, subtle borders, and built-in product visualizations. It takes broad visual discipline from contemporary AI-infrastructure sites such as Cerebrium without copying their layouts, assets, or content.

## Short Explanation

### Design Decisions

I designed NOVA as a premium technology-product site instead of a typical AI SaaS template. I used a near-black and warm-white palette with one pink accent so that calls to action, important states, and product data stand out without making the page feel noisy. The hero uses a built-in interactive product mockup rather than a stock dashboard, and the layout alternates between editorial statements, product views, timelines, and focused cards to keep a clear visual rhythm.

### Technology Choices

I chose React with Vite and TypeScript because it provides a fast development setup while keeping the UI components and data type-safe. Tailwind CSS keeps the responsive styling consistent, GSAP handles subtle motion and number animations, Lenis improves scroll behavior, and Lucide React provides a consistent icon set. I kept the project frontend-only because the assignment focuses on product presentation and interaction rather than backend infrastructure.

### Component Structure

The application is split into reusable components and section components. Shared pieces such as the navbar, modal, reveal animation, brand mark, and product canvas live in `src/components/`. Page-specific layouts live in `src/components/sections/`, while fictional product content, pricing, testimonials, FAQs, and use cases are stored as typed data in `src/data/site.ts`. This makes the interface easier to maintain and avoids duplicated markup.

### Challenges Faced

The main challenge was making a fictional product feel believable without using real APIs, customer claims, or a backend. I solved this by building the product interface directly in React and giving the visible controls useful local-demo feedback: tabs switch workspace views, tasks can be completed, AI actions show feedback, pricing changes with billing frequency, and navigation remains functional. Another challenge was maintaining navbar contrast across light and dark sections, so the sticky navbar checks the underlying themed section and adapts its translucent glass treatment.

### How AI Tools Were Used

I used AI tools as a development assistant for planning the component structure, refining copy, checking implementation ideas, and speeding up repetitive coding work. I reviewed the generated suggestions, adapted them to the project requirements, and kept the final architecture, styling decisions, interactions, and documentation aligned with the assignment. AI was used to assist the work, not to replace design or engineering decisions.

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

- `src/components/` — reusable UI, product visualizations, and landing sections
- `src/data/` — typed fictional site content
- `src/index.css` — design tokens and global styles
- `context/` — project, architecture, UI, code, and progress documentation

## Responsive Support

The site is designed mobile-first for phone, tablet, and desktop layouts. Navigation collapses into an accessible mobile menu, layouts reflow without horizontal scrolling, and product mockups simplify at narrow widths.

## Accessibility

Semantic sections and controls, keyboard-focused buttons, visible focus rings, labelled form controls, ARIA-expanded accordion and navigation states, modal Escape handling, and reduced-motion support are included.

## Performance

The site uses static typed content, local UI state, CSS layout primitives, and subtle client-side animation only. It has no API calls, backend, or global state library, and the production build is verified with `npm run build`.

## AI Tools Used

This project was developed with AI assistance. The implementation and product content were reviewed and adapted for the assignment specification.

## Evaluation Readiness

| Evaluation Area | Evidence in NOVA |
| --- | --- |
| UI / Visual Design — 20 | Original editorial system, controlled palette, strong typography, and realistic product mockups |
| Responsive Design — 15 | Mobile navigation, responsive grids, reflowing layouts, and simplified product UI at narrow widths |
| HTML / CSS Quality — 15 | Semantic HTML, Tailwind styling, reusable CSS tokens, focus states, and reduced-motion support |
| JavaScript / React — 15 | Typed local state for menus, tabs, FAQ, pricing, carousel, modal, forms, and demo actions |
| Component Architecture — 10 | Reusable shared components, section-level composition, and typed static content |
| Functionality — 10 | Working navigation, smooth scrolling, modal, accordion, carousel, pricing switcher, form validation, and back-to-top control |
| Accessibility — 5 | Semantic controls, keyboard focus, ARIA states, modal Escape/focus handling, and reduced motion |
| Performance — 5 | Vite production build, static content, local state, and restrained animation workload |
| Code Organization — 5 | Separate components, sections, data, global styles, and context documentation |
| Documentation — 5 | README, architecture, UI, code standards, workflow, and progress documents |

The project also includes bonus-oriented work through adaptive glass navigation, GSAP microinteractions, smooth Lenis scrolling, interactive product mockups, and accessibility-aware motion behavior.

## Future Improvements

- Real authentication and workspace data
- AI backend and permission-aware context retrieval
- Live integrations, billing, and analytics
