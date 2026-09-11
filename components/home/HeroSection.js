'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

const stats = [
  { key: 'hospitals', value: '50+' },
  { key: 'patients', value: '2,000+' },
  { key: 'specialties', value: '30+' },
  { key: 'years', value: '5+' },
]

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky-300/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t('badge')}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 whitespace-pre-line">
            {t('title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
            >
              {t('cta')}
            </Link>
            <Link
              href={`/${locale}/hospitals`}
              className="border-2 border-white/50 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              {t('cta2')}
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.key}
              className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-6 py-5 text-center"
            >
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-blue-100 text-sm mt-1">{t(`stats.${s.key}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
