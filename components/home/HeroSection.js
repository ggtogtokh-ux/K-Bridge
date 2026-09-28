'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { key: 'hospitals', value: '50+', icon: '🏥' },
  { key: 'patients', value: '2,000+', icon: '👥' },
  { key: 'specialties', value: '30+', icon: '⚕️' },
  { key: 'years', value: '5+', icon: '⭐' },
]

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045]" style={{
        backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)',
        backgroundSize: '36px 36px',
      }} />

      {/* Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-blue-600/12 blur-3xl animate-orb pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-3xl animate-orb pointer-events-none" style={{ animationDelay: '5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-400/25 rounded-full px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-shimmer" />
              {t('badge')}
            </div>

            <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-[4.25rem] font-black leading-[1.08] text-white mb-6 whitespace-pre-line tracking-tight">
              {t('title')}
            </h1>

            {/* Accent line trio */}
            <div className="animate-fade-up-delay-1 flex items-center gap-2 mb-7">
              <div className="h-1 w-14 rounded-full bg-blue-400" />
              <div className="h-1 w-5 rounded-full bg-blue-400/40" />
              <div className="h-1 w-2 rounded-full bg-blue-400/20" />
            </div>

            <p className="animate-fade-up-delay-2 text-xl text-slate-300 leading-relaxed mb-10 max-w-md">
              {t('subtitle')}
            </p>

            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 mb-14">
              <Link
                href={`/${locale}/contact`}
                className="group bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-400 transition-all shadow-xl shadow-blue-500/30 hover:-translate-y-0.5 hover:shadow-blue-500/50 flex items-center gap-2"
              >
                {t('cta')}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={`/${locale}/hospitals`}
                className="group border-2 border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-2"
              >
                {t('cta2')}
                <span className="opacity-60 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.key} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-3.5 text-center hover:bg-white/8 transition-colors">
                  <div className="text-2xl mb-1.5">{s.icon}</div>
                  <div className="text-xl font-black text-white leading-none">{s.value}</div>
                  <div className="text-slate-400 text-[11px] mt-1 leading-tight">{t(`stats.${s.key}`)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — logo card with floating chips */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-blue-500/15 via-sky-400/10 to-transparent blur-3xl animate-shimmer pointer-events-none" />

              {/* Card */}
              <div className="animate-bird-soar relative bg-white rounded-[2rem] shadow-2xl shadow-black/40 p-10 flex items-center justify-center" style={{ width: 360, height: 360 }}>
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-50/70 via-white to-slate-50/80" />
                <div className="relative w-64 h-64 z-10">
                  <Image
                    src="/logo-bird.png"
                    alt="경청 INC"
                    fill
                    className="object-contain drop-shadow-md animate-bird-float"
                    priority
                  />
                </div>
              </div>

              {/* Badge top-right */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg shadow-blue-600/30">
                경청 INC
              </div>

              {/* Floating chip — left */}
              <div className="absolute -left-20 top-12 bg-white rounded-2xl shadow-xl shadow-black/10 px-4 py-3 flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0">🇲🇳</div>
                <div>
                  <div className="font-bold text-slate-900 text-xs">Монгол координатор</div>
                  <div className="text-slate-400 text-[10px] mt-0.5">Мэргэжлийн дэмжлэг</div>
                </div>
              </div>

              {/* Floating chip — right */}
              <div className="absolute -right-20 bottom-16 bg-white rounded-2xl shadow-xl shadow-black/10 px-4 py-3 flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-xl shrink-0">✓</div>
                <div>
                  <div className="font-bold text-slate-900 text-xs">24/7 дэмжлэг</div>
                  <div className="text-slate-400 text-[10px] mt-0.5">Үргэлж бэлэн</div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -left-4 w-5 h-5 rounded-full bg-sky-400/50 animate-shimmer" />
              <div className="absolute top-1/2 -right-2 w-3 h-3 rounded-full bg-white/30 animate-shimmer" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full fill-white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
