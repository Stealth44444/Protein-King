'use client'

import { useActionState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { applyAction } from '@/app/actions/apply'

export default function ApplyForm() {
  const [state, action, isPending] = useActionState(applyAction, { success: false })

  return (
    <section id="apply" className="py-16 md:py-32 bg-white px-8 md:px-16">
      <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

        {/* 좌측: 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-[40%] md:sticky md:top-32"
        >
          <h2 className="font-body font-black text-3xl md:text-5xl text-brand-dark mb-6 leading-tight break-keep">
            지금 바로 시작하세요,<br />
            <span className="text-gradient-brand">무료 상담 신청</span>
          </h2>
          <p className="font-body text-gray-400 text-base leading-relaxed mb-8">
            단순 자판기 설치를 넘어, 수익성과 서비스 품질을 동시에 높이는 파트너십입니다.
          </p>
          <div className="space-y-3">
            <p className="font-body text-sm text-gray-300">
              신청서 접수 후 영업일 기준 1~2일 내 담당자가 직접 연락드립니다.
            </p>
            <p className="font-body text-sm text-gray-300">
              도입 비용, 수익 구조, 설치 일정 등 모든 궁금증을 상담해드립니다.
            </p>
            <p className="font-body text-sm text-gray-300">
              상담은 무료이며 도입 여부와 무관하게 진행됩니다.
            </p>
          </div>
        </motion.div>

        {/* 우측: 폼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full md:w-[60%]"
        >
          <form action={action} className="space-y-5">

            {/* 이름 + 전화번호 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="성함을 입력해주세요"
                  className="w-full bg-white border border-gray-200 focus:border-brand-dark outline-none px-5 py-4 rounded-xl font-body text-brand-dark text-sm transition-all placeholder:text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">전화번호</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="010-1234-5678"
                  className="w-full bg-white border border-gray-200 focus:border-brand-dark outline-none px-5 py-4 rounded-xl font-body text-brand-dark text-sm transition-all placeholder:text-gray-200"
                />
              </div>
            </div>

            {/* 이메일 */}
            <div className="space-y-2">
              <label htmlFor="email" className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@email.com"
                className="w-full bg-white border border-gray-200 focus:border-brand-dark outline-none px-5 py-4 rounded-xl font-body text-brand-dark text-sm transition-all placeholder:text-gray-200"
              />
            </div>

            {/* 시설명 */}
            <div className="space-y-2">
              <label htmlFor="gym" className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">시설명</label>
              <input
                type="text"
                id="gym"
                name="gym"
                placeholder="헬스장 또는 기관명"
                className="w-full bg-white border border-gray-200 focus:border-brand-dark outline-none px-5 py-4 rounded-xl font-body text-brand-dark text-sm transition-all placeholder:text-gray-200"
              />
            </div>

            {/* 시설 정보 (선택) */}
            <div className="space-y-2">
              <label htmlFor="details" className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">
                시설 정보 <span className="text-gray-300 normal-case tracking-normal">(선택)</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={3}
                placeholder="시설 규모, 위치, 문의 사항 등을 자유롭게 적어주세요"
                className="w-full bg-white border border-gray-200 focus:border-brand-dark outline-none px-5 py-4 rounded-xl font-body text-brand-dark text-sm transition-all placeholder:text-gray-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className={`w-full font-body font-black text-base py-5 rounded-xl transition-all duration-300 mt-2
                ${isPending
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-brand-dark text-white hover:bg-brand-gold hover:text-brand-dark'
                }
              `}
            >
              {isPending ? '전송 중...' : '무료 상담 신청하기'}
            </button>

            <AnimatePresence mode="wait">
              {state.error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-center text-sm font-body"
                >
                  {state.error}
                </motion.p>
              )}
              {state.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-brand-gold/30 bg-brand-gold/5 p-6 rounded-xl text-center"
                >
                  <p className="font-body font-black text-brand-dark text-lg mb-1">신청이 완료되었습니다</p>
                  <p className="font-body text-gray-400 text-sm">전문 상담사가 가이드북과 함께 연락드리겠습니다.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

      </div>
      </div>
    </section>
  )
}
