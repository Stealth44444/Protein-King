'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GridPattern3D from '@/components/ui/GridPattern3D'

const rows = [
  { competitor: '잔당 300~500원 낮은 마진', us: '잔당 1,000원~ 압도적 수익' },
  { competitor: '무거운 박스 입고 및 진열 업무', us: '파우더 대용량 간편 보충' },
  { competitor: '3,500원~ 형성된 높은 가격대', us: '1,900원~ 수준의 높은 집객력' },
  { competitor: '저가지만 대두 단백만 사용', us: '더 저렴하면서 유청 단백까지 함유' },
]

export default function Comparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-white pt-20 pb-16 md:pt-40 md:pb-32 overflow-hidden" ref={ref}>
      <GridPattern3D />
      <div className="relative z-10 container mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-body font-black text-3xl md:text-5xl text-brand-dark mb-6 leading-tight break-keep">
            이제 쇼케이스 말고<br />
            <span className="text-gradient-brand">프로틴 킹 하세요</span>
          </h2>
          <p className="font-body text-gray-500 text-lg leading-relaxed mb-20">
            완제품(RTD) 판매 방식의 낮은 마진과 재고 관리의 한계를 넘어,<br className="hidden md:block" />
            프로틴 킹만의 자동화 시스템으로 운영 수익을 극대화하십시오.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 pb-4 border-b border-gray-100">
          <p className="font-body text-[10px] tracking-widest text-gray-300 text-center uppercase font-medium">
            기존 RTD 쇼케이스
          </p>
          <p className="font-body text-[10px] tracking-widest text-brand-gold text-center uppercase font-bold">
            프로틴 킹 스테이션
          </p>
        </div>

        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 py-8 border-b border-gray-50 items-center"
          >
            <div className="text-center px-4">
              <p className="font-body text-xs md:text-sm text-gray-300 break-keep">
                {row.competitor}
              </p>
            </div>
            <div className="text-center px-4">
              <p className="font-body text-sm md:text-base text-brand-dark font-bold break-keep">
                {row.us}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
