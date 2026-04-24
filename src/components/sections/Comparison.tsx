'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const rows = [
  { label: '방식',        competitor: 'RTD 완제품',        us: '즉석 블렌딩' },
  { label: '원장 수입',   competitor: '판매량 연동',        us: '고정 자릿세' },
  { label: '잔당 가격',   competitor: '₩3,000–6,000',      us: '₩1,900' },
  { label: '재고 리스크', competitor: '유통기한 · 매입',    us: '없음' },
]

export default function Comparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-brand-offwhite py-24 px-8 md:px-16" ref={ref}>
      <p className="font-body text-[9px] tracking-[0.4em] text-black/25 uppercase mb-16">
        Why Protein King
      </p>

      <div className="grid grid-cols-3 pb-4 border-b border-black/15">
        <div />
        <p className="font-body text-[10px] tracking-widest text-black/35 text-center uppercase">
          알파핏 쇼케이스
        </p>
        <p className="font-body text-[10px] tracking-widest text-black font-semibold text-center uppercase">
          프로틴 킹
        </p>
      </div>

      {rows.map((row, i) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: i * 0.09 }}
          className="grid grid-cols-3 py-6 border-b border-black/[0.08] items-center"
        >
          <p className="font-body text-[10px] tracking-widest text-black/35 uppercase">
            {row.label}
          </p>
          <p className="font-body text-sm text-black/35 text-center">{row.competitor}</p>
          <p className="font-display text-3xl md:text-4xl text-black text-center leading-none">
            {row.us}
          </p>
        </motion.div>
      ))}
    </section>
  )
}
