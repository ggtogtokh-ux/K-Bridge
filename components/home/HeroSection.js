'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

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
    <section className="relative overflow-hidden bg-white">
      {/* Subtle blue background on right */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 via-sky-50/50 to-transparent" />

      {/* Decorative circle */}
      <div className="absolute top-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full border border-blue-100" />
      <div className="absolute top-[-40px] right-[-40px] w-[380px] h-[380px] rounded-full border border-blue-100/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[88vh] py-16">

          {/* Left — text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-sm font-medium text-blue-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-shimmer" />
              {t('badge')}
            </div>

            {/* Title */}
            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900 mb-5 whitespace-pre-line">
              {t('title')}
            </h1>

            {/* Divider */}
            <div className="animate-fade-up-delay-1 w-16 h-1 bg-blue-600 rounded-full mb-5" />

            {/* Subtitle */}
            <p className="animate-fade-up-delay-2 text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              {t('subtitle')}
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-3 mb-12">
              <Link
                href={`/${locale}/contact`}
                className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
              >
                {t('cta')}
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={`/${locale}/hospitals`}
                className="bg-white border-2 border-slate-200 hover:border-blue-300 text-slate-700 font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
              >
                {t('cta2')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-slate-100">
              {stats.map((s) => (
                <div key={s.key} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{s.value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{t(`stats.${s.key}`)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bird logo */}
          <div className="order-1 lg:order-2 flex items-center justify-center py-8 lg:py-0">
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute inset-0 scale-110 rounded-full bg-blue-100/40 blur-3xl" />

              {/* Bird — natural on light bg */}
              <div className="animate-bird-soar relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
                <Image
                  src="/logo-bird.png"
                  alt="경청 INC"
                  fill
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>

              {/* Floating accent dots */}
              <div className="absolute top-6 right-0 w-3 h-3 rounded-full bg-blue-400/50 animate-shimmer" />
              <div className="absolute bottom-10 left-2 w-4 h-4 rounded-full bg-sky-300/40 animate-shimmer" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-blue-300/60 animate-shimmer" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
