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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((s) => (
          <Link
            key={s.id}
            href={`/${locale}/specialties/${s.id}`}
            className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 block"
            style={{ height: '14rem' }}
          >
            <img
              src={s.image}
              alt={s.label}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="font-bold text-white text-lg leading-tight">{getName(s)}</div>
              <div className="text-white/60 text-sm mt-0.5 group-hover:text-white/90 transition-colors">
                {s.labelKo}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
