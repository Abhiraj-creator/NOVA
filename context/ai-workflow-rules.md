# AI Workflow Rules

## Approach

Build NOVA incrementally against the context files: establish the project and design system first, then global layout and core product storytelling, then remaining sections, interactions, responsive QA, accessibility, polish, and documentation.

## Scoping Rules

- Work in cohesive frontend units; do not introduce a backend for presentation-only behavior.
- Prefer native HTML/CSS and existing dependencies before adding a library.
- Resolve an architectural or visual decision in the relevant context file before implementing it.

## Before Moving Forward

1. Verify the current unit does not violate architecture invariants.
2. Check responsive behavior and keyboard access for the relevant controls.
3. Update `context/progress-tracker.md` after meaningful progress.
4. Run the most specific appropriate validation, culminating in a production build.
