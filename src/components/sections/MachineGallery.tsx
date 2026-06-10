'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface Spec {
  label: string
  value: string
}

export default function MachineGallery() {
  const t = useTranslations('machineGallery')
  const specs = t.raw('specs') as Spec[]

  // Split title on \n; render last line with gradient
  const titleLines = t('title').split('\n')

  return (
    <section className="py-24 bg-white overflow-hidden text-brand-dark">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-8 md:px-16"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* 설명 영역 */}
          <div className="w-full md:w-[38%] order-2 md:order-1 md:pl-10 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
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
              <p className="font-body text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                {t('subtitle')}
              </p>

              {/* 기술 스펙 그리드 */}
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

          {/* 이미지 영역 */}
          <div className="w-full md:w-[62%] order-1 md:order-2 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
                <Image
                  src="/machine_detail.png"
                  alt="Internal Technical Detail"
                  fill
                  className="object-contain object-center md:object-right"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
