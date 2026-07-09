'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

interface Spec {
  label: string
  value: string
}

interface MixOption {
  name: string
  desc: string
}

const IMAGES = ['/machine.png', '/machine2.png']

export default function ProductDetail() {
  const t = useTranslations('productDetail')
  const specs = t.raw('specs') as Spec[]
  const mixOptions = t.raw('mixOptions') as MixOption[]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % IMAGES.length)
    }, 2750)
    return () => clearInterval(id)
  }, [])

  const titleLines = t('title').split('\n')

  return (
    <section className="relative py-24 bg-brand-dark overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 wrapper"
      >
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">

          {/* 머신 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-[280px] h-[520px] md:w-[330px] md:h-[612px]">
              {IMAGES.map((src, i) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={src}
                    alt={`Protein King Machine ${i + 1}`}
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                  />
                </div>
              ))}

            </div>
          </motion.div>

          {/* 사양 정보 */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-body font-black text-3xl md:text-5xl text-white mb-6 leading-tight [word-break:keep-all]">
                {titleLines.map((line, i) =>
                  i === titleLines.length - 1 ? (
                    <span key={i} className="text-gradient-brand">{line}</span>
                  ) : (
                    <span key={i}>{line}<br /></span>
                  )
                )}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 border-t border-white/10 pt-10">
                {specs.map((spec, index) => (
                  <div key={index} className="space-y-1">
                    <p className="font-body text-xs uppercase text-gray-500 font-medium break-words">
                      {spec.label}
                    </p>
                    <p className="font-body text-base font-medium text-white break-words">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>

        {/* 믹스 옵션 — 전체 너비 */}
        <div className="mt-16 md:mt-20 border-t border-white/10 pt-10">
          <p className="font-body text-xs text-gray-500 font-medium mb-8">
            {t('mixLabel')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
            {mixOptions.map((opt) => (
              <div key={opt.name} className="space-y-1">
                <p className="font-body text-xs uppercase text-gray-500 font-medium break-words">
                  {opt.desc}
                </p>
                <p className="font-body text-base font-medium text-white break-words">
                  {opt.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
