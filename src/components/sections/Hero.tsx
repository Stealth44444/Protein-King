'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const copies = [
  '쉐이커 들고 다니는\n시대는 이제 끝',
  '파우더는\n집에 있죠?',
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % copies.length), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-screen bg-brand-dark flex items-center overflow-hidden">
      {/* 좌측: 카피 */}
      <div className="relative z-10 px-8 md:px-16 max-w-[58%]">
        <p className="font-body text-[9px] tracking-[0.4em] text-white/25 uppercase mb-10">
          Protein King
        </p>

        <div className="h-[220px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[76px] md:text-[108px] leading-none text-white whitespace-pre-line"
            >
              {copies[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <a
          href="#apply"
          className="inline-block mt-10 font-body text-[10px] font-semibold tracking-[0.25em] text-brand-dark bg-white px-7 py-3 hover:bg-white/90 transition-colors"
        >
          파트너 신청 →
        </a>
      </div>

      {/* 우측: 자판기 이미지 */}
      <div className="absolute right-0 top-0 h-full w-[50%]">
        <Image
          src="/machine.png"
          alt="Protein King 즉석 블렌딩 자판기"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* 브랜드 블루 글로우 — 자판기 뒤 극소량 */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[60%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(56,189,233,0.05) 0%, transparent 70%)',
        }}
      />
    </section>
  )
}
