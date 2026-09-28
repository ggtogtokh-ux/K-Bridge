'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { featuredHospitals } from '@/data/hospitals'

const stats = [
  { key: 'hospitals', value: '50+' },
  { key: 'patients', value: '2,000+' },
  { key: 'specialties', value: '30+' },
  { key: 'years', value: '5+' },
]

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const imgs = featuredHospitals.slice(0, 3).map((h) => h.image)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 min-h-screen flex items-center">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)',
        backgroundSize: '36px 36px',
      }} />

      {/* Orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none animate-orb" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-sky-500/8 blur-3xl pointer-events-none animate-orb" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-20 items-center">

          {/* ── LEFT ── */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-400/25 rounded-full px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-shimmer" />
              {t('badge')}
            </div>

            <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1.06] text-white mb-6 whitespace-pre-line tracking-tight">
              {t('title')}
            </h1>

            <div className="animate-fade-up-delay-1 flex items-center gap-2 mb-7">
              <div className="h-1 w-16 rounded-full bg-blue-400" />
              <div className="h-1 w-6 rounded-full bg-blue-400/40" />
              <div className="h-1 w-2 rounded-full bg-blue-400/20" />
            </div>

            <p className="animate-fade-up-delay-2 text-xl text-slate-300 leading-relaxed mb-10 max-w-md">
              {t('subtitle')}
            </p>

            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 mb-16">
              <Link
                href={`/${locale}/contact`}
                className="group bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-2xl shadow-blue-500/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                {t('cta')}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={`/${locale}/hospitals`}
                className="group border-2 border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/5 transition-all flex items-center gap-2"
              >
                {t('cta2')}
                <span className="opacity-50 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.key} className="text-center">
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-slate-400 text-xs mt-1">{t(`stats.${s.key}`)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — hospital image collage ── */}
          <div className="hidden lg:block relative" style={{ height: 520 }}>

            {/* Top-right — large */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 animate-bird-soar">
              <img src={imgs[0]} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Middle-left */}
            <div className="absolute top-36 left-0 w-56 h-56 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10 animate-bird-float">
              <img src={imgs[1]} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Bottom-right */}
            <div className="absolute bottom-0 right-16 w-52 h-52 rounded-3xl overflow-hidden shadow-xl shadow-black/30 border border-white/10 animate-shimmer" style={{ animationDelay: '2s' }}>
              <img src={imgs[2]} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Logo chip — floating center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl shadow-black/30 p-4 flex items-center gap-3 z-20 border border-slate-100">
              <div className="relative w-12 h-12 shrink-0">
                <Image src="/logo-bird.png" alt="경청" fill className="object-contain" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-sm leading-none">경청 INC</div>
                <div className="text-slate-400 text-[11px] mt-1">Korean Medical Bridge</div>
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute bottom-10 left-8 bg-blue-600 text-white rounded-2xl px-5 py-3.5 shadow-xl z-20">
              <div className="text-2xl font-black leading-none">50+</div>
              <div className="text-blue-200 text-xs mt-1">협력 병원</div>
            </div>

            {/* Patients badge */}
            <div className="absolute top-8 left-12 bg-emerald-500 text-white rounded-2xl px-5 py-3.5 shadow-xl z-20">
              <div className="text-2xl font-black leading-none">2K+</div>
              <div className="text-emerald-100 text-xs mt-1">환자</div>
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
