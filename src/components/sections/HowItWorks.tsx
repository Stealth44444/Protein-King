'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { num: '01', title: '파우더 투입', desc: '프로틴 파우더와 탈지분유를 기계에 넣습니다.' },
  { num: '02', title: '즉석 블렌딩', desc: '기계 내부에서 물과 자동 혼합됩니다.' },
  { num: '03', title: '컵 배출 · 완성', desc: '신선한 프로틴 쉐이크가 바로 나옵니다.' },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white py-16 md:py-24 px-8 md:px-16" ref={ref}>
      <p className="font-body text-[9px] tracking-[0.4em] text-gray-300 uppercase mb-10 md:mb-16">
        How It Works
      </p>

      <div>
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-6 md:gap-10 py-8 border-b border-gray-100 last:border-0"
          >
            <span className="font-body text-[11px] text-brand-gold font-bold tracking-widest mt-2 w-6 shrink-0">
              {step.num}
            </span>
            <div>
              <h3 className="font-body font-black text-3xl md:text-6xl text-brand-dark leading-none mb-3 break-keep">
                {step.title}
              </h3>
              <p className="font-body text-sm text-gray-400 font-medium">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
