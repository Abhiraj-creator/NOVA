import type { ReactNode } from 'react'

interface SectionHeadingProps { eyebrow: string; title: ReactNode; description?: string; dark?: boolean }

export function SectionHeading({ eyebrow, title, description, dark = false }: SectionHeadingProps) {
  return <div className="max-w-2xl"><p className={`eyebrow mb-4 ${dark ? 'text-[#ff73a4]' : 'text-accent'}`}>{eyebrow}</p><h2 className={`text-4xl font-semibold tracking-[-.065em] sm:text-5xl ${dark ? 'text-white' : ''}`}>{title}</h2>{description && <p className={`mt-5 max-w-xl text-base leading-relaxed ${dark ? 'text-white/65' : 'text-ink-muted'}`}>{description}</p>}</div>
}
