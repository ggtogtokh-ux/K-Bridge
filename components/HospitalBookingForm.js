'use client'
import { useState } from 'react'

export default function HospitalBookingForm({ hospitalName, locale }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'hospital', hospital: hospitalName, ...form }),
    })
    setLoading(false)
    setSent(true)
  }

  const label = {
    title: locale === 'mn' ? 'Цаг захиалах' : locale === 'ko' ? '진료 예약' : 'Book Appointment',
    name:  locale === 'mn' ? 'Нэр' : locale === 'ko' ? '이름' : 'Full Name',
    phone: locale === 'mn' ? 'Утас' : locale === 'ko' ? '전화번호' : 'Phone',
    email: locale === 'mn' ? 'Email' : locale === 'ko' ? '이메일' : 'Email',
    date:  locale === 'mn' ? 'Хүссэн огноо' : locale === 'ko' ? '희망 날짜' : 'Preferred Date',
    msg:   locale === 'mn' ? 'Нэмэлт мэдээлэл' : locale === 'ko' ? '추가 정보' : 'Additional Info',
    btn:   locale === 'mn' ? 'Захиалга илгээх' : locale === 'ko' ? '예약 신청' : 'Send Request',
    sending: locale === 'mn' ? 'Илгээж байна...' : locale === 'ko' ? '전송 중...' : 'Sending...',
    doneTitle: locale === 'mn' ? 'Захиалга илгээгдлээ' : locale === 'ko' ? '예약 신청 완료' : 'Request Sent',
    doneText:  locale === 'mn' ? 'Бид тантай 24 цагийн дотор холбогдох болно.' : locale === 'ko' ? '24시간 내에 연락드리겠습니다.' : 'We will contact you within 24 hours.',
  }

  if (sent) {
    return (
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm text-center">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">✓</div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{label.doneTitle}</h3>
        <p className="text-slate-500 text-sm">{label.doneText}</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 mb-6">{label.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{label.name} *</label>
            <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
              className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder={label.name} />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{label.phone} *</label>
            <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
              className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="+976 9900 0000" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{label.email}</label>
            <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
              className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="example@email.com" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{label.date}</label>
            <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
              className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">{label.msg}</label>
          <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
            className="w-full border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
            placeholder={label.msg} />
        </div>
        <button type="submit" disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors text-sm">
          {loading ? label.sending : label.btn}
        </button>
      </form>
    </div>
  )
}
