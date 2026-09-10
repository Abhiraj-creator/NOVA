import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const update = () => setVisible(window.scrollY > 600); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update) }, [])
  if (!visible) return null
  return <button className="focus-ring fixed bottom-5 right-5 z-30 grid h-10 w-10 place-items-center bg-foreground text-white shadow-lg transition hover:bg-accent" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={17} /></button>
}
