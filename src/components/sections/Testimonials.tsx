'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface TestimonialItem {
  name: string
  role: string
  initials: string
  color: string
  text: string
  headline?: string
  stars?: number
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ item }: { item: TestimonialItem }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: item.color + '28', color: item.color }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      </div>
      <div className="min-w-0">
        <p className="font-body font-bold text-sm text-white leading-none mb-1">{item.name}</p>
        <p className="font-body text-xs text-gray-500 truncate">{item.role}</p>
      </div>
    </div>
  )
}

function TestimonialCard({ item, index }: { item: TestimonialItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col gap-4 h-full"
    >
      {item.headline && (
        <h3 className="font-body font-black text-xl text-white leading-snug break-words">
          {item.headline}
        </h3>
      )}
      <StarRating />
      <p className="font-body text-sm text-gray-400 leading-relaxed flex-1 break-words">
        {item.text}
      </p>
      <div className="pt-4 border-t border-white/5">
        <Avatar item={item} />
      </div>
    </motion.div>
  )
}

function TestimonialCardWide({ item, index }: { item: TestimonialItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-[#1a1a1a] rounded-2xl p-8 flex flex-col md:flex-row md:gap-12 md:items-center"
    >
      <div className="flex-1 min-w-0 flex flex-col gap-4">
        {item.headline && (
          <h3 className="font-body font-black text-xl text-white leading-snug break-words">
            {item.headline}
          </h3>
        )}
        <StarRating />
        <p className="font-body text-sm text-gray-400 leading-relaxed break-words">
          {item.text}
        </p>
      </div>
      <div className="mt-6 md:mt-0 md:shrink-0 md:pl-12 md:border-l md:border-white/10">
        <Avatar item={item} />
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const t = useTranslations('testimonials')
  const items = t.raw('items') as TestimonialItem[]
  const titleLines = t('title').split('\n')

  return (
    <section className="bg-brand-dark py-20 md:py-32 overflow-hidden">
      <div className="wrapper">
        <div className="mb-12 md:mb-16">
          <h2 className="font-body font-black text-3xl md:text-5xl text-white leading-tight [word-break:keep-all]">
            {titleLines.map((line, i) =>
              i === titleLines.length - 1 ? (
                <span key={i} className="text-gradient-brand">{line}</span>
              ) : (
                <span key={i}>{line}<br /></span>
              )
            )}
          </h2>
        </div>

        {/* Desktop: bento grid — 2+1 / 1+1+1 / full-width */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          <div className="col-span-2"><TestimonialCard item={items[0]} index={0} /></div>
          <div className="col-span-1"><TestimonialCard item={items[1]} index={1} /></div>
          <div className="col-span-1"><TestimonialCard item={items[2]} index={2} /></div>
          <div className="col-span-1"><TestimonialCard item={items[3]} index={3} /></div>
          <div className="col-span-1"><TestimonialCard item={items[4]} index={4} /></div>
          <div className="col-span-3"><TestimonialCardWide item={items[5]} index={5} /></div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex overflow-x-auto gap-3 -mx-4 px-4 snap-x snap-mandatory pb-4 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, i) => (
            <div key={i} className="shrink-0 w-[80vw] snap-start">
              <TestimonialCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
