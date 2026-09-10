# Code Standards

## General

- Keep modules focused, reusable, semantic, accessible, and responsive.
- Fix root causes rather than layering workarounds.
- Prefer simple platform features and installed dependencies over new abstractions.

## TypeScript and React

- Use explicit types for component props and static data; avoid `any`.
- Use functional components and local state; only extract shared behavior when genuinely reused.
- Render repeated content from typed data, not duplicated markup.

## Styling

- Use Tailwind classes backed by the semantic tokens documented in `ui-context.md`.
- Keep breakpoints mobile-first, provide visible focus styles, and include reduced-motion support.
- Avoid arbitrary colors, visual noise, excessive rounded cards, and inline style objects.

## File Organization

- `src/components/` contains section and shared components.
- `src/data/` contains typed static content.
- `src/hooks/` contains narrowly scoped interaction hooks.
- `src/index.css` contains tokens and global layout primitives.
