import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  turbopack: {
    // Silence workspace-root inference warning when a parent-level package-lock.json exists
    root: __dirname,
  },
}

export default withNextIntl(nextConfig)
