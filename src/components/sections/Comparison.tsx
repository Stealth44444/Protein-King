'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import GreenCheck from '@/components/ui/GreenCheck'
import RedX from '@/components/ui/RedX'

export default function Comparison() {
  const t = useTranslations('comparison')
  const rows = t.raw('rows') as string[]

  const titleLines = t('title').split('\n')

  return (
    <section className="bg-brand-dark py-20 md:py-32 overflow-hidden">
      <div className="wrapper">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-body font-black text-3xl md:text-5xl text-white mb-12 md:mb-16 leading-tight break-words whitespace-pre-line"
        >
          {titleLines.map((line, i) =>
            i === titleLines.length - 1 ? (
              <span key={i} className="text-gradient-brand">{line}</span>
            ) : (
              <span key={i}>{line}<br /></span>
            )
          )}
        </motion.h2>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_72px_72px] md:grid-cols-[1fr_100px_100px] pb-4 border-b border-white/10 mb-0">
          <div />
          <p className="font-body text-xs font-semibold text-gray-600 text-center leading-snug md:uppercase md:tracking-widest">{t('col1')}</p>
          <p className="font-body text-xs font-bold text-brand-gold text-center leading-snug md:uppercase md:tracking-widest">{t('col2')}</p>
        </div>

        {/* Rows */}
        <div className="border-t border-white/10">
          {rows.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="grid grid-cols-[1fr_72px_72px] md:grid-cols-[1fr_100px_100px] items-center border-b border-white/[0.06] py-4 md:py-5"
            >
              <p className="font-body text-sm md:text-base text-white/70 break-words pr-4">{q}</p>
              <div className="flex justify-center"><RedX /></div>
              <div className="flex justify-center"><GreenCheck /></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
