# NOVA

NOVA is a fictional AI-powered productivity platform for teams, presented as a premium, frontend-only product landing page.

## Overview

The site explains how one workspace can connect project management, collaboration, AI assistance, workflow automation, analytics, scheduling, and integrations. All product data, teams, testimonials, metrics, and plans are fictional.

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

The site uses static typed content, local UI state, CSS layout primitives, and subtle client-side animation only. It has no image payload, API calls, backend, or global state library.

## AI Tools Used

This project was developed with AI assistance. The implementation and product content were reviewed and adapted for the assignment specification.

## Future Improvements

- Real authentication and workspace data
- AI backend and permission-aware context retrieval
- Live integrations, billing, and analytics
