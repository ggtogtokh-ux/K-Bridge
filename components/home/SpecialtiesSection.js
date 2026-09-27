'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { specialties } from '@/data/specialties'

export default function SpecialtiesSection() {
  const t = useTranslations('specialties')
  const locale = useLocale()

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">{t('title')}</h2>
          <p className="text-slate-500 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {specialties.map((s) => (
            <Link
              key={s.id}
              href={`/${locale}/specialties#${s.id}`}
              className="bg-white rounded-2xl p-4 text-center hover:shadow-md hover:-translate-y-0.5 transition-all border border-slate-100 group"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-semibold text-slate-800 text-xs group-hover:text-blue-600 transition-colors leading-tight">
                {s.label}
              </div>
              <div className="text-slate-400 text-xs mt-0.5 leading-tight">{s.labelMn}</div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href={`/${locale}/specialties`}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
          >
            {t('viewAll')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
