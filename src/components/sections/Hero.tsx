import { ArrowDown, ArrowUpRight, Play } from 'lucide-react'
import { ProductCanvas } from '../ProductCanvas'
import { Reveal } from '../Reveal'

interface HeroProps { onDemo: () => void }

export function Hero({ onDemo }: HeroProps) {
  return <section id="top" className="grid-noise overflow-hidden bg-[#111214] pb-16 pt-32 text-white sm:pt-40"><div className="shell"><Reveal><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div className="pb-2"><p className="eyebrow mb-5 text-[#ff73a4]">The intelligent team workspace</p><h1 className="max-w-3xl text-5xl font-semibold leading-[.92] tracking-[-.08em] sm:text-6xl lg:text-7xl">More signal.<br />Less work about work.</h1><p className="mt-7 max-w-md text-base leading-relaxed text-white/65">NOVA brings projects, people, and AI into one operational view—so teams spend less time coordinating and more time moving.</p><div className="mt-8 flex flex-wrap items-center gap-3"><a href="#cta" className="focus-ring inline-flex items-center gap-2 bg-accent px-4 py-3 text-sm font-bold transition hover:bg-[#ff4b8b]">Start with NOVA <ArrowUpRight size={16} /></a><button onClick={onDemo} className="focus-ring inline-flex items-center gap-2 px-2 py-3 text-sm text-white/80 hover:text-white"><span className="grid h-7 w-7 place-items-center rounded-full border border-white/30"><Play size={12} fill="currentColor" /></span> See how it works</button></div></div><div className="relative"><div className="absolute -right-6 -top-6 hidden h-28 w-28 border border-accent/50 lg:block" /><ProductCanvas /></div></div></Reveal><div className="mt-16 flex items-center gap-3 text-xs text-white/45"><ArrowDown size={15} /><span>Scroll to explore the system</span></div></div></section>
}
