'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

const LOCALE_LABELS: Record<string, string> = {
  en: 'EN',
  'zh-HK': '廣東話',
  ko: 'KO',
}

const LOCALES = ['en', 'zh-HK', 'ko'] as const

export default function Header() {
  const t = useTranslations('header')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <a href="#" aria-label="홈으로">
        <Image
          src="/logo.png"
          alt="Protein King"
          width={1288}
          height={236}
          className="w-auto h-5 md:h-9 object-contain"
          priority
        />
      </a>

      <div className="flex items-center gap-4">
        {/* Locale switcher */}
        <div className="flex items-center gap-1.5">
          {LOCALES.map((loc, i) => (
            <span key={loc} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="font-body text-[10px] text-brand-dark opacity-20 select-none">
                  |
                </span>
              )}
              <button
                onClick={() => switchLocale(loc)}
                className={`font-body text-[10px] font-semibold tracking-[0.2em] transition-opacity duration-200 ${
                  locale === loc
                    ? 'text-brand-dark opacity-100'
                    : 'text-brand-dark opacity-40 hover:opacity-70'
                }`}
                aria-label={`Switch to ${LOCALE_LABELS[loc]}`}
                aria-current={locale === loc ? 'true' : undefined}
              >
                {LOCALE_LABELS[loc]}
              </button>
            </span>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#apply"
          className="font-body text-[10px] font-semibold tracking-[0.25em] px-4 py-2 rounded-full bg-brand-dark text-white transition-all duration-200 hover:bg-brand-gold hover:text-brand-dark"
        >
          {t('cta')}
        </a>
      </div>
    </header>
  )
}
