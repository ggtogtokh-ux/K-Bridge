'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { specialties } from '@/data/specialties'

export default function SpecialtiesSection() {
  const t = useTranslations('specialties')
  const locale = useLocale()

  const getName = (s) => {
    if (locale === 'mn') return s.labelMn
    if (locale === 'ko') return s.labelKo
    return s.label
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Medical Fields</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-1">{t('title')}</h2>
          <p className="text-slate-400 text-lg">{t('subtitle')}</p>
        </div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {specialties.map((s) => (
            <Link
              key={s.id}
              href={`/${locale}/specialties/${s.id}`}
              className="group relative flex-shrink-0 w-72 h-52 rounded-2xl overflow-hidden"
            >
              <img
                src={s.image}
                alt={s.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-5 left-5">
                <h3 className="text-white font-bold text-xl leading-tight mb-1">{getName(s)}</h3>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors">
                  View services →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA — right aligned */}
        <div className="flex justify-end mt-8">
          <Link
            href={`/${locale}/specialties`}
            className="bg-blue-950 text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-blue-900 transition-colors shadow-lg"
          >
            {t('viewAll')} →
          </Link>
        </div>
      </div>
    </section>
  )
}
