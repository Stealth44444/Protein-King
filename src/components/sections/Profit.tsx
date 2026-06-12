'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import GreenCheck from '@/components/ui/GreenCheck'
import RedX from '@/components/ui/RedX'

interface StepItem {
  num: string
  title: string
  desc: string
}

interface TableRowItem {
  name: string
  brand: boolean
  center: boolean
}

export default function Profit() {
  const t = useTranslations('profit')
  const steps = t.raw('steps') as StepItem[]
  const tableRows = t.raw('tableRows') as TableRowItem[]

  // Split title on \n; render last line with gradient
  const titleLines = t('title').split('\n')

  return (
    <section className="bg-brand-dark py-20 md:py-32 overflow-hidden text-white">
      <div className="wrapper">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-body font-black text-3xl md:text-5xl text-white mb-6 leading-tight break-words">
            {titleLines.map((line, i) =>
              i === titleLines.length - 1 ? (
                <span key={i} className="text-gradient-brand">{line}</span>
              ) : (
                <span key={i}>{line}<br /></span>
              )
            )}
          </h2>
        </div>

        {/* Steps List (consistent with Benefits.tsx style) */}
        <div className="mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-6 py-6 border-b border-white/10 last:border-b-0"
            >
              <span className="font-body text-xs text-brand-gold font-bold mt-1 w-6 shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="font-body font-bold text-lg md:text-xl text-white leading-snug mb-1 break-words">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-gray-500 font-medium leading-relaxed break-words">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Checklist Table (consistent with Comparison.tsx style) */}
        <div>

          {/* Table Header */}
          <div className="grid grid-cols-[1fr_64px_64px] md:grid-cols-[1fr_100px_100px] pb-4 border-b border-white/10">
            <span className="font-body text-xs text-gray-600 uppercase font-medium">
              {t('tableHeaders.item')}
            </span>
            <span className="font-body text-xs text-brand-gold uppercase font-bold text-center">
              {t('tableHeaders.brand')}
            </span>
            <span className="font-body text-xs text-gray-600 uppercase font-medium text-center">
              {t('tableHeaders.center')}
            </span>
          </div>

          {/* Table Rows */}
          {tableRows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-[1fr_64px_64px] md:grid-cols-[1fr_100px_100px] py-6 border-b border-white/5 items-center"
            >
              <span className="font-body text-sm md:text-base text-white font-semibold break-words">
                {row.name}
              </span>

              {/* Brand Status */}
              <div className="flex justify-center">
                {row.brand ? <GreenCheck /> : <RedX />}
              </div>

              {/* Center Status */}
              <div className="flex justify-center">
                {row.center ? <GreenCheck /> : <RedX />}
              </div>
            </motion.div>
          ))}
          
          <p className="mt-6 font-body text-xs text-gray-400 font-medium text-center break-words">
            {t('footnote')}
          </p>
        </div>

      </div>
    </section>
  )
}
