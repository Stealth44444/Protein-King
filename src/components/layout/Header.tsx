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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-3 transition-all duration-300 ${
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

      <a
        href="#apply"
        className="font-body text-[10px] font-semibold tracking-[0.25em] px-4 py-2 rounded-full bg-brand-dark text-white transition-all duration-200 hover:bg-brand-gold hover:text-brand-dark"
      >
        Contact
      </a>
    </header>
  )
}
