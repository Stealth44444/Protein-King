'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface BenefitItem {
  num: string
  title: string
  desc: string
}

interface TabData {
  label: string
  items: BenefitItem[]
}

interface TabsData {
  gym: TabData
  university: TabData
}

type TabKey = keyof TabsData

export default function Benefits() {
  const t = useTranslations('benefits')
  const tabs = t.raw('tabs') as TabsData
  const tabKeys = Object.keys(tabs) as TabKey[]

  const [active, setActive] = useState<TabKey>('gym')

  return (
    <section className="relative bg-white pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* 우측 배경 이미지: 모바일에서 숨김 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/protein_splash.png"
        alt=""
        className="hidden md:block absolute right-8 md:right-16 bottom-0 w-[30%] h-auto object-contain pointer-events-none"
      />

      <div className="relative z-10 container mx-auto px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-body font-black text-3xl md:text-5xl text-brand-dark mb-10 md:mb-12 leading-tight break-keep whitespace-pre-line"
        >
          {t('title').split('\n').map((line, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="text-gradient-brand">{line}</span>
            ) : (
              <span key={i}>{line}<br /></span>
            )
          )}
        </motion.h2>

        {/* 탭 버튼 */}
        <div className="flex gap-8 mb-10 md:mb-12 border-b border-gray-100 max-w-full md:max-w-[60%]">
          {tabKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`font-body font-bold text-sm pb-4 transition-colors duration-200 ${
                active === key
                  ? 'text-brand-dark border-b-2 border-brand-gold'
                  : 'text-gray-300 hover:text-gray-400'
              }`}
            >
              {tabs[key].label}
            </button>
          ))}
        </div>

        {/* 탭 콘텐츠 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-full md:max-w-[60%]"
          >
            {tabs[active].items.map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-6 py-6 border-b border-gray-100"
              >
                <span className="font-body text-[11px] text-brand-gold font-bold tracking-widest mt-1 w-6 shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-body font-bold text-lg md:text-xl text-brand-dark leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
