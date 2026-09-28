'use client'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.477 3 2 6.477 2 11c0 2.897 1.574 5.438 3.974 7.017L5 21l3.307-1.747C9.388 19.737 10.67 20 12 20c5.523 0 10-3.477 10-9S17.523 3 12 3z"/>
      </svg>
    ),
    label: 'KakaoTalk',
    value: '@k-bridge',
    bg: 'bg-[#FEE500]',
    text: 'text-slate-900',
    href: 'https://open.kakao.com/o/gXXXXXXX',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.826L.057 23.571l5.882-1.523A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.522-5.154-1.428l-.367-.217-3.49.904.928-3.386-.24-.388A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+82 10-0000-0000',
    bg: 'bg-green-500',
    text: 'text-white',
    href: 'https://wa.me/821000000000',
  },
]

export default function ContactSection() {
  const t = useTranslations('contact')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-28 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div className="text-white">
            <span className="inline-block bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">Contact Us</span>
            <h2 className="text-4xl sm:text-5xl font-black mb-5 leading-tight">{t('title')}</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-10">{t('subtitle')}</p>

            {/* Contact chips */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-5 py-4 hover:bg-white/20 transition-colors group"
                >
                  <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.text} flex items-center justify-center shrink-0 shadow-md`}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{c.label}</div>
                    <div className="text-blue-200 text-xs mt-0.5">{c.value}</div>
                  </div>
                  <svg className="w-4 h-4 text-white/40 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Trust line */}
            <div className="mt-10 flex items-center gap-3 text-blue-200 text-sm">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-base">⚡</div>
              24 цагийн дотор хариу өгнө
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="bg-white rounded-3xl p-10 text-center shadow-2xl shadow-black/20">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-5">✓</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Амжилттай илгээгдлээ</h3>
                <p className="text-slate-500 text-sm">Бид тантай 24 цагийн дотор холбогдох болно.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/20 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">{t('name')}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-slate-200 text-slate-900 placeholder-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                      placeholder={t('name')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">{t('phone')}</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-slate-200 text-slate-900 placeholder-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                      placeholder="+976 9900 0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">{t('email')}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-slate-200 text-slate-900 placeholder-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">{t('message')}</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-slate-200 text-slate-900 placeholder-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
                    placeholder={t('message')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 text-sm tracking-wide"
                >
                  {t('send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
