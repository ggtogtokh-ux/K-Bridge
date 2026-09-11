'use client'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ContactSection() {
  const t = useTranslations('contact')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to Supabase
    setSent(true)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 to-sky-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t('title')}</h2>
          <p className="text-blue-100 text-lg">{t('subtitle')}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Quick contact buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://open.kakao.com/o/gXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-[#FEE500] text-slate-900 font-bold py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 11c0 2.897 1.574 5.438 3.974 7.017L5 21l3.307-1.747C9.388 19.737 10.67 20 12 20c5.523 0 10-3.477 10-9S17.523 3 12 3z"/>
              </svg>
              {t('kakao')}
            </a>
            <a
              href="https://wa.me/821000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-400 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.826L.057 23.571l5.882-1.523A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.522-5.154-1.428l-.367-.217-3.49.904.928-3.386-.24-.388A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              {t('whatsapp')}
            </a>
          </div>

          {/* Form */}
          {sent ? (
            <div className="bg-white/15 backdrop-blur border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <p className="text-lg font-semibold">Таны хүсэлт илгээгдлээ. Бид тантай 24 цагийн дотор холбогдох болно.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-1">{t('name')}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/40"
                    placeholder={t('name')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-1">{t('phone')}</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/40"
                    placeholder="+976 9900 0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-1">{t('email')}</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-1">{t('message')}</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
                  placeholder={t('message')}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-700 font-bold py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                {t('send')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
