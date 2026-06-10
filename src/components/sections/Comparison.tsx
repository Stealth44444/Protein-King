'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import GridPattern3D from '@/components/ui/GridPattern3D'

interface ComparisonRow {
  left: string
  right: string
}

export default function Comparison() {
  const t = useTranslations('comparison')
  const rows = t.raw('rows') as ComparisonRow[]

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-white pt-20 pb-16 md:pt-40 md:pb-32 overflow-hidden" ref={ref}>
      <GridPattern3D />
      <div className="relative z-10 container mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-body font-black text-3xl md:text-5xl text-brand-dark mb-6 leading-tight break-keep whitespace-pre-line">
            {t('title').split('\n').map((line, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-gradient-brand">{line}</span>
              ) : (
                <span key={i}>{line}<br /></span>
              )
            )}
          </h2>
          <p className="font-body text-gray-500 text-lg leading-relaxed mb-20">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 pb-4 border-b border-gray-100">
          <p className="font-body text-[10px] tracking-widest text-gray-300 text-center uppercase font-medium">
            {t('col1')}
          </p>
          <p className="font-body text-[10px] tracking-widest text-brand-gold text-center uppercase font-bold">
            {t('col2')}
          </p>
        </div>

        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 py-8 border-b border-gray-50 items-center"
          >
            <div className="text-center px-4">
              <p className="font-body text-xs md:text-sm text-gray-300 break-keep">
                {row.left}
              </p>
            </div>
            <div className="text-center px-4">
              <p className="font-body text-sm md:text-base text-brand-dark font-bold break-keep">
                {row.right}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
