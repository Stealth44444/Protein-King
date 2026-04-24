'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  {
    num: '01',
    title: '재고 리스크 없음',
    desc: '유통기한 · 매입 부담 제로.',
  },
  {
    num: '02',
    title: '고정 자릿세 수입',
    desc: '판매량과 무관하게 매달 고정 수입.',
  },
  {
    num: '03',
    title: '관리 부담 없음',
    desc: '설치 · 유지보수는 프로틴 킹이 담당.',
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-brand-dark py-24 px-8 md:px-16" ref={ref}>
      <p className="font-body text-[9px] tracking-[0.4em] text-white/20 uppercase mb-16">
        For Partners
      </p>

      <div>
        {benefits.map((b, i) => (
          <motion.div
            key={b.num}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-6 md:gap-10 py-8 border-b border-brand-line"
          >
            <span className="font-body text-[10px] text-white/20 tracking-widest mt-2 w-6 shrink-0">
              {b.num}
            </span>
            <div>
              <h3 className="font-display text-4xl md:text-6xl text-white leading-none mb-2">
                {b.title}
              </h3>
              <p className="font-body text-sm text-white/35">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
