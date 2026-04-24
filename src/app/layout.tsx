import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Protein King — 즉석 블렌딩 자판기',
  description: '헬스장에 프로틴 킹 자판기를 설치하세요. 고정 자릿세 수입, 재고 부담 없음.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  )
}
