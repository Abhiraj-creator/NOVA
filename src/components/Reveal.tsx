import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface RevealProps { children: ReactNode; className?: string; delay?: number }

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      gsap.fromTo(element, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.55, delay, ease: 'power2.out' })
      observer.disconnect()
    }, { threshold: 0.15 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  return <div ref={elementRef} className={className}>{children}</div>
}
