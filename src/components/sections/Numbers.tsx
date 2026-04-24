'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'

function CountUp({ to, prefix = '' }: { to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useMotionValue(0)
  const display = useTransform(count, (v) =>
    `${prefix}${Math.round(v).toLocaleString('ko-KR')}`
  )

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 1.6, ease: 'easeOut' })
    }
  }, [inView, count, to])

  return <motion.span ref={ref}>{display}</motion.span>
}

const stats = [
  { to: 1900, prefix: '₩', label: '잔당 가격', gold: true },
  { to: 0,    prefix: '₩', label: '재고 매입 비용', gold: false },
]

export default function Numbers() {
  return (
    <section className="bg-brand-dark py-16 px-8 md:px-16">
      <p className="font-body text-[9px] tracking-[0.4em] text-white/20 uppercase mb-16">
        Numbers
      </p>

      <div>
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex items-end justify-between py-8 border-b border-brand-line"
          >
            <span
              className={`font-display leading-none ${
                stat.gold ? 'text-brand-gold' : 'text-white'
              }`}
              style={{ fontSize: 'clamp(72px, 13vw, 160px)' }}
            >
              <CountUp to={stat.to} prefix={stat.prefix} />
            </span>
            <span className="font-body text-[10px] text-white/20 tracking-widest uppercase mb-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
