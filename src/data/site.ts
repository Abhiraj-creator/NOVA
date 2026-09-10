import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  CalendarClock,
  GitBranch,
  Layers3,
  MessageSquareText,
  Sparkles,
  Workflow,
} from "lucide-react";

export type ProductView = "overview" | "projects" | "ai" | "analytics";
export type UseCaseKey =
  | "product"
  | "engineering"
  | "marketing"
  | "operations"
  | "startups"
  | "remote";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  number: string;
}
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}
export interface PricePlan {
  name: string;
  monthly: number;
  description: string;
  features: string[];
  featured?: boolean;
}

export const navItems = [
  { label: "Product", target: "product" },
  { label: "Solutions", target: "solutions" },
  { label: "Pricing", target: "pricing" },
  { label: "Resources", target: "faq" },
];

export const features: Feature[] = [
  {
    number: "01",
    title: "AI workspace",
    description:
      "Ask in plain language. Get context, a clear answer, and a useful next step.",
    icon: Bot,
  },
  {
    number: "02",
    title: "Connected projects",
    description:
      "Keep milestones, owners, timelines, and work in one operating view.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Tasks from intent",
    description:
      "Turn a decision, brief, or conversation into tasks your team can act on.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Workflow automation",
    description:
      "Move work forward when a task changes state—without chasing updates.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Team context",
    description:
      "Comments, activity, and decisions stay alongside the work they affect.",
    icon: MessageSquareText,
  },
  {
    number: "06",
    title: "Work intelligence",
    description:
      "Find bottlenecks, workload risks, and the projects that need attention.",
    icon: BarChart3,
  },
  {
    number: "07",
    title: "Smart scheduling",
    description:
      "Plan capacity around priorities, deadlines, and how the team actually works.",
    icon: CalendarClock,
  },
  {
    number: "08",
    title: "Integrations",
    description:
      "Bring the tools your team already uses into a coherent work system.",
    icon: GitBranch,
  },
];

export const stats = [
  { value: "42K+", label: "fictional tasks automated" },
  { value: "96%", label: "fictional team adoption" },
  { value: "3.2M", label: "fictional work items processed" },
  { value: "38%", label: "fictional less coordination time" },
];

export const useCases: Record<
  UseCaseKey,
  {
    label: string;
    title: string;
    description: string;
    points: string[];
    metric: string;
    view: ProductView;
  }
> = {
  product: {
    label: "Product",
    title: "One source of truth from idea to launch.",
    description:
      "Give every initiative a shared plan, a visible signal, and fewer handoffs.",
    points: [
      "Tie goals to delivery work",
      "Surface launch risks early",
      "Keep decisions in context",
    ],
    metric: "84% launch readiness",
    view: "overview",
  },
  engineering: {
    label: "Engineering",
    title: "Keep product work connected from planning to deployment.",
    description:
      "NOVA turns dependencies into an operational view engineering teams can trust.",
    points: [
      "Track delivery blockers",
      "Sync milestones and releases",
      "Protect focus time",
    ],
    metric: "12 active releases",
    view: "projects",
  },
  marketing: {
    label: "Marketing",
    title: "Make every campaign easier to coordinate.",
    description:
      "See briefs, reviews, launch dates, and results without rebuilding the plan each week.",
    points: [
      "Brief to campaign workflow",
      "Clear review ownership",
      "Cross-channel visibility",
    ],
    metric: "18 campaign moments",
    view: "analytics",
  },
  operations: {
    label: "Operations",
    title: "Build repeatable work that stays adaptable.",
    description:
      "Design workflows once, then let NOVA handle the routine coordination around them.",
    points: [
      "Reliable approvals",
      "Visible handoffs",
      "Capacity-aware planning",
    ],
    metric: "28 live workflows",
    view: "projects",
  },
  startups: {
    label: "Startups",
    title: "Move quickly without losing the thread.",
    description:
      "A lightweight operating system for teams turning momentum into sustainable habits.",
    points: [
      "A shared weekly pulse",
      "Flexible project views",
      "Simple team rituals",
    ],
    metric: "6 teams aligned",
    view: "overview",
  },
  remote: {
    label: "Remote",
    title: "Make async work feel less distant.",
    description:
      "Context travels with the work, so progress does not depend on another meeting.",
    points: ["Decision trails", "Timezone-ready updates", "Clear ownership"],
    metric: "9h of async coverage",
    view: "ai",
  },
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "NOVA gave our team one place to understand what was moving, what was blocked, and what needed attention next.",
    name: "Aarav Mehta",
    role: "Product Lead, Tidal Works",
    initials: "AM",
  },
  {
    quote:
      "The useful part is not another dashboard. It is the context that appears when a project starts to drift.",
    name: "Priya Sharma",
    role: "Engineering Manager, Etherline",
    initials: "PS",
  },
  {
    quote:
      "We spend less time asking for status and more time deciding what to do with it.",
    name: "Rohan Kapoor",
    role: "Founder, Birch & Co.",
    initials: "RK",
  },
];

export const pricePlans: PricePlan[] = [
  {
    name: "Starter",
    monthly: 799,
    description:
      "For individuals and small teams finding their operating rhythm.",
    features: [
      "Up to 5 collaborators",
      "Projects and tasks",
      "AI workspace essentials",
      "Standard integrations",
    ],
  },
  {
    name: "Growth",
    monthly: 1999,
    description: "For growing teams that need clearer workflows and insight.",
    features: [
      "Up to 25 collaborators",
      "Workflow automation",
      "AI insights",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    monthly: 4999,
    description: "For organizations coordinating complex work at pace.",
    features: [
      "Unlimited collaborators",
      "Advanced controls",
      "Custom workflows",
      "Dedicated success partner",
    ],
  },
];

export const faqs = [
  [
    "What is NOVA?",
    "NOVA is a fictional, frontend-only product demonstration for an AI-powered team productivity platform.",
  ],
  [
    "Is NOVA suitable for small teams?",
    "Yes. The fictional Starter plan is designed around small teams that want a shared place to plan, prioritize, and collaborate.",
  ],
  [
    "How does the AI assistant work?",
    "In a real product it would use project permissions and workspace context. On this landing page, the AI responses are illustrative UI only.",
  ],
  [
    "Can NOVA automate workflows?",
    "Yes conceptually. The product mockups demonstrate how task updates can notify teams, update a project, or create the next action.",
  ],
  [
    "Does NOVA integrate with existing tools?",
    "The site presents integrations as a conceptual product capability only. No third-party APIs are connected.",
  ],
  [
    "Can I change my plan?",
    "This fictional pricing UI is designed around flexible plans. Billing and plan management are outside this frontend project scope.",
  ],
  [
    "Is there a free trial?",
    "The demo presents a 14-day fictional trial to illustrate the conversion journey. No sign-up service is connected.",
  ],
] as const;
