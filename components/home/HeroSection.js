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
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-3xl animate-orb" style={{ animationDelay: '6s' }} />
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
            <div className="animate-fade-up inline-flex items-center gap-2 bg-white/8 backdrop-blur border border-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-blue-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-shimmer" />
              {t('badge')}
            </div>

            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-5 whitespace-pre-line">
              {t('title')}
            </h1>

            <div className="animate-fade-up-delay-1 w-16 h-1 bg-blue-400 rounded-full mb-5" />

            <p className="animate-fade-up-delay-2 text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              {t('subtitle')}
            </p>

            <div className="animate-fade-up-delay-3 flex flex-wrap gap-3 mb-12">
              <Link
                href={`/${locale}/contact`}
                className="group bg-white text-slate-900 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5"
              >
                {t('cta')}
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={`/${locale}/hospitals`}
                className="border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all"
              >
                {t('cta2')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.key} className="text-center">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{t(`stats.${s.key}`)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — logo card */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-3xl bg-blue-500/10 blur-3xl animate-shimmer" />

              {/* White card */}
              <div className="animate-bird-soar relative bg-white rounded-3xl shadow-2xl shadow-black/30 p-10 flex items-center justify-center" style={{ width: 340, height: 340 }}>
                {/* Subtle inner gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 via-white to-slate-50" />

                {/* Logo */}
                <div className="relative w-64 h-64 z-10">
                  <Image
                    src="/logo-bird.png"
                    alt="경청 INC"
                    fill
                    className="object-contain drop-shadow-sm animate-bird-float"
                    priority
                  />
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-shimmer">
                경청 INC
              </div>

              {/* Floating dots */}
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-sky-400/70 animate-shimmer" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-6 w-2.5 h-2.5 rounded-full bg-white/50 animate-shimmer" style={{ animationDelay: '2s' }} />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 70" className="w-full fill-white">
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" />
        </svg>
      </div>
    </section>
  )
}
