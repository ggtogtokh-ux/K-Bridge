import { specialties } from '@/data/specialties'
import { hospitals } from '@/data/hospitals'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

export function generateStaticParams() {
  return specialties.map((s) => ({ id: s.id }))
}

export default async function SpecialtyDetailPage({ params }) {
  const { locale, id } = await params
  const specialty = specialties.find((s) => s.id === id)
  if (!specialty) notFound()

  const t = await getTranslations({ locale, namespace: 'pages.specialties' })

  const getName = (s) => {
    if (locale === 'mn') return s.labelMn
    if (locale === 'ko') return s.labelKo
    return s.label
  }

  const getDesc = (s) => {
    if (locale === 'mn') return s.descMn
    return s.desc
  }

  const relatedHospitals = hospitals.filter((h) =>
    h.specialty.toLowerCase().includes(specialty.label.toLowerCase()) ||
    h.specialtyMn.includes(specialty.labelMn.split(',')[0].trim())
  ).slice(0, 6)

  const getHospitalName = (h) => locale === 'ko' ? h.nameKo : h.name
  const getHospitalDesc = (h) => locale === 'mn' ? h.descMn : h.desc

  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <Link
        href={`/${locale}/specialties`}
        className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {t('back')}
      </Link>

      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm mb-8">
        <div className="h-64 overflow-hidden bg-slate-50">
          <img
            src={specialty.image}
            alt={specialty.label}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{specialty.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{getName(specialty)}</h1>
              <p className="text-slate-400 text-sm">{specialty.labelKo}</p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mt-4">{getDesc(specialty)}</p>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              {t('consult')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {relatedHospitals.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-5">{t('relatedHospitals')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedHospitals.map((h) => (
              <Link
                key={h.id}
                href={`/${locale}/hospitals/${h.id}`}
                className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-50 shrink-0">
                  <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 text-sm truncate">{getHospitalName(h)}</div>
                  <div className="text-slate-500 text-xs mt-0.5 line-clamp-2">{getHospitalDesc(h)}</div>
                  <div className="text-blue-600 text-xs mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {h.location}
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1 bg-amber-50 text-amber-600 text-xs font-semibold px-2 py-1 rounded-full shrink-0">
                  ★ {h.rating}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
