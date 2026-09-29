'use client'
import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.477 3 2 6.477 2 11c0 2.897 1.574 5.438 3.974 7.017L5 21l3.307-1.747C9.388 19.737 10.67 20 12 20c5.523 0 10-3.477 10-9S17.523 3 12 3z"/>
      </svg>
    ),
    label: 'KakaoTalk',
    value: '@gyeongcheong',
    bg: 'bg-[#FEE500]',
    text: 'text-slate-900',
    href: 'https://open.kakao.com/o/gXXXXXXX',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.826L.057 23.571l5.882-1.523A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.522-5.154-1.428l-.367-.217-3.49.904.928-3.386-.24-.388A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+82 10-4882-6264',
    bg: 'bg-green-500',
    text: 'text-white',
    href: 'https://wa.me/821048826264',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'km.bridge.26@gmail.com',
    bg: 'bg-blue-600',
    text: 'text-white',
    href: 'mailto:km.bridge.26@gmail.com',
  },
]

export default function ContactPage() {
  const locale = useLocale()
  const t = useTranslations('contact')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'contact', ...form }),
    })
    setLoading(false)
    setSent(true)
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{t('title')}</h1>
          <p className="text-xl text-slate-300">{t('subtitle')}</p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — contact methods */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-8">
              {locale === 'mn' ? 'Шууд холбоо барих' : locale === 'ko' ? '직접 연락하기' : 'Get in Touch Directly'}
            </h2>

            <div className="flex flex-col gap-4 mb-10">
              {contactMethods.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl px-6 py-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center shrink-0 shadow-md`}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{c.label}</div>
                    <div className="text-slate-500 text-sm mt-0.5">{c.value}</div>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Info box */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <span className="font-bold text-slate-900 text-sm">
                  {locale === 'mn' ? '24 цагийн дотор хариу өгнө' : locale === 'ko' ? '24시간 내 답변' : 'Response within 24 hours'}
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {locale === 'mn'
                  ? 'Бид ажлын өдрүүдэд Монгол болон Солонгос цагаар 09:00–18:00 цагт байнга бэлэн байна.'
                  : locale === 'ko'
                  ? '평일 몽골 및 한국 시간 기준 09:00–18:00에 상시 대응합니다.'
                  : 'We are available weekdays 09:00–18:00 in both Mongolian and Korean time zones.'}
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-8">
              {locale === 'mn' ? 'Мессеж илгээх' : locale === 'ko' ? '메시지 보내기' : 'Send a Message'}
            </h2>

            {sent ? (
              <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center shadow-sm">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-5">✓</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {locale === 'mn' ? 'Амжилттай илгээгдлээ' : locale === 'ko' ? '성공적으로 전송되었습니다' : 'Message Sent'}
                </h3>
                <p className="text-slate-500 text-sm">
                  {locale === 'mn' ? 'Бид тантай 24 цагийн дотор холбогдох болно.' : locale === 'ko' ? '24시간 내에 연락드리겠습니다.' : 'We will get back to you within 24 hours.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">{t('name')} *</label>
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
                  <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">{t('message')} *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-slate-200 text-slate-900 placeholder-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
                    placeholder={locale === 'mn' ? 'Таны асуулт эсвэл хүсэлт...' : locale === 'ko' ? '문의 내용을 입력해 주세요...' : 'Your question or request...'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/25 text-sm tracking-wide"
                >
                  {loading ? (locale === 'mn' ? 'Илгээж байна...' : locale === 'ko' ? '전송 중...' : 'Sending...') : t('send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
