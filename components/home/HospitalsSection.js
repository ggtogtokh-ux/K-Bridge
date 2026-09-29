'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { hospitals } from '@/data/hospitals'

export default function HospitalsSection() {
  const t = useTranslations('hospitals')
  const tPages = useTranslations('pages.hospitals')
  const locale = useLocale()

  const getName = (h) => locale === 'ko' ? h.nameKo : h.name
  const getSpecialty = (h) => locale === 'mn' ? h.specialtyMn : h.specialty
  const getDesc = (h) => locale === 'mn' ? h.descMn : h.desc

  const displayed = hospitals.slice(0, 9)

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Partner Hospitals</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-1">{t('title')}</h2>
          <p className="text-slate-400 text-lg">{t('subtitle')}</p>
        </div>

        {/* 3×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((h) => (
            <Link
              key={h.id}
              href={`/${locale}/hospitals/${h.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={h.image}
                  alt={h.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-black px-2.5 py-1 rounded-full">
                  ★ {h.rating}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {getSpecialty(h).split(', ').slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-teal-50 text-teal-600 border border-teal-100 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug mb-1">{getName(h)}</h3>
                <p className="text-slate-400 text-xs mb-3">{h.nameKo}</p>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 flex-1">{getDesc(h)}</p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {h.location}
                  </span>
                  <span className="text-teal-600 text-xs font-bold group-hover:underline">
                    View hospital profile →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
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
