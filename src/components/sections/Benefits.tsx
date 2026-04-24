'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const tabs = {
  gym: {
    label: '헬스장',
    benefits: [
      {
        num: '01',
        title: '리스크 없는 고정 수입',
        desc: '판매량 무관, 연간 최소 120만원 이상 배치 공간 임대 수익.',
      },
      {
        num: '02',
        title: '관리 부담 제로',
        desc: '발주·재고·유통기한 체크 없음. 고장·유지보수 프로틴 킹 전담.',
      },
      {
        num: '03',
        title: '회원 록인',
        desc: '골든타임 즉시 해결, 경쟁 헬스장 대비 독보적 차별화.',
      },
    ],
  },
  university: {
    label: '대학교',
    benefits: [
      {
        num: '01',
        title: '학생 복지 지표 향상',
        desc: '편의점 RTD 절반 이하 가격, 학생 건강·영양 복지 프로그램으로 포지셔닝.',
      },
      {
        num: '02',
        title: '무인·무관리',
        desc: '설치 이후 학교 직원 개입 없음. 운영 전체 프로틴 킹 전담.',
      },
      {
        num: '03',
        title: '체육 시설 가치 제고',
        desc: '단순 운동 공간에서 회복까지 책임지는 시설로.',
      },
    ],
  },
}

type TabKey = keyof typeof tabs

export default function Benefits() {
  const [active, setActive] = useState<TabKey>('gym')

  return (
    <section className="relative bg-white pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* 우측 배경 이미지: 모바일에서 숨김 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/protein_splash.png"
        alt=""
        className="hidden md:block absolute right-8 md:right-16 bottom-0 w-[30%] h-auto object-contain pointer-events-none"
      />

      <div className="relative z-10 container mx-auto px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-body font-black text-3xl md:text-5xl text-brand-dark mb-10 md:mb-12 leading-tight break-keep"
        >
          놓아두면 돈이 되고,<br />
          <span className="text-gradient-brand">신경 쓸 게 없다</span>
        </motion.h2>

        {/* 탭 버튼 */}
        <div className="flex gap-8 mb-10 md:mb-12 border-b border-gray-100 max-w-full md:max-w-[60%]">
          {(Object.keys(tabs) as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`font-body font-bold text-sm pb-4 transition-colors duration-200 ${
                active === key
                  ? 'text-brand-dark border-b-2 border-brand-gold'
                  : 'text-gray-300 hover:text-gray-400'
              }`}
            >
              {tabs[key].label}
            </button>
          ))}
        </div>

        {/* 탭 콘텐츠 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-full md:max-w-[60%]"
          >
            {tabs[active].benefits.map((b) => (
              <div
                key={b.num}
                className="flex items-start gap-6 py-6 border-b border-gray-100"
              >
                <span className="font-body text-[11px] text-brand-gold font-bold tracking-widest mt-1 w-6 shrink-0">
                  {b.num}
                </span>
                <div>
                  <h3 className="font-body font-bold text-lg md:text-xl text-brand-dark leading-snug mb-1">
                    {b.title}
                  </h3>
                  <p className="font-body text-sm text-gray-400 font-medium leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
