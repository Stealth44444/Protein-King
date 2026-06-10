'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Typewriter from '@/components/ui/Typewriter'

export default function Hero() {
  const t = useTranslations('hero')
  const copies = t.raw('copies') as string[]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 bg-white overflow-hidden">
      {/* 중앙: 카피 */}
      <div className="relative z-10 px-8 md:px-16 text-center max-w-[85%]">
        <div className="min-h-[150px] sm:min-h-[200px] md:min-h-[240px]">
          <h1 className="font-body font-black text-[38px] sm:text-[52px] md:text-[84px] leading-[1.15] md:leading-[1.1] text-brand-dark whitespace-pre-line break-keep">
            <Typewriter
              texts={copies}
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={2500}
            />
          </h1>
        </div>
      </div>

      {/* 하단 스크롤 유도 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-2"
        >
          <p className="font-body text-[10px] tracking-widest text-gray-300 uppercase">
            {t('scroll')}
          </p>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-gray-300">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
