import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className="bg-brand-dark border-t border-white/10 py-10">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">

          {/* 로고 + 설명 */}
          <div className="space-y-4 max-w-sm">
            <Image src="/logo.png" alt="Protein King" width={1288} height={236} className="h-5 md:h-9 w-auto" />
            <p className="font-body text-sm text-gray-500">{t('tagline')}</p>
          </div>

          {/* 이메일 */}
          <div className="space-y-2">
            <h3 className="font-body text-xs uppercase text-gray-600 font-medium">Email</h3>
            <p className="font-body text-sm text-gray-500">contact@proteinking.co.kr</p>
          </div>

          {/* 전화 */}
          <div className="space-y-2">
            <h3 className="font-body text-xs uppercase text-gray-600 font-medium">Phone</h3>
            <p className="font-body text-sm text-gray-500">1588-0000</p>
          </div>

          {/* 주소 */}
          <div className="space-y-2">
            <h3 className="font-body text-xs uppercase text-gray-600 font-medium">Address</h3>
            <p className="font-body text-sm text-gray-500 leading-snug">West Wing 2/F, 822 Lai Chi Kok Road,<br />Cheung Sha Wan, Kowloon,<br />Hong Kong SAR</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="font-body text-xs text-gray-600 uppercase">
            {t('copy')}
          </p>
        </div>
      </div>
    </footer>
  )
}
