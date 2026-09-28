'use client'
import { useTranslations } from 'next-intl'

const cards = [
  {
    key: 'coordinator',
    num: '01',
    gradient: 'from-blue-500 to-blue-600',
    glow: 'shadow-blue-200',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    key: 'translation',
    num: '02',
    gradient: 'from-sky-500 to-cyan-500',
    glow: 'shadow-sky-200',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    key: 'booking',
    num: '03',
    gradient: 'from-indigo-500 to-violet-500',
    glow: 'shadow-indigo-200',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: 'support',
    num: '04',
    gradient: 'from-teal-500 to-emerald-500',
    glow: 'shadow-teal-200',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  const t = useTranslations('services')

  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">{t('title')}</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.key} className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl ${c.glow} hover:-translate-y-2 transition-all duration-300`}>

              {/* Gradient header band */}
              <div className={`h-2 w-full bg-gradient-to-r ${c.gradient}`} />

              <div className="p-6 pt-5">
                {/* Number + icon row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {c.icon}
                  </div>
                  <span className="text-4xl font-black text-slate-100 leading-none select-none">{c.num}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2 leading-tight">{t(`items.${c.key}.title`)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t(`items.${c.key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
