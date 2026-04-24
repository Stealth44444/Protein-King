'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-colors duration-300 ${
        scrolled ? 'bg-brand-dark' : 'bg-transparent'
      }`}
    >
      <Image src="/logo.svg" alt="Protein King" width={36} height={36} priority />
      <a
        href="#apply"
        className="font-body text-[10px] font-semibold tracking-[0.25em] text-white border border-white/40 px-4 py-2 hover:border-white hover:bg-white hover:text-brand-dark transition-all duration-200"
      >
        파트너 신청
      </a>
    </header>
  )
}
