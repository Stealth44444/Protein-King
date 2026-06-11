'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  const renderText = (text: string) => {
    const parts = text.split(/({|})/g)
    let isGradient = false

    return parts.map((part, i) => {
      if (part === '{') { isGradient = true; return null }
      if (part === '}') { isGradient = false; return null }
      return isGradient ? (
        <span key={i} className="text-gradient-brand">{part}</span>
      ) : (
        <span key={i}>{part}</span>
      )
    })
  }

  return (
    <section className="relative flex items-center pt-20 bg-[#0a0a0a] overflow-hidden min-h-[100svh] md:min-h-[90vh]">
      {/* Wave background — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5C54E" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#38BDE9" stopOpacity="0.14" />
            </linearGradient>
          </defs>
          <path
            d="M-40,240 C480,140 960,340 1480,240 L1480,740 C960,840 480,640 -40,740 Z"
            fill="url(#waveGrad)"
          />
        </svg>
      </div>

      <div className="relative z-10 wrapper w-full">

        {/* Mobile: 세로 스택 */}
        <div className="flex flex-col md:hidden pt-8 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-body font-black text-[30px] leading-[1.2] text-white whitespace-pre-line break-keep">
              {renderText(t.raw('title'))}
            </h1>
            <div className="mt-7">
              <a
                href="#apply"
                className="inline-block font-body text-sm font-bold px-8 py-4 rounded-full bg-brand-gold text-brand-dark"
              >
                {t('cta')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative w-full aspect-[3/4] mt-10"
          >
            <Image
              src="/hero.png"
              alt="Protein King Machine"
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>
        </div>

        {/* Desktop: 가로 배치 */}
        <div className="hidden md:flex items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <h1 className="font-body font-black text-[46px] leading-[1.2] text-white whitespace-pre-line break-keep max-w-xl">
              {renderText(t.raw('title'))}
            </h1>
            <div className="mt-10">
              <a
                href="#apply"
                className="inline-block font-body text-sm font-bold px-8 py-4 rounded-full bg-brand-gold text-brand-dark transition-all duration-200 hover:bg-white hover:text-brand-dark"
              >
                {t('cta')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex-1 flex justify-end items-center"
          >
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg aspect-[3/4]">
              <Image
                src="/hero.png"
                alt="Protein King Machine"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
