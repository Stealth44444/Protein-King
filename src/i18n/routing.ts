import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'hk', 'ko'],
  defaultLocale: 'en',
})
