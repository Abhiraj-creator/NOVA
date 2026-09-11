import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { navItems } from "../data/site";

interface NavbarProps {
  onDemo: () => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export function Navbar({ onDemo, menuOpen, setMenuOpen }: NavbarProps) {
  const [darkSurface, setDarkSurface] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateSurface = () => {
      const underlyingElement = document.elementFromPoint(
        window.innerWidth / 2,
        96,
      );
      const themedContainer =
        underlyingElement?.closest<HTMLElement>("[data-nav-theme]");
      setDarkSurface(themedContainer?.dataset.navTheme === "dark");
      setScrolled(window.scrollY > 8);
    };

    updateSurface();
    window.addEventListener("scroll", updateSurface, { passive: true });
    window.addEventListener("resize", updateSurface);
    return () => {
      window.removeEventListener("scroll", updateSurface);
      window.removeEventListener("resize", updateSurface);
    };
  }, []);

  const shellClass = darkSurface
    ? `border-white/15 text-white ${scrolled ? "bg-[#111214]/78 shadow-[0_8px_30px_rgba(0,0,0,.16)] backdrop-blur-xl" : "bg-transparent"}`
    : `border-border/80 text-foreground ${scrolled ? "bg-[#f5f3ee]/82 shadow-[0_8px_30px_rgba(18,18,18,.08)] backdrop-blur-xl" : "bg-[#f5f3ee]/62 backdrop-blur-md"}`;
  const mutedTextClass = darkSurface
    ? "text-white/72 hover:text-white"
    : "text-foreground/68 hover:text-foreground";
  const menuClass = darkSurface
    ? "border-white/15 bg-[#111214]/96 text-white"
    : "border-border/80 bg-[#f5f3ee]/96 text-foreground";

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between border px-4 transition-[background-color,color,box-shadow,border-color] duration-300 sm:px-5 ${shellClass}`}
      >
        <BrandMark light={darkSurface} />
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className={`nav-link focus-ring text-xs ${mutedTextClass}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <button
            onClick={onDemo}
            className={`focus-ring text-xs ${mutedTextClass}`}
          >
            Log in
          </button>
          <a
            href="#cta"
            className="focus-ring rounded-sm bg-accent px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#ff4b8b]"
          >
            Get started
          </a>
        </div>
        <button
          type="button"
          className="focus-ring grid h-9 w-9 place-items-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`mx-auto max-w-[1200px] overflow-hidden border-x border-b transition-[max-height,background-color,border-color] duration-300 md:hidden ${menuClass} ${menuOpen ? "max-h-96" : "max-h-0 border-transparent"}`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1 p-5">
          {navItems.map((item) => (
            <a
              key={item.target}
              onClick={closeMenu}
              href={`#${item.target}`}
              tabIndex={menuOpen ? 0 : -1}
              className="focus-ring py-3 text-lg font-medium"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              closeMenu();
              onDemo();
            }}
            tabIndex={menuOpen ? 0 : -1}
            className={`focus-ring mt-2 w-fit text-left text-sm ${mutedTextClass}`}
          >
            Log in
          </button>
          <a
            onClick={closeMenu}
            href="#cta"
            tabIndex={menuOpen ? 0 : -1}
            className="focus-ring mt-3 w-fit bg-accent px-4 py-3 text-sm font-bold text-white"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}
