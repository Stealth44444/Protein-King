'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface FacilityItem {
  icon: string
  name: string
  desc: string
}

const FACILITY_IMAGES = [
  '/facilities/fitness_gym.jpg',
  '/facilities/pilates.jpg',
  '/facilities/crossfit.jpg',
  '/facilities/f45.jpg',
  '/facilities/hyrox.jpg',
  '/facilities/climbing.jpg',
  '/facilities/university.jpg',
  '/facilities/hotel.jpg',
  '/facilities/office.jpg',
]

export default function FacilityTypes() {
  const t = useTranslations('facilityTypes')
  const items = t.raw('items') as FacilityItem[]

  return (
    <section className="bg-brand-dark py-20 md:py-32">
      <div className="wrapper">
        <div className="mb-12 md:mb-16">
          <h2 className="font-body font-black text-3xl md:text-5xl text-white leading-tight break-words whitespace-pre-line">
            {t('title').split('\n').map((line, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-gradient-brand">{line}</span>
              ) : (
                <span key={i}>{line}<br /></span>
              )
            )}
          </h2>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex overflow-x-auto gap-3 -mx-4 px-4 snap-x snap-mandatory pb-4 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, i) => (
            <div key={i} className="shrink-0 w-[65vw] snap-start aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src={FACILITY_IMAGES[i]}
                alt={item.name}
                fill
                className="object-cover"
                sizes="65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-body font-bold text-white text-sm leading-snug break-words">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-default"
            >
              <Image
                src={FACILITY_IMAGES[i]}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-body font-bold text-white text-base mb-1 break-words leading-snug">{item.name}</h3>
                <p className="font-body text-xs text-white/55 leading-relaxed break-words line-clamp-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
