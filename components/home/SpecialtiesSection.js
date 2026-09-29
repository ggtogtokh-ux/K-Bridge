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

  const displayed = specialties.slice(0, 9)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Medical Fields</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-1">{t('title')}</h2>
          <p className="text-slate-400 text-lg">{t('subtitle')}</p>
        </div>

        {/* 3×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((s) => (
            <Link
              key={s.id}
              href={`/${locale}/specialties/${s.id}`}
              className="group relative rounded-2xl overflow-hidden block"
              style={{ height: '13rem' }}
            >
              <img
                src={s.image}
                alt={s.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-bold text-white text-lg leading-tight">{getName(s)}</div>
                <div className="text-white/70 text-sm mt-1 group-hover:text-white transition-colors">
                  View services →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
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
