'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { hospitals } from '@/data/hospitals'

export default function HospitalsSection() {
  const t = useTranslations('hospitals')
  const locale = useLocale()

  const getName = (h) => locale === 'ko' ? h.nameKo : h.name
  const getSpecialty = (h) => locale === 'mn' ? h.specialtyMn : h.specialty
  const getDesc = (h) => locale === 'mn' ? h.descMn : h.desc

  const displayed = hospitals.slice(0, 8)

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Featured Hospitals</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-1">{t('title')}</h2>
          <p className="text-slate-400 text-lg">{t('subtitle')}</p>
        </div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayed.map((h) => (
            <Link
              key={h.id}
              href={`/${locale}/hospitals/${h.id}`}
              className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {getSpecialty(h).split(', ').slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-teal-50 text-teal-600 border border-teal-100 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Name */}
              <h3 className="font-bold text-teal-800 text-base leading-snug mb-2">{getName(h)}</h3>

              {/* Desc */}
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">{getDesc(h)}</p>
            </Link>
          ))}
        </div>

        {/* CTA — right aligned */}
        <div className="flex justify-end mt-8">
          <Link
            href={`/${locale}/hospitals`}
            className="bg-blue-950 text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-blue-900 transition-colors shadow-lg"
          >
            {t('viewAll')} →
          </Link>
        </div>
      </div>
    </section>
  )
}
