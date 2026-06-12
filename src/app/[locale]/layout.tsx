import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'

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
  title: 'Protein King — Instant Blend Vending',
  description: 'Install a Protein King station at your gym. Fixed monthly revenue, zero inventory hassle.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Validate that the incoming locale is supported; 404 otherwise
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound()
  }

  // Load all messages for the current locale into the client provider
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
