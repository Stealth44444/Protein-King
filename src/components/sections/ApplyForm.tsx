'use client'

import { useActionState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { applyAction } from '@/app/actions/apply'

const inputClass =
  'w-full bg-white/[0.06] outline-none px-4 py-3 rounded-xl font-body text-white text-sm transition-all duration-200 placeholder:text-white/20'

const selectClass =
  'w-full bg-white/[0.06] outline-none px-4 py-3 rounded-xl font-body text-white text-sm transition-all duration-200 appearance-none cursor-pointer'

const labelClass = 'font-body text-xs uppercase text-white/30 font-semibold mb-1.5 block'

export default function ApplyForm() {
  const t = useTranslations('apply')
  const memberCounts = t.raw('memberCounts') as string[]
  const [state, action, isPending] = useActionState(applyAction, { success: false, errorCode: undefined })

  return (
    <section id="apply" className="py-20 md:py-28 bg-brand-dark">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* 좌측: 타이틀 + 안내 */}
          <div className="w-full lg:w-[36%]">
            <h2 className="font-body font-black text-3xl md:text-5xl text-white mb-5 leading-tight break-keep whitespace-pre-line">
              {t('title').split('\n').map((line, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-gradient-brand">{line}</span>
                ) : (
                  <span key={i}>{line}<br /></span>
                )
              )}
            </h2>
            <div className="space-y-3 mt-8">
              {(['note1', 'note2', 'note3'] as const).map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-gold shrink-0" />
                  <p className="font-body text-sm text-white/35 leading-relaxed break-keep">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 우측: 폼 */}
          <div className="w-full lg:w-[64%]">
            <div className="rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent p-8 md:p-10">
              <AnimatePresence mode="wait">
                {state.success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-7 h-7 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-body font-black text-white text-2xl mb-2">{t('successTitle')}</p>
                    <p className="font-body text-white/40 text-sm break-keep">{t('successDesc')}</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" action={action}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="businessName" className={labelClass}>
                          {t('fields.businessName')}                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          required
                          placeholder={t('fields.businessNamePlaceholder')}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="branchName" className={labelClass}>
                          {t('fields.branchName')}
                        </label>
                        <input
                          type="text"
                          id="branchName"
                          name="branchName"
                          placeholder={t('fields.branchNamePlaceholder')}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="contactName" className={labelClass}>
                        {t('fields.contactName')}                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        required
                        placeholder={t('fields.contactNamePlaceholder')}
                        className={inputClass}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          {t('fields.phone')}                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder={t('fields.phonePlaceholder')}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          {t('fields.email')}                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder={t('fields.emailPlaceholder')}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="memberCount" className={labelClass}>
                        {t('fields.memberCount')}
                      </label>
                      <div className="relative">
                        <select
                          id="memberCount"
                          name="memberCount"
                          className={selectClass}
                          defaultValue=""
                        >
                          <option value="" disabled>{t('fields.memberCountPlaceholder')}</option>
                          {memberCounts.map((count) => (
                            <option key={count} value={count} className="bg-[#1a1a1a] text-white">{count}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {state.errorCode && (
                        <motion.p
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="text-red-400 text-sm font-body mb-4 break-keep"
                        >
                          {t(state.errorCode as Parameters<typeof t>[0])}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      disabled={isPending}
                      className={`w-full font-body font-black text-base py-4 rounded-2xl transition-all duration-300
                        ${isPending
                          ? 'bg-white/5 text-white/30 cursor-not-allowed'
                          : 'bg-brand-gold text-brand-dark hover:brightness-110'
                        }
                      `}
                    >
                      {isPending ? t('submitting') : t('submit')}
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
