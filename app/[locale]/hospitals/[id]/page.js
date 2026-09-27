import { hospitals } from '@/data/hospitals'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

export function generateStaticParams() {
  return hospitals.map((h) => ({ id: String(h.id) }))
}

export default async function HospitalDetailPage({ params }) {
  const { locale, id } = params
  const hospital = hospitals.find((h) => String(h.id) === id)
  if (!hospital) notFound()

  const t = await getTranslations({ locale, namespace: 'pages.hospitals' })

  const getName = (h) => locale === 'ko' ? h.nameKo : h.name
  const getSpecialties = (h) => locale === 'mn' ? h.specialtyMn : h.specialty
  const getDesc = (h) => locale === 'mn' ? h.descMn : h.desc

  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <Link
        href={`/${locale}/hospitals`}
        className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {t('back')}
      </Link>

      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="h-72 overflow-hidden bg-slate-50">
          <img
            src={hospital.image}
            alt={hospital.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{getName(hospital)}</h1>
              <p className="text-slate-400 mt-1">{hospital.nameKo}</p>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-50 text-amber-600 font-semibold px-3 py-1.5 rounded-full shrink-0">
              <span>★</span>
              <span>{hospital.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {hospital.location}
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {getSpecialties(hospital).split(', ').map((s) => (
                <span key={s} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">{getDesc(hospital)}</p>

          <div className="border-t border-slate-100 pt-6 mt-8">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              {t('book')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
