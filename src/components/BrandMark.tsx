export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`focus-ring inline-flex items-center gap-2 font-black tracking-[-0.08em] ${light ? 'text-white' : 'text-foreground'}`} aria-label="NOVA home">
      <span className="grid h-5 w-5 place-items-center rounded-sm bg-accent text-[11px] leading-none text-white">N</span>
      <span className="text-xl">NOVA</span>
    </a>
  )
}
