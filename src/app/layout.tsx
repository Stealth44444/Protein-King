// Root layout: passthrough shell required by Next.js App Router.
// html/body tags and font variables are provided by [locale]/layout.tsx.
// Next.js requires this file to exist, but the locale segment owns the shell.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement
}
