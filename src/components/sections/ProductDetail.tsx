'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const specs = [
  { label: '제품 구분', value: '무인 디지털 블렌딩 스테이션' },
  { label: '크기 (규격)', value: 'H 1830mm x W 700mm x D 664mm' },
  { label: '결제 시스템', value: '신용카드 / 삼성페이 / QR / 현금' },
  { label: '네트워크', value: '4G LTE 로우터 / SDK 통합 지원' },
]

export default function ProductDetail() {
  return (
    <section className="relative py-24 bg-white overflow-hidden text-brand-dark">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
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
                alt="Protein King 머신 실물"
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
                가장 스마트한 머신이<br />
                <span className="text-gradient-brand">브랜드의 품격을 완성합니다.</span>
              </h2>
              <p className="font-body text-gray-500 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-lg">
                강력한 블렌딩 성능은 기본, 독보적인 자동 살균 시스템과 
                안정적인 네트워킹으로 관리의 번거로움은 줄이고 
                사용자의 만족도는 극대화했습니다.
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
