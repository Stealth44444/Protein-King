import { getTranslations } from 'next-intl/server'

export default async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-8 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">

          {/* 로고 + 설명 */}
          <div className="space-y-4 max-w-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Protein King" className="h-12 md:h-16 w-auto -ml-7 md:-ml-14" />
            <p className="font-body text-sm text-gray-400">국내 유일 프로틴 자판기 브랜드</p>
          </div>

          {/* 연락처 */}
          <div className="space-y-4">
            <h3 className="font-body text-[9px] uppercase tracking-widest text-gray-300 font-medium">Contact</h3>
            <div className="flex flex-col space-y-2 font-body text-sm text-gray-400">
              <p>contact@proteinking.co.kr</p>
              <p>1588-0000</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <p className="font-body text-xs text-gray-300 tracking-widest uppercase">
            {t('copy')}
          </p>
        </div>
      </div>
    </footer>
  )
}
