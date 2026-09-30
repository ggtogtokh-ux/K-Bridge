'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { featuredHospitals } from '@/data/hospitals'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const imgs = featuredHospitals.slice(0, 2).map((h) => h.image)
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  const titles = [t('title'), t('title2')]
  const subtitles = [t('subtitle'), t('subtitle2')]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((p) => (p + 1) % 2)
        setVisible(true)
      }, 500)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (i) => {
    if (i === current) return
    setVisible(false)
    setTimeout(() => { setCurrent(i); setVisible(true) }, 500)
  }

  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: '100vh', minHeight: 640 }}>

      {/* Background images crossfade */}
      {imgs.map((img, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1500"
          style={{ opacity: current === i ? 1 : 0 }}>
          <img src={img} alt="" className="w-full h-full object-cover scale-105" style={{ filter: 'brightness(0.35)' }} />
        </div>
      ))}

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Center logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-96 h-96 opacity-[0.04]">
          <Image src="/logo-main.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20">

        {/* Logo mark — top left accent */}
        <div className="flex items-center gap-4 mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.6s ease' }}>
          <div className="relative w-10 h-10">
            <Image src="/logo-main.png" alt="경청" fill className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <div className="h-px w-12 bg-[#8B7355]/60" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4A882]">
            {locale === 'mn' ? 'Солонгосын эрүүл мэндийн үйлчилгээ' : locale === 'ko' ? '한국 의료 서비스' : 'Korean Medical Service'}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.02] tracking-tight mb-8 whitespace-pre-line"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s 0.05s ease' }}
        >
          {titles[current]}
        </h1>

        {/* Accent line */}
        <div className="flex items-center gap-3 mb-8"
          style={{ opacity: visible ? 1 : 0, transition: 'all 0.7s 0.1s ease' }}>
          <div className="h-px w-16 bg-[#8B7355]" />
          <div className="h-px w-6 bg-[#8B7355]/40" />
        </div>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg text-white/55 leading-relaxed mb-14 max-w-xl font-light"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s 0.15s ease' }}
        >
          {subtitles[current]}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4"
          style={{ opacity: visible ? 1 : 0, transition: 'all 0.7s 0.2s ease' }}>
          <Link href={`/${locale}/contact`}
            className="group border border-[#8B7355] hover:bg-[#8B7355] text-white font-bold px-10 py-4 transition-all duration-300 text-xs uppercase tracking-[0.2em] flex items-center gap-3">
            {t('cta')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link href={`/${locale}/hospitals`}
            className="group border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-bold px-10 py-4 transition-all duration-300 text-xs uppercase tracking-[0.2em] flex items-center gap-3">
            {t('cta2')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Bottom — slide nav */}
      <div className="absolute bottom-10 left-6 sm:left-10 lg:left-16 z-20 flex items-center gap-6">
        <button onClick={() => goTo((current - 1 + 2) % 2)}
          className="w-8 h-8 border border-white/20 hover:border-white/50 flex items-center justify-center text-white/40 hover:text-white transition-all">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-4">
          {[0, 1].map((i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`flex items-center gap-3 transition-all duration-300 ${current === i ? 'text-white' : 'text-white/30 hover:text-white/50'}`}>
              <span className="text-xs font-bold tabular-nums tracking-widest">0{i + 1}</span>
              {i === 0 && <span className="w-10 h-px bg-white/20" />}
            </button>
          ))}
        </div>

        <button onClick={() => goTo((current + 1) % 2)}
          className="w-8 h-8 border border-white/20 hover:border-white/50 flex items-center justify-center text-white/40 hover:text-white transition-all">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Stats — bottom right */}
      <div className="absolute bottom-10 right-6 sm:right-10 lg:right-16 z-20 hidden sm:flex items-center gap-10">
        {[
          { value: '50+', label: locale === 'mn' ? 'Эмнэлэг' : locale === 'ko' ? '병원' : 'Hospitals' },
          { value: '2K+', label: locale === 'mn' ? 'Өвчтөн' : locale === 'ko' ? '환자' : 'Patients' },
          { value: '5+', label: locale === 'mn' ? 'Жил' : locale === 'ko' ? '년' : 'Years' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-xl font-black text-white">{s.value}</div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/35 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8 z-20">
        <div key={current} className="h-full bg-[#8B7355]/70"
          style={{ animation: 'slideProgress 7s linear forwards' }} />
      </div>

      <style>{`
        @keyframes slideProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  )
}
