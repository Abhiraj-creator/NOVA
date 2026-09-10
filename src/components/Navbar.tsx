import { Menu, X } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { navItems } from '../data/site'

interface NavbarProps { onDemo: () => void; menuOpen: boolean; setMenuOpen: (open: boolean) => void }

export function Navbar({ onDemo, menuOpen, setMenuOpen }: NavbarProps) {
  const closeMenu = () => setMenuOpen(false)

  return <header className="absolute inset-x-0 top-0 z-40 text-white"><div className="shell flex h-20 items-center justify-between border-b border-white/15"><BrandMark light /><nav className="hidden items-center gap-7 md:flex">{navItems.map((item) => <a key={item.target} href={`#${item.target}`} className="nav-link focus-ring text-xs text-white/80 hover:text-white">{item.label}</a>)}</nav><div className="hidden items-center gap-5 md:flex"><button onClick={onDemo} className="focus-ring text-xs text-white/80 hover:text-white">Log in</button><a href="#cta" className="focus-ring rounded-sm bg-accent px-3 py-2 text-xs font-bold transition hover:bg-[#ff4b8b]">Get started</a></div><button type="button" className="focus-ring grid h-9 w-9 place-items-center md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Toggle navigation">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div><div id="mobile-menu" className={`overflow-hidden border-b border-white/15 bg-[#111214] transition-[max-height] duration-300 md:hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`} aria-hidden={!menuOpen}><nav className="shell flex flex-col gap-1 py-5">{navItems.map((item) => <a key={item.target} onClick={closeMenu} href={`#${item.target}`} className="focus-ring py-3 text-lg font-medium">{item.label}</a>)}<button onClick={() => { closeMenu(); onDemo() }} className="focus-ring mt-2 w-fit text-left text-sm text-white/70">Log in</button><a onClick={closeMenu} href="#cta" className="focus-ring mt-3 w-fit bg-accent px-4 py-3 text-sm font-bold">Get started</a></nav></div></header>
}
