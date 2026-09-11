'use client'
import { useTranslations } from 'next-intl'

const icons = {
  coordinator: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  translation: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  ),
  booking: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  support: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
}

const styles = [
  { icon: 'text-blue-600', bg: 'bg-blue-50', border: 'hover:border-blue-200', glow: 'hover:shadow-blue-100' },
  { icon: 'text-sky-600',  bg: 'bg-sky-50',  border: 'hover:border-sky-200',  glow: 'hover:shadow-sky-100'  },
  { icon: 'text-indigo-600', bg: 'bg-indigo-50', border: 'hover:border-indigo-200', glow: 'hover:shadow-indigo-100' },
  { icon: 'text-teal-600', bg: 'bg-teal-50',  border: 'hover:border-teal-200',  glow: 'hover:shadow-teal-100' },
]

export default function ServicesSection() {
  const t = useTranslations('services')
  const items = ['coordinator', 'translation', 'booking', 'support']

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">{t('title')}</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((key, i) => (
            <div
              key={key}
              className={`group bg-white rounded-2xl p-6 border border-slate-100 ${styles[i].border} hover:shadow-xl ${styles[i].glow} hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${styles[i].bg} ${styles[i].icon} group-hover:scale-110 transition-transform duration-300`}>
                {icons[key]}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{t(`items.${key}.title`)}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t(`items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
