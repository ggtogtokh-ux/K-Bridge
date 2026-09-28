'use client'
import { useTranslations } from 'next-intl'

const steps = [
  {
    key: 'coordinator',
    num: '01',
    color: 'from-blue-500 to-blue-600',
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    key: 'translation',
    num: '02',
    color: 'from-sky-500 to-cyan-400',
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    key: 'booking',
    num: '03',
    color: 'from-violet-500 to-indigo-500',
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: 'support',
    num: '04',
    color: 'from-teal-500 to-emerald-400',
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  const t = useTranslations('services')

  return (
    <section className="py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <span className="inline-block bg-blue-500/15 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-blue-500/20">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{t('title')}</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

          {steps.map((s) => (
            <div key={s.key} className="relative group">
              {/* Step circle */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                {s.icon}
              </div>

              {/* Number */}
              <div className="text-center mb-3">
                <span className="text-slate-600 text-xs font-bold tracking-widest">{s.num}</span>
              </div>

              {/* Card */}
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-3xl p-6 text-center hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                <h3 className="font-bold text-white text-base mb-3">{t(`items.${s.key}.title`)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t(`items.${s.key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
