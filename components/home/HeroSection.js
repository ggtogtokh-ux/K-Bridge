'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { featuredHospitals } from '@/data/hospitals'
import { useState, useEffect } from 'react'

const slides = [
  {
    img: null,
    badge: 'Korean Medical Service',
    titleKey: 'title',
    subtitleKey: 'subtitle',
  },
  {
    img: null,
    badge: 'Trusted by 2,000+ Patients',
    titleKey: 'title2',
    subtitleKey: 'subtitle2',
  },
]

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const imgs = featuredHospitals.slice(0, 2).map((h) => h.image)
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % 2), 6000)
    return () => clearInterval(timer)
  }, [current])

  const goTo = (idx) => {
    if (animating || idx === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 400)
  }

  const titles = [t('title'), t('title2')]
  const subtitles = [t('subtitle'), t('subtitle2')]
  const badges = ['Korean Medical Service', locale === 'mn' ? '2,000+ өвчтөн итгэдэг' : 'Trusted by 2,000+ Patients']

  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: '100vh', minHeight: 600 }}>

      {/* Background images with crossfade */}
      {imgs.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img src={img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">

          {/* Badge */}
          <div
            key={`badge-${current}`}
            className="inline-flex items-center gap-2 border border-white/30 text-white/80 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8"
            style={{ animation: 'heroFadeUp 0.7s ease forwards' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {badges[current]}
          </div>

          {/* Title */}
          <h1
            key={`title-${current}`}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.02] tracking-tight mb-6"
            style={{ animation: 'heroFadeUp 0.8s 0.1s ease both' }}
          >
            {titles[current]}
          </h1>

          {/* Accent line */}
          <div
            key={`line-${current}`}
            className="flex items-center gap-2 mb-7"
            style={{ animation: 'heroFadeUp 0.8s 0.2s ease both' }}
          >
            <div className="h-0.5 w-20 bg-white/60 rounded-full" />
            <div className="h-0.5 w-8 bg-white/25 rounded-full" />
          </div>

          {/* Subtitle */}
          <p
            key={`sub-${current}`}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-12 max-w-lg"
            style={{ animation: 'heroFadeUp 0.8s 0.25s ease both' }}
          >
            {subtitles[current]}
          </p>

          {/* CTAs */}
          <div
            style={{ animation: 'heroFadeUp 0.8s 0.35s ease both' }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={`/${locale}/contact`}
              className="group bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 text-sm tracking-wide shadow-2xl"
            >
              {t('cta')}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href={`/${locale}/hospitals`}
              className="group border border-white/30 hover:border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 text-sm tracking-wide"
            >
              {t('cta2')}
              <span className="opacity-50 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide navigation — bottom left like ARON */}
      <div className="absolute bottom-10 left-6 sm:left-10 lg:left-16 z-20 flex items-center gap-5">
        <button
          onClick={() => goTo((current - 1 + 2) % 2)}
          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          {[0, 1].map((i) => (
            <button key={i} onClick={() => goTo(i)} className="flex items-center gap-2 group">
              <span className={`text-xs font-bold tabular-nums transition-colors ${current === i ? 'text-white' : 'text-white/35 group-hover:text-white/60'}`}>
                0{i + 1}
              </span>
              {i < 1 && <span className="w-8 h-px bg-white/30" />}
            </button>
          ))}
        </div>

        <button
          onClick={() => goTo((current + 1) % 2)}
          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <div
          key={current}
          className="h-full bg-white/50"
          style={{ animation: 'slideProgress 6s linear forwards' }}
        />
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}
