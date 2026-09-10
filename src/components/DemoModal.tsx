import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { ProductCanvas } from './ProductCanvas'

interface DemoModalProps { open: boolean; onClose: () => void }

export function DemoModal({ open, onClose }: DemoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const dialog = dialogRef.current
    dialog?.querySelector<HTMLButtonElement>('button')?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { onClose(); return }
      if (event.key !== 'Tab' || !dialog) return
      const focusable = [...dialog.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
      const first = focusable[0]
      const last = focusable.at(-1)
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="demo-title" className="w-full max-w-4xl bg-[#111214] p-4 text-white shadow-2xl sm:p-6"><div className="mb-5 flex items-start justify-between gap-4"><div><p className="eyebrow text-[#ff73a4]">Interactive product preview</p><h2 id="demo-title" className="mt-2 text-2xl font-semibold tracking-[-.055em]">A focused team workspace</h2></div><button onClick={onClose} className="focus-ring grid h-9 w-9 place-items-center border border-white/20" aria-label="Close demo"><X size={18} /></button></div><ProductCanvas view="ai" compact /><p className="mt-4 text-xs leading-relaxed text-white/50">This is an original, frontend-only NOVA product visualization. No data is stored or sent.</p></div></div>
}
