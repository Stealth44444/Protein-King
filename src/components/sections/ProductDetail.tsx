'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface Spec {
  label: string
  value: string
}

export default function ProductDetail() {
  const t = useTranslations('productDetail')
  const specs = t.raw('specs') as Spec[]

  // Split title on \n; render last line with gradient
  const titleLines = t('title').split('\n')

  return (
    <section className="relative py-24 bg-white overflow-hidden text-brand-dark">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 container mx-auto px-8 md:px-16"
      >
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">

          {/* 머신 이미지: 왼쪽 배치 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-[300px] h-[550px] md:w-[450px] md:h-[800px]">
              <Image
                src="/machine.png"
                alt="Protein King Machine"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </div>
          </motion.div>

          {/* 사양 정보: 오른쪽 배치 */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-body font-black text-3xl md:text-5xl text-brand-dark mb-6 leading-tight break-keep">
                {titleLines.map((line, i) =>
                  i === titleLines.length - 1 ? (
                    <span key={i} className="text-gradient-brand">{line}</span>
                  ) : (
                    <span key={i}>{line}<br /></span>
                  )
                )}
              </h2>
              <p className="font-body text-gray-500 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-lg">
                {t('subtitle')}
              </p>

              {/* 스펙 그리드 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 border-t border-gray-100 pt-10">
                {specs.map((spec, index) => (
                  <div key={index} className="space-y-1">
                    <p className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">
                      {spec.label}
                    </p>
                    <p className="font-body text-base font-medium text-brand-dark">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
