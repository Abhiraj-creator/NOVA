import {
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import type { ProductView } from "../data/site";

interface ProductCanvasProps {
  view?: ProductView;
  compact?: boolean;
}

const taskRows = [
  {
    title: "Homepage QA review",
    owner: "PS",
    state: "In review",
    accent: true,
  },
  { title: "Release candidate", owner: "AK", state: "On track", accent: false },
  {
    title: "Help centre refresh",
    owner: "RM",
    state: "Blocked",
    accent: false,
  },
];

export function ProductCanvas({
  view = "overview",
  compact = false,
}: ProductCanvasProps) {
  const content =
    view === "ai" ? (
      <AiWorkspace />
    ) : view === "analytics" ? (
      <Analytics />
    ) : view === "projects" ? (
      <Projects />
    ) : (
      <Overview />
    );

  return (
    <div
      className={`product-panel overflow-hidden rounded-lg border border-[#34363c] bg-[#181a1f] text-white ${compact ? "text-xs" : ""}`}
    >
      <div className="flex items-center justify-between border-b border-[#34363c] px-4 py-3 text-[10px] text-[#a7a9ae]">
        <div className="flex items-center gap-3">
          <span className="font-bold tracking-[.15em] text-white">NOVA</span>
          <span className="hidden sm:inline">/ Workspace / Product launch</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>Live</span>
        </div>
      </div>
      <div className="grid min-h-[350px] grid-cols-[54px_1fr] sm:grid-cols-[130px_1fr]">
        <aside className="border-r border-[#34363c] px-2 py-4 text-[#8d9098]">
          <p className="mb-5 hidden px-2 font-mono text-[9px] uppercase tracking-[.14em] sm:block">
            Workspace
          </p>
          {["Overview", "Projects", "Tasks", "AI", "Analytics"].map((item) => (
            <div
              key={item}
              className={`mb-1 rounded px-2 py-2 text-[10px] ${item.toLowerCase() === view ? "bg-white/10 text-white" : ""}`}
            >
              <span className="hidden sm:inline">{item}</span>
              <span className="sm:hidden">•</span>
            </div>
          ))}
        </aside>
        <div className="min-w-0 p-4 sm:p-5">{content}</div>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <>
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="mb-1 font-mono text-[9px] uppercase tracking-[.14em] text-[#8d9098]">
            Tuesday, 14 October
          </p>
          <h3 className="text-xl font-semibold tracking-[-.04em]">
            Good morning, Arjun.
          </h3>
        </div>
        <button className="focus-ring hidden items-center gap-1 rounded border border-[#454850] px-2 py-1 text-[10px] sm:flex">
          This week <ChevronDown size={12} />
        </button>
      </div>
      <div className="mb-5 grid grid-cols-3 gap-2">
        <Metric label="Progress" value="84%" />
        <Metric label="Open tasks" value="24" />
        <Metric label="At risk" value="03" accent />
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[.14em] text-[#8d9098]">
              Priority work
            </p>
            <MoreHorizontal size={15} className="text-[#8d9098]" />
          </div>
          <TaskList />
        </div>
        <div className="rounded border border-[#34363c] p-3">
          <p className="mb-4 font-mono text-[9px] uppercase tracking-[.14em] text-[#8d9098]">
            Project health
          </p>
          <div className="mb-3 flex h-20 items-end gap-1">
            {[34, 49, 42, 63, 51, 78, 85].map((height, index) => (
              <span
                key={height}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-t-sm ${index === 6 ? "bg-accent" : "bg-[#4b4e56]"}`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[#a7a9ae]">On target</span>
            <span className="font-medium">+12% this week</span>
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="mb-1 font-mono text-[9px] uppercase tracking-[.14em] text-[#8d9098]">
            Active portfolio
          </p>
          <h3 className="text-xl font-semibold tracking-[-.04em]">
            Projects in motion
          </h3>
        </div>
        <button className="focus-ring rounded bg-accent px-2 py-1 text-[10px] font-bold">
          New project
        </button>
      </div>
      <div className="space-y-2">
        {[
          ["Product launch", "84%", "Oct 20"],
          ["Mobile experience", "62%", "Nov 08"],
          ["Brand system", "41%", "Nov 21"],
          ["Onboarding flow", "76%", "Oct 30"],
        ].map(([name, progress, date], index) => (
          <div key={name} className="rounded border border-[#34363c] p-3">
            <div className="mb-3 flex justify-between text-[11px]">
              <span className="font-medium">{name}</span>
              <span className="text-[#a7a9ae]">{date}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1 flex-1 overflow-hidden rounded bg-[#34363c]">
                <span
                  className={`block h-full ${index === 0 ? "bg-accent" : "bg-[#d4d5d8]"}`}
                  style={{ width: progress }}
                />
              </div>
              <span className="w-7 text-right font-mono text-[10px] text-[#a7a9ae]">
                {progress}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AiWorkspace() {
  return (
    <>
      <div className="mb-5">
        <p className="mb-1 flex items-center gap-1 font-mono text-[9px] uppercase tracking-[.14em] text-[#e73473]">
          <Sparkles size={11} /> NOVA intelligence
        </p>
        <h3 className="text-xl font-semibold tracking-[-.04em]">
          What is blocking the product launch?
        </h3>
      </div>
      <div className="rounded border border-[#34363c] bg-[#202228] p-3">
        <div className="mb-3 flex gap-2">
          <div className="grid h-6 w-6 shrink-0 place-items-center rounded bg-accent">
            <Bot size={14} />
          </div>
          <div>
            <p className="mb-2 text-[11px] leading-relaxed text-[#e5e5e7]">
              I found three items that could affect the October 20 launch. The
              API handoff is the highest-risk dependency.
            </p>
            <ol className="space-y-1 text-[10px] text-[#b8bac0]">
              <li>01. API integration — waiting on contract review</li>
              <li>02. Design review — awaiting final approval</li>
              <li>03. QA dependency — test environment unavailable</li>
            </ol>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 border-t border-[#34363c] pt-3">
          <button className="focus-ring rounded border border-[#555861] px-2 py-1 text-[10px]">
            Create tasks
          </button>
          <button className="focus-ring rounded border border-[#555861] px-2 py-1 text-[10px]">
            Notify team
          </button>
          <button className="focus-ring rounded border border-[#555861] px-2 py-1 text-[10px]">
            View project
          </button>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded border border-[#34363c] px-3 py-2 text-[10px] text-[#8d9098]">
        <span>Ask NOVA about your workspace</span>
        <ArrowUpRight size={14} className="ml-auto text-white" />
      </div>
    </>
  );
}

function Analytics() {
  return (
    <>
      <div className="mb-5">
        <p className="mb-1 font-mono text-[9px] uppercase tracking-[.14em] text-[#8d9098]">
          Workspace signal
        </p>
        <h3 className="text-xl font-semibold tracking-[-.04em]">
          Workload is stabilizing
        </h3>
      </div>
      <div className="mb-4 rounded border border-[#34363c] p-3">
        <div className="mb-5 flex justify-between">
          <div>
            <p className="text-[10px] text-[#a7a9ae]">Delivery confidence</p>
            <p className="mt-1 text-3xl font-semibold tracking-[-.06em]">
              78<span className="text-base text-[#8d9098]">/100</span>
            </p>
          </div>
          <span className="rounded-full bg-accent/15 px-2 py-1 text-[10px] text-[#ff73a4]">
            +8 this week
          </span>
        </div>
        <div className="flex h-28 items-end gap-1">
          {[35, 48, 42, 67, 58, 75, 66, 84, 78, 90, 82, 95].map(
            (height, index) => (
              <span
                key={`${height}-${index}`}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-t-sm ${index > 8 ? "bg-accent" : "bg-[#4b4e56]"}`}
              />
            ),
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Metric label="Focus time" value="18.4h" />
        <Metric label="Handoffs" value="31" />
      </div>
    </>
  );
}

function TaskList() {
  return (
    <div className="space-y-2">
      {taskRows.map((task) => (
        <div
          key={task.title}
          className="flex items-center gap-2 rounded border border-[#34363c] px-2 py-2 text-[10px]"
        >
          <span
            className={`grid h-4 w-4 place-items-center rounded-full border ${task.accent ? "border-accent text-accent" : "border-[#676a73] text-transparent"}`}
          >
            <Check size={10} />
          </span>
          <span className="min-w-0 flex-1 truncate">{task.title}</span>
          <span className="hidden rounded bg-[#292b31] px-1.5 py-0.5 text-[9px] text-[#a7a9ae] sm:block">
            {task.state}
          </span>
          <span className="grid h-5 w-5 place-items-center rounded-full bg-[#41444c] text-[8px]">
            {task.owner}
          </span>
        </div>
      ))}
    </div>
  );
}
function Metric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded border border-[#34363c] p-2">
      <p className="mb-1 truncate text-[9px] text-[#8d9098]">{label}</p>
      <p
        className={`text-lg font-semibold tracking-[-.05em] ${accent ? "text-[#ff73a4]" : ""}`}
      >
        {value}
      </p>
    </div>
  );
}
