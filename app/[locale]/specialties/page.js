import { specialties } from '@/data/specialties'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function SpecialtiesPage({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.specialties' })

  const getName = (s) => {
    if (locale === 'mn') return s.labelMn
    if (locale === 'ko') return s.labelKo
    return s.label
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Specialties</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">{t('title')}</h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {specialties.map((s) => (
          <Link
            key={s.id}
            href={`/${locale}/specialties/${s.id}`}
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all group"
          >
            <div className="h-36 overflow-hidden bg-slate-50">
              <img
                src={s.image}
                alt={s.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                {getName(s)}
              </div>
              <div className="text-slate-400 text-xs mt-0.5">{s.labelKo}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
