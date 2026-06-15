import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className="bg-brand-dark border-t border-white/10 py-10">
      <div className="max-w-[1280px] mx-auto w-full px-4 md:px-6 xl:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">

          {/* 로고 + 설명 */}
          <div className="space-y-4 max-w-sm">
            <Image src="/logo.png" alt="Protein King" width={1288} height={236} className="h-5 md:h-9 w-auto" />
            <p className="font-body text-sm text-gray-500">{t('tagline')}</p>
          </div>

          {/* 이메일 */}
          <div className="space-y-2">
            <h3 className="font-body text-xs uppercase text-gray-600 font-medium">Email</h3>
            <p className="font-body text-sm text-gray-500">proteinking.ltd@gmail.com</p>
          </div>

          {/* 주소 */}
          <div className="space-y-2">
            <h3 className="font-body text-xs uppercase text-gray-600 font-medium">Address</h3>
            <p className="font-body text-sm text-gray-500 leading-snug">West Wing 2/F, 822 Lai Chi Kok Road,<br />Cheung Sha Wan, Kowloon,<br />Hong Kong SAR</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-600 uppercase">
            {t('copy')}
          </p>
          <a
            href="https://instagram.com/proteinking_hk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-brand-gold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
