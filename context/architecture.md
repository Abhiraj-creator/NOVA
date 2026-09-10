# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | React + Vite + TypeScript | Single-page frontend application |
| Styling | Tailwind CSS | Token-driven responsive styling |
| Motion | GSAP | Purposeful reveal and UI transitions |
| Scrolling | Lenis | Smooth anchor scrolling |
| Icons | Lucide React | Consistent accessible interface icons |

## System Boundaries

- `src/components/` owns reusable page and product-visual components.
- `src/data/` owns static fictional content rendered by the sections.
- `src/hooks/` owns small browser interaction hooks when a component does not own the behavior.
- `src/` owns SPA composition, global tokens, and the entry point.

## Data and State

- Static typed TypeScript objects provide all content.
- Local React state manages navigation, pricing, product/use-case tabs, FAQ, carousel, modal, and form validation.
- No storage, authentication, backend, or external service is required.

## Invariants

1. Never imply fictional product data, customers, testimonials, or metrics are verified real claims.
2. Interactions work without fake API calls or a backend.
3. Shared design tokens, responsive behavior, and accessibility remain consistent across sections.
4. Browser controls are semantic and keyboard-accessible.
