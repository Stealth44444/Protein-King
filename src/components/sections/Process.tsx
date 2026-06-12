'use client'

import { useTranslations } from 'next-intl'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ProcessStep {
  num: string
  title: string
  desc: string
}

function StepCard({ step }: { step: ProcessStep }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <div
      ref={ref}
      className="flex items-stretch bg-[#1a1a1a] rounded-2xl overflow-hidden"
    >
      {/* Number column */}
      <div className="flex items-center justify-center w-20 md:w-28 shrink-0">
        <span
          className={`font-body font-black text-2xl md:text-4xl transition-colors duration-700 ${
            inView ? 'text-brand-gold' : 'text-white/15'
          }`}
        >
          {step.num}
        </span>
      </div>

      {/* Divider */}
      <div className="w-px bg-white/10 self-stretch" />

      {/* Content */}
      <div className="flex-1 px-6 md:px-10 py-7 md:py-8">
        <h3 className="font-body font-black text-lg md:text-2xl text-white leading-snug mb-2 break-keep">
          {step.title}
        </h3>
        <p className="font-body text-sm text-gray-500 leading-relaxed break-words">
          {step.desc}
        </p>
      </div>
    </div>
  )
}

export default function Process() {
  const t = useTranslations('process')
  const steps = t.raw('steps') as ProcessStep[]

  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className="wrapper">
        <h2 className="font-body font-black text-4xl md:text-6xl text-white leading-tight whitespace-pre-line break-keep mb-12 md:mb-16">
          {t('title').split('\n').map((line, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="text-gradient-brand">{line}</span>
            ) : (
              <span key={i}>{line}<br /></span>
            )
          )}
        </h2>

        <div className="flex flex-col gap-3">
          {steps.map((step) => (
            <StepCard key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}
