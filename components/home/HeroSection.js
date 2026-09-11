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
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-orb" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sky-400/8 blur-3xl animate-orb" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl animate-orb" style={{ animationDelay: '6s' }} />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 bg-white/8 backdrop-blur border border-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-blue-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-shimmer" />
              {t('badge')}
            </div>

            {/* Title */}
            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6 whitespace-pre-line">
              {t('title')}
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up-delay-2 text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              {t('subtitle')}
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="group bg-white text-slate-900 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-xl shadow-black/20 hover:shadow-blue-500/20 hover:-translate-y-0.5"
              >
                {t('cta')}
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={`/${locale}/hospitals`}
                className="border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all backdrop-blur"
              >
                {t('cta2')}
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <div
                  key={s.key}
                  className="text-center p-3 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 transition-all"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{t(`stats.${s.key}`)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — flying bird */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute -inset-8 rounded-full bg-blue-400/10 blur-3xl animate-shimmer" />
              <div className="absolute -inset-4 rounded-full bg-white/5 blur-xl animate-shimmer" style={{ animationDelay: '1.5s' }} />

              {/* Circle container */}
              <div className="animate-bird-soar relative w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Inner soft gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                {/* Bird image */}
                <div className="relative w-64 h-64">
                  <Image
                    src="/logo-bird.png"
                    alt="경청 INC"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </div>
              </div>

              {/* Floating dots */}
              <div className="absolute -top-2 right-10 w-3 h-3 rounded-full bg-blue-300/70 animate-shimmer" />
              <div className="absolute bottom-4 -left-4 w-4 h-4 rounded-full bg-sky-200/50 animate-shimmer" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 -right-6 w-2 h-2 rounded-full bg-white/60 animate-shimmer" style={{ animationDelay: '2s' }} />
              <div className="absolute -bottom-4 right-1/3 w-2.5 h-2.5 rounded-full bg-blue-200/60 animate-shimmer" style={{ animationDelay: '0.7s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full fill-white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
