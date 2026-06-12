'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface FAQItem {
  q: string
  a: string
}

export default function FAQ() {
  const t = useTranslations('faq')
  const items = t.raw('items') as FAQItem[]
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-brand-dark py-20 md:py-32">
      <div className="wrapper">
        <div className="mb-12 md:mb-16">
          <h2 className="font-body font-black text-3xl md:text-5xl text-white leading-tight break-words whitespace-pre-line">
            {t('title').split('\n').map((line, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-gradient-brand">{line}</span>
              ) : (
                <span key={i}>{line}<br /></span>
              )
            )}
          </h2>
        </div>

        <div>
          {items.map((item, i) => (
            <div key={i} className="border-b border-white/10 last:border-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-body font-bold text-base md:text-lg text-white group-hover:text-brand-gold transition-colors duration-200 pr-8 break-words">
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="shrink-0 w-6 h-6 flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke={open === i ? '#F5C54E' : '#4B5563'} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm md:text-base text-gray-500 leading-relaxed pb-6 max-w-2xl break-words">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
