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
    <section className="py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Medical Fields</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">{t('title')}</h2>
          <p className="text-slate-400 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {specialties.map((s) => (
            <Link
              key={s.id}
              href={`/${locale}/specialties/${s.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="h-28 overflow-hidden bg-slate-50 relative">
                <img
                  src={s.image}
                  alt={s.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-3 text-center">
                <div className="font-bold text-slate-700 text-xs group-hover:text-blue-600 transition-colors leading-tight">
                  {getName(s)}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${locale}/specialties`}
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-7 py-3.5 rounded-2xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 transition-all"
          >
            {t('viewAll')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
