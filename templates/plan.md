You are the primary senior frontend engineer and UI implementation agent for this project.

Your task is to plan and build a polished, professional, internship-level company landing page for a fictional technology company called NOVA.

IMPORTANT:
Do NOT immediately start writing random UI code.

First understand the complete product, assignment requirements, design direction, architecture, context-file methodology, and implementation rules below.

The final result must feel like a real modern technology company website, not like a generic frontend assignment, AI SaaS template, or AI-generated landing page.

==================================================
1. PROJECT NAME
==================================================

NOVA

NOVA is a fictional AI-powered productivity platform for teams.

Core positioning:

"NOVA is an AI-powered productivity platform for teams that combines project management, collaboration, and intelligent automation."

The product helps teams:

- plan projects
- manage tasks
- collaborate
- automate repetitive workflows
- use AI to understand their work
- identify bottlenecks
- schedule work
- improve productivity

The website is a marketing/product landing page for NOVA.

This is primarily a FRONTEND project.

Do NOT build an unnecessary backend.

The website should demonstrate the product convincingly through:

- static/dummy product data
- React state
- interactive UI
- realistic product mockups
- animations
- responsive layouts
- frontend validation
- modals
- accordions
- pricing toggles
- carousels
- navigation
- visual product demonstrations

Only introduce backend functionality if it is genuinely necessary.

==================================================
2. ORIGINAL INTERNSHIP ASSIGNMENT REQUIREMENTS
==================================================

The final website MUST contain all of the following sections:

1. Navigation Bar
2. Hero
3. Trusted By / Company Logos
4. Features — minimum 6
5. Product / About
6. How It Works
7. Statistics
8. Solutions / Use Cases
9. Testimonials — minimum 3
10. Pricing — minimum 3 plans
11. FAQ — minimum 5 questions
12. Final CTA
13. Footer

Required interactions:

- Responsive navigation
- Mobile hamburger menu
- Smooth scrolling
- FAQ accordion
- Button hover effects
- Card hover effects
- Working navigation links

Bonus interactions/features that we WANT to implement where they genuinely improve the product:

- Dark/light mode if it can be integrated elegantly
- Animated statistics
- Scroll reveal animations
- Testimonial carousel
- Monthly/annual pricing toggle
- Demo modal
- Newsletter validation
- Back-to-top button
- Smooth scrolling using Lenis

Do not implement bonuses merely for the sake of having them.

Every interaction should feel intentional and professional.

==================================================
3. TECHNOLOGY STACK
==================================================

Use:

- React
- Vite
- TypeScript
- Tailwind CSS
- GSAP
- Lenis
- Lucide React

Recommended stack:

React + Vite + TypeScript
Tailwind CSS
GSAP
Lenis
Lucide React

Do NOT introduce unnecessary libraries.

Before adding another dependency, ask:

"Does this materially improve the project?"

If not, do not add it.

Use TypeScript properly.

Avoid:

- any unless absolutely unavoidable
- duplicated components
- giant components
- inline styling everywhere
- arbitrary magic values everywhere
- unnecessary state
- unnecessary libraries

==================================================
4. IMPORTANT DESIGN DIRECTION
==================================================

The visual direction is inspired by modern AI infrastructure/product companies, particularly Cerebrium.

Reference:

https://cerebrium.ai/

The user has also provided screenshots of the Cerebrium website as visual reference.

IMPORTANT:

We are NOT copying Cerebrium.

Use its DESIGN LANGUAGE and visual principles as inspiration.

Do NOT copy:

- logo
- exact copy
- exact illustrations
- exact graphics
- exact product
- exact customer names
- exact testimonials
- exact claims
- exact layouts pixel-for-pixel
- proprietary assets

NOVA must have its own identity.

The desired aesthetic is:

- editorial
- premium
- technical
- modern
- product-oriented
- infrastructure/product-company feel
- typography-led
- restrained
- sophisticated
- minimal but visually interesting
- strong contrast
- intentional whitespace
- realistic product visualizations
- subtle purposeful animation

The website should feel like a serious technology company.

Think:

Cerebrium-inspired visual discipline
+
Linear-like product clarity
+
modern AI infrastructure/product storytelling
+
NOVA's own brand identity

==================================================
5. ABSOLUTELY AVOID GENERIC AI SAAS DESIGN
==================================================

This is one of the most important requirements.

DO NOT create a generic AI SaaS website.

Avoid the following:

- purple gradient backgrounds
- blue/purple glowing blobs
- rainbow gradients
- gradient text everywhere
- excessive neon
- excessive glassmorphism
- floating AI sparkles
- random glowing orbs
- generic robot illustrations
- generic AI brain illustrations
- "The future of AI is here" copy
- "Revolutionize your workflow with AI" cliché copy
- excessive rounded cards
- every section being a 3-column card grid
- every card having a gradient
- excessive shadows
- excessive border radius
- meaningless decorative shapes
- random 3D blobs
- stock illustrations
- generic dashboard screenshots
- Dribbble-style visual noise
- excessive animation
- animations that distract from content

The website should NOT look like an AI-generated template.

==================================================
6. COLOR SYSTEM
==================================================

Use a controlled semantic color system.

Recommended visual direction:

Primary:
- near-black / black

Secondary:
- deep navy / charcoal

Surface:
- warm white / off-white

Text:
- near-black on light surfaces
- white/off-white on dark surfaces

Accent:
- ONE controlled energetic accent inspired by the magenta/pink direction of the visual reference

Do NOT use five or six accent colors.

Do NOT randomly invent colors section by section.

Create semantic design tokens such as:

--background
--foreground
--surface
--surface-muted
--border
--text-primary
--text-secondary
--accent
--accent-foreground
--dark-background
--dark-foreground

Use these consistently.

The exact hex values should be selected carefully and documented in the UI context.

The color system should support a cohesive brand.

The accent should be used intentionally for:

- CTAs
- active states
- important labels
- highlights
- selected tabs
- small visual details
- key data points

It should NOT cover the entire website.

==================================================
7. TYPOGRAPHY
==================================================

Typography is a major part of NOVA's identity.

Use a modern clean sans-serif / grotesk-style typography system.

Prioritize:

- large editorial hero typography
- strong headings
- controlled line lengths
- readable body text
- clear hierarchy
- compact UI typography

The hero should have a visually powerful headline.

Do NOT use oversized typography without hierarchy.

Do NOT make every heading gigantic.

Create semantic typography levels:

- display
- h1
- h2
- h3
- body-large
- body
- body-small
- eyebrow
- label
- navigation
- button

Typography should feel intentional and premium.

==================================================
8. BRAND PERSONALITY
==================================================

NOVA should communicate:

- intelligence
- clarity
- speed
- confidence
- precision
- productivity
- modern technology
- trust
- calm sophistication

The tone should be:

- concise
- confident
- intelligent
- direct
- modern

Avoid exaggerated marketing language.

Avoid empty buzzwords.

Bad:

"Revolutionize your workflow with next-generation AI-powered innovation."

Better:

"Work moves faster when intelligence is built into the workflow."

Use copy that communicates a concrete benefit.

==================================================
9. PRODUCT DEFINITION
==================================================

NOVA combines:

1. Project management
2. Task management
3. Team collaboration
4. AI assistance
5. Workflow automation
6. AI analytics
7. Smart scheduling
8. Integrations

The core workflow is:

PLAN
→
ORGANIZE
→
COLLABORATE
→
AUTOMATE
→
ANALYZE
→
ACCELERATE

The product should feel like a real platform rather than a fictional marketing concept.

==================================================
10. FEATURES
==================================================

Use these 8 primary features:

1. AI Assistant

An AI workspace that understands project context and helps with:

- planning
- writing
- summarization
- research
- task creation
- project questions

2. Project Management

Teams organize:

- projects
- milestones
- tasks
- deadlines
- owners
- progress

3. Intelligent Task Management

Turn instructions/conversations into actionable tasks.

Example:

"Launch the new website by October 20."

NOVA can help create:

- Design homepage
- Implement frontend
- QA
- Deploy
- Monitor

4. Workflow Automation

Example:

Task completed
→ notify team
→ update project
→ create next task

5. Team Collaboration

Support the conceptual UI for:

- comments
- mentions
- activity
- shared workspaces

6. AI Insights

NOVA identifies:

- delays
- workload issues
- bottlenecks
- project health
- productivity patterns

7. Smart Scheduling

AI-assisted:

- prioritization
- scheduling
- workload planning

8. Integrations

Visual integration ecosystem such as:

- Slack
- GitHub
- Google Drive
- Notion
- Jira
- Figma

These integrations are conceptual/demo visuals only.

Do NOT implement actual APIs unless necessary.

==================================================
11. PRODUCT UI VISUALIZATION
==================================================

This is one of the most important parts of the website.

Do NOT use a generic stock dashboard image.

Build the product UI using React components.

The main product visualization should combine:

A. Project management dashboard

and

B. AI workspace

Example conceptual dashboard:

--------------------------------------------------
NOVA
--------------------------------------------------
Sidebar

Overview
Projects
Tasks
AI Workspace
Analytics
Settings

Main area:

Good morning, Arjun

Product launch

Progress: 84%

Tasks
24

Team activity

Project timeline

Recent activity
--------------------------------------------------

AI workspace concept:

--------------------------------------------------
NOVA AI

"What is blocking the product launch?"

--------------------------------------------------

NOVA response:

"I found 3 potential blockers."

1. API integration
2. Design review
3. QA dependency

Suggested actions:
[Create tasks]
[Notify team]
[View project]
--------------------------------------------------

The actual UI does not have to exactly follow this example.

Improve it.

Make the product mockup visually sophisticated.

Use:

- realistic spacing
- subtle borders
- small UI labels
- progress indicators
- charts
- status pills
- avatars
- activity items
- task rows
- tabs
- AI response blocks
- data visualization
- meaningful micro-interactions

The product UI should look like a believable SaaS product.

==================================================
12. WEBSITE STRUCTURE
==================================================

Build the website in this order:

01 Navbar

02 Hero

03 Trusted By

04 Features

05 Product / About

06 How It Works

07 Statistics

08 Solutions / Use Cases

09 Testimonials

10 Pricing

11 FAQ

12 Final CTA

13 Footer

==================================================
13. NAVBAR
==================================================

Desktop navigation should be restrained and premium.

Suggested structure:

NOVA

Product
Solutions
Pricing
Resources

Log in
Get started

Mobile:

NOVA
hamburger

The mobile menu should:

- animate open/closed
- cover the appropriate viewport area
- prevent awkward scrolling while open if necessary
- close after navigation
- be keyboard accessible

Navigation links MUST work.

Suggested section mapping:

Product → Product section
Solutions → Solutions section
Pricing → Pricing section
Resources → FAQ/resources/footer area

Get started → Final CTA

Log in → frontend demo interaction/modal or suitable destination

Do not create fake dead links.

==================================================
14. HERO SECTION
==================================================

The hero is the strongest section.

Desired feeling:

Large editorial headline.

Possible direction:

"Work moves faster when intelligence is built into the workflow."

Do not necessarily use that exact wording if a stronger original version emerges.

Supporting copy should explain NOVA clearly.

CTA examples:

Start with NOVA
See how it works

The hero should use:

- strong typography
- controlled accent
- dark background
- subtle motion
- product visualization or abstract system visualization
- generous whitespace

Do NOT make the hero a generic SaaS hero with:

text left
+
random gradient illustration right

Instead, explore a more editorial composition.

The hero visual can contain:

- layered product UI
- workflow nodes
- dashboard fragments
- AI interface
- subtle data movement
- controlled accent elements

But keep it sophisticated.

==================================================
15. TRUSTED BY
==================================================

Use fictional companies.

Do NOT claim these are real customers.

Create visually believable fictional company wordmarks.

Possible conceptual names:

- Vertex Labs
- Aster Systems
- OrbitPay
- Northstar
- Kinetic
- Vela

You may improve these names.

Do NOT accidentally represent real companies as NOVA customers.

The visual should be understated.

==================================================
16. FEATURES SECTION
==================================================

Do NOT render all eight features as identical cards.

Use editorial/product layouts.

Example:

Feature 1:
Large AI workspace visualization

Feature 2:
Automation workflow visualization

Feature 3:
Analytics visualization

Feature 4:
Task management visualization

Then smaller supporting feature blocks.

The exact composition is up to you.

The important requirement:

Break the repetitive card-grid pattern.

==================================================
17. PRODUCT / ABOUT SECTION
==================================================

Core idea:

One workspace.
More context.
Less coordination overhead.

Explain what NOVA does and why it exists.

Show a realistic NOVA product interface.

Use tabs or interactive states if useful.

Possible product tabs:

Overview
Projects
AI Workspace
Analytics

Switching tabs can change the displayed UI.

This should be a frontend interaction.

==================================================
18. HOW IT WORKS
==================================================

Use 4 steps:

01 Connect

Bring projects, teams and tools together.

02 Organize

NOVA understands your work structure.

03 Automate

Turn repetitive workflows into automated processes.

04 Accelerate

Use AI insights to make better decisions.

This section should visually communicate progression.

Avoid four generic cards.

Consider:

- timeline
- horizontal progression
- animated connector
- sticky visual
- changing product visualization

Use Framer Motion carefully.

==================================================
19. STATISTICS
==================================================

Use fictional product statistics.

Example:

42K+
tasks automated

96%
team adoption

3.2M
work items processed

38%
less coordination time

These are fictional marketing values for the fictional product.

Do not represent them as real verified data.

Statistics should animate into view.

Use Framer Motion or an efficient number animation implementation.

Do not create overly flashy counters.

==================================================
20. SOLUTIONS / USE CASES
==================================================

Use cases:

- Product Teams
- Engineering
- Marketing
- Startups
- Operations
- Remote Teams

Prefer an interactive tabbed layout over six identical cards.

Example:

Selected tab:

ENGINEERING

Headline:

"Keep product work connected from planning to deployment."

Visual:

Engineering workspace.

Other tabs:

Product
Marketing
Operations
Startups
Remote

Changing tabs should update:

- heading
- description
- relevant visual
- metrics or supporting points

This creates a meaningful interaction.

==================================================
21. TESTIMONIALS
==================================================

Use fictional Indian people.

Minimum 3.

Example profiles:

Aarav Mehta
Product Lead

Priya Sharma
Engineering Manager

Rohan Kapoor
Founder

These are fictional.

Create believable short testimonials.

Avoid unrealistic claims.

Example style:

"NOVA gave our team one place to understand what was moving, what was blocked, and what needed attention next."

Make the testimonial section feel human.

Implement a carousel if it improves desktop/mobile UX.

Mobile should work especially well.

==================================================
22. PRICING
==================================================

Use fictional INR pricing.

Minimum 3 plans.

Recommended:

STARTER
₹799 / month

For individuals and small teams.

GROWTH
₹1,999 / month

For growing teams.

SCALE
₹4,999 / month

For larger organizations.

You may improve the exact numbers if needed, but keep them fictional and realistic.

Include:

Monthly
Yearly

toggle.

Yearly should demonstrate savings.

For example:

Save 20% annually.

Pricing cards should clearly show:

- plan name
- price
- description
- features
- CTA
- highlighted/recommended plan

Do not overdesign the cards.

==================================================
23. FAQ
==================================================

At least 5.

Prefer 7:

1. What is NOVA?
2. Is NOVA suitable for small teams?
3. How does the AI assistant work?
4. Can NOVA automate workflows?
5. Does NOVA integrate with existing tools?
6. Can I change my plan?
7. Is there a free trial?

Use an accessible accordion.

Requirements:

- only appropriate items open
- smooth animation
- keyboard accessible
- aria-expanded
- semantic buttons
- clear focus states

Do not use div click handlers for accordion controls.

==================================================
24. FINAL CTA
==================================================

Strong editorial CTA.

Possible direction:

"Your team's next phase starts here."

CTA:

Start with NOVA

Secondary:

Explore the platform

Use strong contrast.

This should visually conclude the story.

==================================================
25. FOOTER
==================================================

Footer should include:

NOVA

Product
- Overview
- Projects
- AI Workspace
- Analytics

Solutions
- Product Teams
- Engineering
- Marketing
- Operations

Resources
- Docs
- Blog
- Guides
- FAQ

Company
- About
- Careers
- Contact

Legal
- Privacy
- Terms

Newsletter:

"Get product updates."

Email input
Subscribe button

Implement frontend validation.

Invalid email:

"Please enter a valid email address."

Valid:

"You're on the list."

No backend required.

==================================================
26. ANIMATION SYSTEM
==================================================

Use Framer Motion.

Animation should be:

- subtle
- smooth
- intentional
- product-oriented

Do NOT animate everything.

Use animation for:

- hero entrance
- section reveal
- product UI transitions
- tabs
- cards where appropriate
- statistics
- FAQ open/close
- mobile menu
- modal
- carousel
- CTA microinteractions

Use viewport-aware animations.

Avoid:

- excessive bouncing
- huge scaling
- spinning objects
- constant floating animations
- distracting parallax
- 5-second delays
- animations that hurt usability

Respect:

prefers-reduced-motion

If the user prefers reduced motion, significantly reduce or disable nonessential animation.

==================================================
27. LENIS
==================================================

Use Lenis for smooth scrolling.

Integrate it cleanly with the React application lifecycle.

Do not create multiple Lenis instances.

Ensure:

- proper cleanup
- requestAnimationFrame integration
- compatibility with Framer Motion
- no broken anchor navigation

Anchor navigation should feel smooth.

Do not sacrifice accessibility for smooth scrolling.

==================================================
28. RESPONSIVENESS
==================================================

This is a critical evaluation area.

The website MUST work on:

- large desktop
- laptop
- tablet
- mobile

Test approximately:

1440px
1280px
1024px
768px
480px
390px
360px

No:

- horizontal scrolling
- overlapping content
- clipped buttons
- broken grids
- oversized product UI
- text overflowing
- inaccessible mobile menu
- unreadable typography

Do not simply shrink the desktop layout.

Design responsive compositions intentionally.

For example:

Desktop:

Editorial two-column layout.

Mobile:

Stacked layout with different spacing and hierarchy.

Large product mockups should scale or crop intelligently.

Do not force enormous desktop mockups into a tiny mobile screen.

==================================================
29. ACCESSIBILITY
==================================================

Accessibility is part of the evaluation.

Implement:

- semantic HTML
- nav
- main
- section
- footer
- buttons
- headings in logical order
- aria labels where necessary
- aria-expanded for accordion
- keyboard navigation
- visible focus states
- accessible forms
- meaningful alt text
- decorative images marked appropriately
- sufficient contrast
- reduced-motion support

Do not use:

<div onClick={...}>

when a button is appropriate.

Use buttons for interactions.

Links for navigation.

==================================================
30. COMPONENT ARCHITECTURE
==================================================

Keep components reusable.

Recommended structure:

src/
  components/
    Navbar/
    Button/
    SectionHeading/
    FeatureCard/
    PricingCard/
    TestimonialCard/
    FAQItem/
    StatCard/
    Footer/

  sections/
    Hero/
    TrustedBy/
    Features/
    Product/
    HowItWorks/
    Statistics/
    Solutions/
    Testimonials/
    Pricing/
    FAQ/
    FinalCTA/

  data/
    features.ts
    pricing.ts
    testimonials.ts
    faq.ts
    solutions.ts

  hooks/

  lib/

  assets/

  App.tsx
  main.tsx
  index.css

This structure can be modified if a better architecture is identified.

Do not over-componentize tiny pieces that do not benefit from reuse.

For example, do not create a separate component for every single text span.

==================================================
31. DATA-DRIVEN RENDERING
==================================================

Use arrays/objects for repeated content.

For example:

features.ts

pricing.ts

faq.ts

testimonials.ts

solutions.ts

Then map through them.

Do NOT hardcode seven separate FAQ structures.

Do NOT duplicate pricing card markup three times.

Do NOT duplicate testimonial markup.

This is important because the reviewer may ask:

"How would you add another pricing plan?"

The answer should be:

"Add another object to the pricing data."

==================================================
32. STATE MANAGEMENT
==================================================

Do NOT introduce Redux unless the application genuinely requires global state.

This is a landing page.

Use local React state for:

- mobile menu
- FAQ
- pricing toggle
- testimonial carousel
- solutions tabs
- modal
- newsletter form
- theme toggle if implemented

Keep state close to where it is needed.

==================================================
33. DARK/LIGHT MODE
==================================================

Dark/light mode is optional.

If implemented, it must be elegant.

Do not create two completely different designs.

Use semantic tokens.

The default design can be dark/light depending on the final design direction.

The important thing is consistency.

If dark/light mode makes the design weaker or increases unnecessary complexity, prioritize the core design instead.

==================================================
34. ICONS
==================================================

Use Lucide React.

Do NOT use random emoji as UI icons.

Do NOT mix five icon libraries.

Icons should be:

- consistent
- restrained
- meaningful

==================================================
35. IMAGES / VISUAL ASSETS
==================================================

Prioritize CSS/React-generated product visualizations where practical.

Do not depend heavily on stock photography.

The website is about a software product.

Product UI > stock image.

If visual assets are needed:

- use appropriate original/simple assets
- keep them consistent
- avoid random image styles

Do not download random copyrighted assets without reason.

==================================================
36. PERFORMANCE
==================================================

Performance matters.

Avoid:

- huge images
- unnecessary dependencies
- unnecessary animation loops
- expensive scroll listeners
- unnecessary re-renders
- massive SVGs
- unnecessary JavaScript

Use:

- lazy loading where appropriate
- CSS where animation is simpler
- efficient Framer Motion usage
- optimized assets
- semantic structure

Do not use JavaScript for something CSS can do efficiently.

==================================================
37. CODE QUALITY
==================================================

Write production-quality frontend code.

Requirements:

- meaningful names
- clean formatting
- TypeScript types
- small focused components
- no unnecessary duplication
- no dead code
- no console errors
- no unused imports
- no arbitrary hacks
- no giant App.tsx
- no magic constants scattered throughout the code

Avoid:

any

unless justified.

Do not leave TODOs for core assignment requirements.

==================================================
38. ROUTING / NAVIGATION
==================================================

This is primarily a single-page marketing website.

Do not introduce React Router unless genuinely useful.

Use anchor navigation.

Each major section must have a stable id:

#product
#solutions
#pricing
#resources
#faq
etc.

Ensure:

- nav links work
- CTA links work
- mobile links work
- smooth scrolling works
- URL hash behavior does not create weird positioning

==================================================
39. DEMO MODAL
==================================================

Implement a frontend demo interaction.

For example:

"See how it works"

opens a modal containing a fictional NOVA workflow/product demo.

The modal should:

- animate in
- have backdrop
- close button
- close on Escape
- optionally close on backdrop click
- trap focus if appropriate
- be keyboard accessible

Do not build a real video backend.

A polished simulated product walkthrough is sufficient.

==================================================
40. BACK TO TOP
==================================================

Implement a subtle back-to-top button.

It should:

- appear after scrolling
- animate in
- scroll smoothly to top
- be accessible
- not obstruct content

Do not show it permanently.

==================================================
41. DESIGN SYSTEM
==================================================

Before building sections, establish a consistent design system.

Define:

Colors
Typography
Spacing
Container widths
Border styles
Radii
Shadows
Buttons
Cards
Inputs
Badges
Tabs
Section spacing
Animation timing

Do not randomly choose styles section-by-section.

Example conceptual system:

Container:
max-width around 1200–1280px

Desktop horizontal padding:
32–48px

Mobile:
20–24px

Section spacing:
large and intentional

Radius:
mostly restrained, not excessive

Borders:
subtle

Shadows:
minimal

The exact values should be selected during implementation based on the visual system.

==================================================
42. LAYOUT PHILOSOPHY
==================================================

Do not make every section:

Heading
+
3 cards
+
button

Instead vary the composition.

Use:

- large editorial sections
- asymmetric layouts
- product mockups
- split layouts
- horizontal workflows
- interactive tabs
- data visualizations
- full-width statements
- controlled cards
- timelines
- product UI

The page should have visual rhythm.

==================================================
43. CONTENT STRATEGY
==================================================

All company/customer/testimonial/product statistics are fictional.

Never imply NOVA is a real company.

Never use real companies as fake customers.

Never fabricate real-world claims.

Use realistic fictional content.

Copy should be concise.

Avoid walls of text.

Each section should answer:

"What does the user need to understand here?"

==================================================
44. SEO BASICS
==================================================

Implement basic SEO:

- meaningful title
- meta description
- semantic headings
- proper language
- viewport configuration
- Open Graph metadata if practical

Title example:

NOVA — Intelligent work, without the busywork

Improve it if necessary.

==================================================
45. RESPONSIVE NAVIGATION BEHAVIOR
==================================================

Desktop:

Full navigation.

Tablet:

Potentially reduced spacing.

Mobile:

Hamburger.

Mobile menu should feel premium.

Example:

NOVA

Product
Solutions
Pricing
Resources

Log in

Get started

Use Framer Motion for opening/closing.

==================================================
46. UI MICROINTERACTIONS
==================================================

Use subtle microinteractions:

Buttons:

- slight movement
- background transition
- icon movement

Cards:

- slight translate
- border change
- visual emphasis

Tabs:

- active indicator

Links:

- underline or opacity transition

Do NOT exaggerate.

The site should feel responsive, not animated for animation's sake.

==================================================
47. FILES / CONTEXT METHODOLOGY
==================================================

The project is based on a context-driven methodology.

There is a provided ZIP containing context templates.

The context system includes:

context/project-overview.md
context/architecture.md
context/code-standards.md
context/ai-workflow-rules.md
context/ui-context.md
context/progress-tracker.md

There is also a templates/CLAUDE.md that defines the recommended context-reading order.

BEFORE major implementation work:

Read the existing context files if they exist.

The intended order is:

1. project-overview.md
2. architecture.md
3. ui-context.md
4. code-standards.md
5. ai-workflow-rules.md
6. progress-tracker.md

Do not blindly overwrite useful existing project information.

If the files are still blank templates, populate them based on this master specification.

Keep them synchronized with the actual implementation.

==================================================
48. PROJECT-OVERVIEW.MD
==================================================

Create/update it with:

Project:
NOVA

Overview:
AI-powered productivity platform for teams.

Goals:

- create a premium frontend landing page
- demonstrate frontend engineering ability
- demonstrate component architecture
- demonstrate responsive design
- demonstrate interaction design
- demonstrate accessibility
- demonstrate animation
- demonstrate product thinking

Core user flow:

Visitor lands on NOVA
→ understands value
→ explores product
→ sees use cases
→ evaluates pricing
→ reads FAQ
→ starts CTA

Features:

- AI Assistant
- Project Management
- Intelligent Task Management
- Workflow Automation
- Team Collaboration
- AI Insights
- Smart Scheduling
- Integrations

Scope:

IN:

- landing page
- responsive UI
- interactions
- frontend demo state
- product mockups
- animations
- accessibility
- newsletter frontend validation

OUT:

- real authentication
- real payments
- real AI API
- real integrations
- production database
- backend infrastructure
- real analytics platform

Success criteria:

- all required assignment sections implemented
- responsive
- no horizontal scroll
- polished visual design
- functional interactions
- accessible
- performant
- maintainable
- explainable in interview/review

==================================================
49. ARCHITECTURE.MD
==================================================

Document:

Stack:

React
Vite
TypeScript
Tailwind
Framer Motion
Lenis
Lucide React

Architecture:

Component-based React SPA.

Data:

Static TypeScript arrays/objects.

State:

Local React state unless global state becomes genuinely necessary.

Backend:

None initially.

Storage:

None required.

Authentication:

None required.

External services:

None required.

System boundary:

Frontend-only marketing/product demonstration.

Invariants:

- no fake API calls required
- no unnecessary backend
- all interactions must remain functional
- design system remains consistent
- responsive layout remains intact
- accessibility requirements must not be sacrificed

==================================================
50. UI-CONTEXT.MD
==================================================

Document the visual system.

Include:

Theme:
Premium editorial technology product.

Visual reference:
Cerebrium-inspired, but original NOVA implementation.

Palette:
Near-black
Warm white
Deep navy/charcoal
Controlled magenta/pink accent

Typography:
Modern grotesk/sans-serif.

Layout:
Editorial
Asymmetric where useful
Product-led
Generous whitespace

Components:
Restrained radius
Subtle borders
Minimal shadows

Animation:
Framer Motion
Subtle
Purposeful
Reduced-motion support

Scrolling:
Lenis

Icons:
Lucide React

Avoid:
Purple gradients
Generic AI SaaS
Excessive glassmorphism
Rainbow effects
Generic illustrations
Overly rounded cards

==================================================
51. CODE-STANDARDS.MD
==================================================

Document:

General principles:

- readable
- reusable
- maintainable
- semantic
- accessible
- responsive
- performant

TypeScript:

- explicit interfaces/types
- avoid any
- use discriminated types where useful
- typed component props

React:

- functional components
- hooks
- local state
- reusable components
- data-driven rendering

Styling:

- Tailwind
- semantic design tokens
- no random styles
- responsive-first thinking

Component organization:

- sections
- components
- data
- hooks
- utilities

Accessibility:

- semantic HTML
- keyboard support
- ARIA when necessary
- focus states
- reduced motion

==================================================
52. AI-WORKFLOW-RULES.MD
==================================================

This file should explicitly tell coding agents:

DO NOT immediately implement everything.

Workflow:

PHASE 0
Understand context.

PHASE 1
Plan architecture.

PHASE 2
Establish design system.

PHASE 3
Build global layout/navigation.

PHASE 4
Build hero/trusted/product sections.

PHASE 5
Build remaining sections.

PHASE 6
Implement interactions.

PHASE 7
Responsive QA.

PHASE 8
Accessibility QA.

PHASE 9
Performance/polish.

PHASE 10
Documentation/final review.

Before moving between phases:

- test current phase
- check responsive behavior
- ensure no regressions
- update progress tracker

If a requirement is ambiguous:

Do NOT hallucinate important product requirements.

Use the established project direction.

If a decision genuinely affects architecture or visual identity, document the decision.

==================================================
53. PROGRESS-TRACKER.MD
==================================================

Track:

Current phase
Current goal
Completed
In progress
Next
Open questions
Architecture decisions
Session notes

Start with:

Phase 0 — Planning

Then move to:

Phase 1 — Setup
Phase 2 — Design system
Phase 3 — Core layout
Phase 4 — Sections
Phase 5 — Interactions
Phase 6 — Responsive QA
Phase 7 — Accessibility
Phase 8 — Performance
Phase 9 — Documentation
Phase 10 — Final review

Keep this updated.

==================================================
54. IMPORTANT IMPLEMENTATION STRATEGY
==================================================

Do NOT build all sections at once.

Build incrementally.

Recommended order:

STEP 1
Inspect repository.

STEP 2
Inspect package.json and existing setup.

STEP 3
Inspect context files.

STEP 4
Create/update project context.

STEP 5
Confirm dependencies.

STEP 6
Create design tokens.

STEP 7
Create global typography/layout styles.

STEP 8
Build Navbar.

STEP 9
Build Hero.

STEP 10
Build Trusted By.

STEP 11
Build Features.

STEP 12
Build Product.

STEP 13
Build How It Works.

STEP 14
Build Statistics.

STEP 15
Build Solutions.

STEP 16
Build Testimonials.

STEP 17
Build Pricing.

STEP 18
Build FAQ.

STEP 19
Build Final CTA.

STEP 20
Build Footer.

STEP 21
Implement interactions.

STEP 22
Responsive testing.

STEP 23
Accessibility testing.

STEP 24
Performance optimization.

STEP 25
Final visual polish.

STEP 26
README.

==================================================
55. DO NOT OVER-ENGINEER
==================================================

This is a frontend internship project.

The goal is not to build a complete SaaS backend.

Do not waste time implementing:

- authentication backend
- database
- payment gateway
- real AI API
- real Slack integration
- real GitHub integration
- real user accounts
- complex state management
- unnecessary API architecture

Instead, make the frontend so polished that the fictional product feels real.

==================================================
56. IMPORTANT REVIEW CRITERIA
==================================================

The project will potentially be evaluated on:

UI Design
20%

Responsive Design
15%

HTML/CSS
15%

JavaScript/React
15%

Component Architecture
10%

Functionality
10%

Accessibility
5%

Performance
5%

Code Organization
5%

Documentation
5%

The implementation should explicitly optimize for these categories.

==================================================
57. EXPECTED REVIEW QUESTIONS
==================================================

The project may be reviewed by asking:

"Explain your component architecture."

"How does the mobile navbar work?"

"How did you implement the FAQ?"

"How does the pricing toggle work?"

"How is the data rendered?"

"Why did you choose React?"

"Why Vite?"

"Why TypeScript?"

"Why Framer Motion?"

"Why Lenis?"

"How is the page responsive?"

"How did you handle accessibility?"

"How would you convert this into production?"

"How would you connect the AI assistant to a backend?"

"How would you add authentication?"

"How would you add real payments?"

"How would you integrate an actual AI API?"

"How would you optimize performance?"

Therefore, code should be simple enough to explain.

==================================================
58. PRODUCTION CONVERSION THINKING
==================================================

Although this is frontend-only, structure the code so that it could later become a real application.

For example:

Current:

static feature data

Future:

API response

Current:

local FAQ state

Future:

CMS/content API

Current:

fake AI response

Future:

AI backend/API

Current:

frontend pricing

Future:

billing service

Do not implement the future architecture now.

Just avoid making the current architecture impossible to extend.

==================================================
59. README REQUIREMENTS
==================================================

Create a professional README containing:

# NOVA

Short description.

## Overview

What NOVA is.

## Features

List features.

## Tech Stack

React
Vite
TypeScript
Tailwind
Framer Motion
Lenis
Lucide

## Design

Explain that the website uses a modern editorial/product-infrastructure visual language inspired by contemporary AI infrastructure websites, particularly Cerebrium, while being an original NOVA design.

## Interactions

List:

- responsive navigation
- smooth scrolling
- FAQ accordion
- pricing toggle
- testimonial carousel
- demo modal
- animated stats
- newsletter validation
- back-to-top

## Project Structure

Explain the folders.

## Installation

Provide exact commands.

Example:

npm install

npm run dev

Use the actual package manager configured by the project.

## Build

Provide build command.

## Responsive Support

Desktop
Tablet
Mobile

## Accessibility

Explain key accessibility decisions.

## Performance

Explain key performance decisions.

## AI Tools Used

Mention AI-assisted development honestly.

Do not falsely claim manual implementation if AI was used.

## Future Improvements

Mention:

- real authentication
- backend
- AI API
- integrations
- billing
- analytics

==================================================
60. IMPORTANT: DO NOT HALLUCINATE
==================================================

Do not invent technical requirements that are not necessary.

Do not assume a backend exists.

Do not invent API endpoints.

Do not claim integrations are real.

Do not claim customer statistics are real.

Do not claim testimonials are real.

Do not use real companies as fake customers.

The following are intentionally fictional:

- NOVA
- customer companies
- testimonials
- statistics
- pricing
- product data

==================================================
61. VISUAL QUALITY BAR
==================================================

The final website should look like something that could plausibly be submitted as a serious frontend portfolio/internship project.

It should NOT look like:

"Student Assignment Website"

It should look like:

"Professional startup/product website."

Prioritize:

1. typography
2. spacing
3. visual hierarchy
4. product visualization
5. consistency
6. responsive behavior
7. interactions
8. accessibility
9. performance

Not:

1. number of animations
2. number of gradients
3. number of cards
4. number of decorative elements

==================================================
62. FINAL DESIGN TEST
==================================================

After implementation, ask:

Does this look like a generic AI SaaS website?

If YES:
Redesign the problematic parts.

Does it rely heavily on purple gradients?

If YES:
Remove them.

Does every section look like cards?

If YES:
Introduce more editorial/product layouts.

Does the product UI look fake?

If YES:
Improve its hierarchy and realism.

Does mobile look like compressed desktop?

If YES:
Redesign mobile composition.

Are animations distracting?

If YES:
Reduce them.

Is the accent color overused?

If YES:
Reduce it.

Does the website feel like NOVA has an actual product?

If NO:
Improve the product visualizations.

==================================================
63. FINAL QA CHECKLIST
==================================================

Before declaring the project complete, verify:

FUNCTIONALITY

[ ] Navbar works
[ ] Mobile hamburger works
[ ] Navigation links work
[ ] Smooth scrolling works
[ ] FAQ works
[ ] Pricing toggle works
[ ] Testimonial carousel works
[ ] Demo modal works
[ ] Newsletter validation works
[ ] Back-to-top works
[ ] CTA buttons work

RESPONSIVENESS

[ ] 1440px
[ ] 1280px
[ ] 1024px
[ ] 768px
[ ] 480px
[ ] 390px
[ ] 360px

[ ] No horizontal scroll
[ ] No overlap
[ ] No clipped content
[ ] No broken product mockups

ACCESSIBILITY

[ ] Semantic HTML
[ ] Keyboard navigation
[ ] Focus states
[ ] ARIA where needed
[ ] FAQ accessible
[ ] Modal accessible
[ ] Mobile menu accessible
[ ] Forms accessible
[ ] Reduced motion

CODE

[ ] No unnecessary any
[ ] No console errors
[ ] No unused imports
[ ] No dead code
[ ] No duplicated major markup
[ ] Components reusable
[ ] Data-driven repeated content
[ ] App.tsx not huge
[ ] Context files updated

DESIGN

[ ] No generic AI SaaS appearance
[ ] No excessive gradients
[ ] Controlled color system
[ ] Strong typography
[ ] Editorial composition
[ ] Realistic product UI
[ ] Consistent spacing
[ ] Consistent components
[ ] Good visual rhythm
[ ] Professional mobile design

PERFORMANCE

[ ] No unnecessary dependencies
[ ] No excessive animation loops
[ ] Optimized assets
[ ] Efficient rendering
[ ] Production build succeeds

DOCUMENTATION

[ ] README complete
[ ] Architecture documented
[ ] UI system documented
[ ] Code standards documented
[ ] AI workflow documented
[ ] Progress tracker updated

==================================================
64. FIRST ACTION — DO THIS BEFORE CODING
==================================================

DO NOT start implementing the landing page immediately.

First:

1. Inspect the repository.
2. Inspect all existing files.
3. Inspect package.json.
4. Inspect the provided context files.
5. Determine whether the React/Vite project is already initialized.
6. Determine whether Tailwind is already configured.
7. Determine what is missing.
8. Read the context files in the specified order.
9. Populate/update the context files using this specification.
10. Create a concise implementation plan.
11. Identify any conflicts between the existing repository and this specification.
12. Resolve only necessary conflicts.
13. Then begin implementation.

Do not ask unnecessary questions.

Most product/design decisions have already been made above.

If something is genuinely unspecified, choose the option that best fits the established NOVA design system and document the decision.

==================================================
65. WORKING STYLE
==================================================

Act as a senior frontend engineer.

Do not produce disposable code.

Think about:

- maintainability
- accessibility
- responsive design
- component reuse
- visual consistency
- performance
- developer experience
- future extensibility

Do not blindly follow the specification if you identify a technically superior approach.

However, if you change an important architectural or design decision:

1. Explain why.
2. Update the relevant context file.
3. Update progress tracker.

==================================================
66. IMPORTANT FINAL INSTRUCTION
==================================================

The objective is NOT simply:

"Build a landing page."

The objective is:

"Build a polished, original, highly responsive, interactive frontend experience for NOVA that satisfies every internship assignment requirement while demonstrating strong React architecture, TypeScript, responsive design, accessibility, animation, component reuse, and product/UI thinking."

The final website should feel:

premium
editorial
technical
confident
minimal
product-focused
modern
original

and specifically NOT:

generic
template-like
over-animated
gradient-heavy
AI-cliché
card-grid-heavy

Start by inspecting the repository and context files.

Then plan.

Then implement systematically.

Do not skip the planning/context stage.