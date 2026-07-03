'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface Stat {
  value: string
  label: string
}

export default function About() {
  const t = useTranslations('about')
  const stats = t.raw('stats') as Stat[]
  const frustrations = t.raw('frustrations') as string[]
  const titleLines = t('title').split('\n')

  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="wrapper"
      >
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          {/* 좌: 카피 */}
          <div className="w-full md:w-1/2">
            <h2 className="font-body font-black text-3xl md:text-5xl leading-tight mb-8">
              {titleLines.map((line, i) =>
                i === titleLines.length - 1 ? (
                  <span key={i} className="text-gradient-brand">{line}</span>
                ) : (
                  <span key={i}>{line}<br /></span>
                )
              )}
            </h2>
            <div className="space-y-1 mb-6">
              {frustrations.map((line, i) => (
                <p key={i} className="font-body text-base text-white/70 leading-relaxed">{line}</p>
              ))}
            </div>
            <p className="font-body text-base text-white/40 leading-relaxed whitespace-pre-line">
              {t('body')}
            </p>
          </div>

          {/* 우: 스탯 */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-10 border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0 md:pl-16 lg:pl-20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
              >
                <p className="font-body font-black text-4xl md:text-5xl text-gradient-brand leading-none mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-xs uppercase tracking-widest text-white/30 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  )
}
