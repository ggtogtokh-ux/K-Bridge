import { hospitals } from '@/data/hospitals'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function HospitalsPage({ params }) {
  const { locale } = params
  const t = await getTranslations({ locale, namespace: 'pages.hospitals' })

  const getName = (h) => locale === 'ko' ? h.nameKo : h.name
  const getSpecialty = (h) => locale === 'mn' ? h.specialtyMn : h.specialty
  const getDesc = (h) => locale === 'mn' ? h.descMn : h.desc

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Partner Hospitals</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">{t('title')}</h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          {hospitals.length} {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hospitals.map((h) => (
          <Link
            key={h.id}
            href={`/${locale}/hospitals/${h.id}`}
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all block"
          >
            <div className="h-44 overflow-hidden bg-slate-50">
              <img
                src={h.image}
                alt={h.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h2 className="font-bold text-slate-900 text-sm leading-tight">{getName(h)}</h2>
                  <p className="text-slate-400 text-xs mt-0.5">{h.nameKo}</p>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-600 text-xs font-semibold px-2 py-1 rounded-full shrink-0">
                  <span>★</span>
                  <span>{h.rating}</span>
                </div>
              </div>

              <p className="text-blue-600 text-xs font-medium mb-2">{getSpecialty(h)}</p>
              <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{getDesc(h)}</p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="flex items-center text-xs text-slate-500">
                  <svg className="w-3.5 h-3.5 mr-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {h.location}
                </span>
                <span className="text-blue-600 text-xs font-semibold">{t('details')}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
