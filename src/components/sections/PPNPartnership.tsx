'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface Badge {
  name: string
  desc: string
}

export default function PPNPartnership() {
  const t = useTranslations('ppnPartnership')
  const badges = t.raw('badges') as Badge[]

  return (
    <section className="relative py-24 bg-brand-dark overflow-hidden text-white">
      <div className="relative z-10 wrapper">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">

          {/* 카피 + 뱃지 */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-body text-xs uppercase tracking-widest text-white/30 font-medium mb-4">
                {t('label')}
              </p>
              <h2 className="flex items-center gap-4 md:gap-6 mb-6">
                <span className="relative inline-block w-[130px] h-[52px] md:w-[190px] md:h-[76px]">
                  <Image
                    src="/logo.png"
                    alt="Protein King"
                    fill
                    className="object-contain object-left"
                  />
                </span>
                <span className="font-body font-black text-2xl md:text-4xl text-white/30 leading-none">×</span>
                <a
                  href="https://primalpower-nutrition.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block w-[130px] h-[52px] md:w-[190px] md:h-[76px] opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/ppn-logo.png"
                    alt="PPN (Primal Power Nutrition)"
                    fill
                    className="object-contain object-left"
                  />
                </a>
              </h2>
              <p className="font-body text-sm md:text-base text-white/50 leading-relaxed break-words max-w-md mb-4">
                {t('body')}
              </p>
              <a
                href="https://primalpower-nutrition.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-xs text-white/40 hover:text-white/70 underline underline-offset-4 transition-colors mb-10"
              >
                {t('link')}
              </a>

              <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
                {badges.map((badge, i) => (
                  <div key={i} className="bg-brand-dark px-5 py-6">
                    <p className="font-body font-black text-base text-white mb-1">{badge.name}</p>
                    <p className="font-body text-xs text-white/35 leading-snug break-words">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* PPN 이미지 — 추후 PPN 파우더 통 + 자판기 합성 이미지로 교체 예정. machine.png는 바로 위 ProductDetail 섹션에서 이미 쓰여서 중복돼 보이므로, 그 전까지는 protein_splash.png(제품 스플래시)를 임시로 사용 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-[320px] h-[420px] md:w-[440px] md:h-[580px]">
              <Image
                src="/protein_splash.png"
                alt="Protein King shake made with PPN protein"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
