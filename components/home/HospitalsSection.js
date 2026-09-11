'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

const hospitals = [
  {
    id: 1,
    name: 'Samsung Medical Center',
    nameKo: '삼성서울병원',
    specialty: 'Oncology, Cardiology',
    location: 'Seoul',
    rating: 4.9,
    patients: '500+',
    image: '🏥',
  },
  {
    id: 2,
    name: 'Asan Medical Center',
    nameKo: '서울아산병원',
    specialty: 'Organ Transplant, Neurology',
    location: 'Seoul',
    rating: 4.9,
    patients: '450+',
    image: '🏥',
  },
  {
    id: 3,
    name: 'Seoul National University Hospital',
    nameKo: '서울대학교병원',
    specialty: 'General, Research',
    location: 'Seoul',
    rating: 4.8,
    patients: '380+',
    image: '🏥',
  },
]

export default function HospitalsSection() {
  const t = useTranslations('hospitals')
  const locale = useLocale()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{t('title')}</h2>
            <p className="text-slate-500 text-lg">{t('subtitle')}</p>
          </div>
          <Link
            href={`/${locale}/hospitals`}
            className="text-blue-600 font-semibold hover:underline whitespace-nowrap flex items-center gap-1"
          >
            {t('viewAll')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hospitals.map((h) => (
            <div
              key={h.id}
              className="border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 h-40 flex items-center justify-center text-6xl">
                {h.image}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="font-bold text-slate-900">{h.name}</h3>
                    <p className="text-slate-400 text-xs">{h.nameKo}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 text-amber-600 text-xs font-semibold px-2 py-1 rounded-full shrink-0">
                    <span>★</span>
                    <span>{h.rating}</span>
                  </div>
                </div>

                <p className="text-blue-600 text-sm font-medium mt-2">{h.specialty}</p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {h.location}
                  </span>
                  <span>{h.patients} patients</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
