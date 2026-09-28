'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { featuredHospitals } from '@/data/hospitals'

export default function HospitalsSection() {
  const t = useTranslations('hospitals')
  const tPages = useTranslations('pages.hospitals')
  const locale = useLocale()

  const getName = (h) => locale === 'ko' ? h.nameKo : h.name
  const getSpecialty = (h) => locale === 'mn' ? h.specialtyMn : h.specialty
  const getDesc = (h) => locale === 'mn' ? h.descMn : h.desc

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">Featured Hospitals</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-tight">{t('title')}</h2>
            <p className="text-slate-400 text-lg">{t('subtitle')}</p>
          </div>
          <Link
            href={`/${locale}/hospitals`}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            {t('viewAll')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {featuredHospitals.map((h, idx) => (
            <Link
              key={h.id}
              href={`/${locale}/hospitals/${h.id}`}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-100 hover:shadow-2xl hover:shadow-slate-300/60 hover:-translate-y-2 transition-all duration-300 block"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: idx === 0 ? '17rem' : '13rem' }}>
                <img
                  src={h.image}
                  alt={h.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Rating top-right */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-black px-2.5 py-1 rounded-full shadow">
                  ★ {h.rating}
                </div>

                {/* Specialty bottom-left */}
                <div className="absolute bottom-3 left-3 bg-blue-600/90 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {getSpecialty(h).split(', ')[0]}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-black text-slate-900 text-base leading-tight">{getName(h)}</h3>
                <p className="text-slate-400 text-xs mt-0.5 mb-3">{h.nameKo}</p>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-5">{getDesc(h)}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {h.location}
                  </span>
                  <span className="text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    {tPages('details')}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
