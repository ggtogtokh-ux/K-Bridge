'use client'
import { useLocale } from 'next-intl'
import { useState } from 'react'

const features = [
  { icon: '🛏️', mn: 'Тохилог өрөө', en: 'Comfortable Rooms', ko: '편안한 객실' },
  { icon: '🍽️', mn: 'Өглөөний цай', en: 'Breakfast Included', ko: '조식 포함' },
  { icon: '🏥', mn: 'Эмнэлэгтэй ойрхон', en: 'Near Hospitals', ko: '병원 근처' },
  { icon: '🚐', mn: 'Үнэгүй буцаах тээвэр', en: 'Free Shuttle', ko: '무료 셔틀' },
  { icon: '🌐', mn: 'Монгол хэлний дэмжлэг', en: 'Mongolian Support', ko: '몽골어 지원' },
  { icon: '📶', mn: 'Үнэгүй WiFi', en: 'Free WiFi', ko: '무료 WiFi' },
]

export default function HostelPage() {
  const locale = useLocale()
  const [form, setForm] = useState({ name: '', phone: '', email: '', checkIn: '', checkOut: '', guests: '1', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'hostel', ...form }),
    })
    setLoading(false)
    setSent(true)
  }

  const t = {
    hero:     locale === 'mn' ? 'Монголчуудад зориулсан байрлах газар' : locale === 'ko' ? '몽골인을 위한 숙소' : 'Accommodation for Mongolian Patients',
    sub:      locale === 'mn' ? 'Солонгост эмчлүүлэх хугацаандаа аюулгүй, тохилог байрлах газар' : locale === 'ko' ? '한국 치료 기간 동안 안전하고 편안한 숙소' : 'Safe and comfortable stay during your medical treatment in Korea',
    formTitle: locale === 'mn' ? 'Байр захиалах' : locale === 'ko' ? '숙소 예약' : 'Book Accommodation',
    name:     locale === 'mn' ? 'Нэр' : locale === 'ko' ? '이름' : 'Full Name',
    phone:    locale === 'mn' ? 'Утас' : locale === 'ko' ? '전화번호' : 'Phone',
    email:    'Email',
    checkIn:  locale === 'mn' ? 'Ирэх огноо' : locale === 'ko' ? '체크인 날짜' : 'Check-in Date',
    checkOut: locale === 'mn' ? 'Гарах огноо' : locale === 'ko' ? '체크아웃 날짜' : 'Check-out Date',
    guests:   locale === 'mn' ? 'Хүний тоо' : locale === 'ko' ? '인원 수' : 'Guests',
    msg:      locale === 'mn' ? 'Нэмэлт хүсэлт' : locale === 'ko' ? '추가 요청' : 'Additional Requests',
    btn:      locale === 'mn' ? 'Захиалга илгээх' : locale === 'ko' ? '예약 신청' : 'Send Booking',
    sending:  locale === 'mn' ? 'Илгээж байна...' : locale === 'ko' ? '전송 중...' : 'Sending...',
    doneTitle: locale === 'mn' ? 'Захиалга илгээгдлээ' : locale === 'ko' ? '예약 완료' : 'Booking Sent',
    doneText:  locale === 'mn' ? 'Бид тантай 24 цагийн дотор холбогдох болно.' : locale === 'ko' ? '24시간 내에 연락드리겠습니다.' : 'We will contact you within 24 hours.',
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">Hostel</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{t.hero}</h1>
          <p className="text-xl text-slate-300">{t.sub}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.en} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-4">
                <span className="text-2xl">{f.icon}</span>
                <span className="text-sm font-semibold text-slate-700">
                  {locale === 'mn' ? f.mn : locale === 'ko' ? f.ko : f.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4">

          {sent ? (
            <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-5">✓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.doneTitle}</h3>
              <p className="text-slate-500 text-sm">{t.doneText}</p>
            </div>
          ) : (
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-6">{t.formTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{t.name} *</label>
                    <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder={t.name} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{t.phone} *</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="+976 9900 0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{t.email}</label>
                  <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="example@email.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{t.checkIn} *</label>
                    <input required type="date" value={form.checkIn} onChange={e => setForm({...form, checkIn: e.target.value})}
                      className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{t.checkOut} *</label>
                    <input required type="date" value={form.checkOut} onChange={e => setForm({...form, checkOut: e.target.value})}
                      className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{t.guests}</label>
                    <select value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}
                      className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                      {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{t.msg}</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                    placeholder={t.msg} />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/25 text-sm">
                  {loading ? t.sending : t.btn}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
