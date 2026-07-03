'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

function Typewriter({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2400)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(t => t.slice(0, -1)), 32)
      } else {
        setDeleting(false)
        setPhraseIdx(i => (i + 1) % phrases.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIdx, phrases])

  useEffect(() => {
    const iv = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(iv)
  }, [])

  return (
    <span className="text-gradient-brand [word-break:keep-all]">
      {text}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}>|</span>
    </span>
  )
}

export default function Hero() {
  const t = useTranslations('hero')
  const phrases = t.raw('phrases') as string[]

  return (
    <section className="relative flex items-center pt-20 bg-[#0a0a0a] overflow-hidden min-h-[100svh]">
      <div className="relative z-10 wrapper w-full">

        {/* Mobile: 세로 스택 */}
        <div className="flex flex-col md:hidden pt-8 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-body font-black text-[34px] leading-[1.25] text-white break-words">
              <span className="block">{t('titlePrefix')}</span>
              <span className="block h-[1.25em]"><Typewriter phrases={phrases} /></span>
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
            className="flex-1 min-w-0"
          >
            <h1 className="font-body font-black text-[54px] leading-[1.2] text-white break-words max-w-xl">
              <span className="block">{t('titlePrefix')}</span>
              <span className="block h-[1.2em]"><Typewriter phrases={phrases} /></span>
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
