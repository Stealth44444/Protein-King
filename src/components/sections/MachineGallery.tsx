'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface Spec {
  label: string
  value: string
}

interface CertItem {
  name: string
  desc: string
}

export default function MachineGallery() {
  const t = useTranslations('machineGallery')
  const tc = useTranslations('certifications')
  const specs = t.raw('specs') as Spec[]
  const certs = tc.raw('items') as CertItem[]

  // Split title on \n; render last line with gradient
  const titleLines = t('title').split('\n')

  return (
    <section className="py-24 bg-brand-dark overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="wrapper"
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
              <h2 className="font-body font-black text-3xl md:text-5xl text-white mb-6 leading-tight break-keep">
                {titleLines.map((line, i) =>
                  i === titleLines.length - 1 ? (
                    <span key={i} className="text-gradient-brand">{line}</span>
                  ) : (
                    <span key={i}>{line}<br /></span>
                  )
                )}
              </h2>
              {/* 기술 스펙 그리드 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 border-t border-white/10 pt-10">
                {specs.map((spec, index) => (
                  <div key={index} className="space-y-1">
                    <p className="font-body text-xs uppercase text-gray-500 font-medium break-keep">
                      {spec.label}
                    </p>
                    <p className="font-body text-base font-medium text-white break-keep">
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
        {/* 인증 그리드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-20 border-t border-white/10 pt-12"
        >
          <p className="font-body text-xs uppercase font-semibold text-white/30 tracking-widest mb-8">
            {tc('title').split('\n')[0]}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/[0.06]">
            {certs.map((cert, i) => (
              <div key={i} className="bg-brand-dark px-5 py-5">
                <p className="font-body font-black text-sm text-white mb-1">{cert.name}</p>
                <p className="font-body text-xs text-white/30 leading-snug break-keep">{cert.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
