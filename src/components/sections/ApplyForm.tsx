'use client'

import { useActionState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { applyAction } from '@/app/actions/apply'

export default function ApplyForm() {
  const t = useTranslations('apply')
  const [state, action, isPending] = useActionState(applyAction, { success: false, errorCode: undefined })

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
          <h2 className="font-body font-black text-3xl md:text-5xl text-brand-dark mb-6 leading-tight break-keep whitespace-pre-line">
            {t('title').split('\n').map((line, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-gradient-brand">{line}</span>
              ) : (
                <span key={i}>{line}<br /></span>
              )
            )}
          </h2>
          <p className="font-body text-gray-400 text-base leading-relaxed mb-8">
            {t('subtitle')}
          </p>
          <div className="space-y-3">
            <p className="font-body text-sm text-gray-300">{t('note1')}</p>
            <p className="font-body text-sm text-gray-300">{t('note2')}</p>
            <p className="font-body text-sm text-gray-300">{t('note3')}</p>
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
                <label htmlFor="name" className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">
                  {t('fields.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t('fields.namePlaceholder')}
                  className="w-full bg-white border border-gray-200 focus:border-brand-dark outline-none px-5 py-4 rounded-xl font-body text-brand-dark text-sm transition-all placeholder:text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">
                  {t('fields.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder={t('fields.phonePlaceholder')}
                  className="w-full bg-white border border-gray-200 focus:border-brand-dark outline-none px-5 py-4 rounded-xl font-body text-brand-dark text-sm transition-all placeholder:text-gray-200"
                />
              </div>
            </div>

            {/* 이메일 */}
            <div className="space-y-2">
              <label htmlFor="email" className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">
                {t('fields.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t('fields.emailPlaceholder')}
                className="w-full bg-white border border-gray-200 focus:border-brand-dark outline-none px-5 py-4 rounded-xl font-body text-brand-dark text-sm transition-all placeholder:text-gray-200"
              />
            </div>

            {/* 시설명 */}
            <div className="space-y-2">
              <label htmlFor="gym" className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">
                {t('fields.gym')}
              </label>
              <input
                type="text"
                id="gym"
                name="gym"
                placeholder={t('fields.gymPlaceholder')}
                className="w-full bg-white border border-gray-200 focus:border-brand-dark outline-none px-5 py-4 rounded-xl font-body text-brand-dark text-sm transition-all placeholder:text-gray-200"
              />
            </div>

            {/* 시설 정보 (선택) */}
            <div className="space-y-2">
              <label htmlFor="details" className="font-body text-[9px] uppercase tracking-widest text-gray-400 font-medium">
                {t('fields.details')}{' '}
                <span className="text-gray-300 normal-case tracking-normal">
                  {t('fields.detailsOptional')}
                </span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={3}
                placeholder={t('fields.detailsPlaceholder')}
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
              {isPending ? t('submitting') : t('submit')}
            </button>

            <AnimatePresence mode="wait">
              {state.errorCode && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-center text-sm font-body"
                >
                  {t(state.errorCode)}
                </motion.p>
              )}
              {state.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-brand-gold/30 bg-brand-gold/5 p-6 rounded-xl text-center"
                >
                  <p className="font-body font-black text-brand-dark text-lg mb-1">{t('successTitle')}</p>
                  <p className="font-body text-gray-400 text-sm">{t('successDesc')}</p>
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
