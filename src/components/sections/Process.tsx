'use client'

import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ProcessStep {
  num: string
  title: string
  desc: string
}

export default function Process() {
  const t = useTranslations('process')
  const steps = t.raw('steps') as ProcessStep[]

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white py-16 md:py-24 px-8 md:px-16" ref={ref}>
      <p className="font-body text-[9px] tracking-[0.4em] text-gray-300 uppercase mb-10 md:mb-16">
        {t('label')}
      </p>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12 md:mb-20">
        <h2 className="font-body font-black text-4xl md:text-6xl text-brand-dark leading-tight whitespace-pre-line break-keep">
          {t('title')}
        </h2>
      </div>

      <div>
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-6 md:gap-12 py-8 border-b border-gray-100 last:border-0"
          >
            {/* Step number */}
            <span className="font-body text-[11px] text-brand-gold font-bold tracking-widest mt-1 w-6 shrink-0">
              {step.num}
            </span>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-body font-black text-2xl md:text-4xl text-brand-dark leading-none mb-3 break-keep">
                {step.title}
              </h3>
              <p className="font-body text-sm text-gray-400 font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
