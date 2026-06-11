'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface CertItem {
  name: string
  desc: string
}

export default function CertCarousel() {
  const t = useTranslations('certifications')
  const items = t.raw('items') as CertItem[]

  const titleLines = t('title').split('\n')

  return (
    <section className="bg-brand-dark py-20 md:py-28">
      <div className="wrapper">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-body font-black text-3xl md:text-5xl text-white leading-tight break-keep whitespace-pre-line">
            {titleLines.map((line, i) =>
              i === titleLines.length - 1 ? (
                <span key={i} className="text-gradient-brand">{line}</span>
              ) : (
                <span key={i}>{line}<br /></span>
              )
            )}
          </h2>
          <p className="mt-4 font-body text-sm md:text-base text-white/40 leading-relaxed break-keep max-w-xl">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/[0.06]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-brand-dark px-5 py-6"
            >
              <p className="font-body font-black text-base text-white mb-1">{item.name}</p>
              <p className="font-body text-xs text-white/35 leading-snug break-keep">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
