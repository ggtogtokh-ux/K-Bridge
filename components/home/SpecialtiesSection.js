'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

const specialties = [
  { icon: '🧬', label: 'Oncology', labelMn: 'Хавдар судлал', href: '/specialties#oncology' },
  { icon: '❤️', label: 'Cardiology', labelMn: 'Зүрхний эмгэг', href: '/specialties#cardiology' },
  { icon: '🦷', label: 'Dental', labelMn: 'Шүдний эмч', href: '/specialties#dental' },
  { icon: '👁️', label: 'Ophthalmology', labelMn: 'Нүдний эмч', href: '/specialties#ophthalmology' },
  { icon: '🦴', label: 'Orthopedics', labelMn: 'Яс, мөч', href: '/specialties#orthopedics' },
  { icon: '🧠', label: 'Neurology', labelMn: 'Мэдрэлийн эмч', href: '/specialties#neurology' },
  { icon: '🌸', label: 'Dermatology', labelMn: 'Арьс, үсний эмч', href: '/specialties#dermatology' },
  { icon: '👶', label: 'Pediatrics', labelMn: 'Хүүхдийн эмч', href: '/specialties#pediatrics' },
]

export default function SpecialtiesSection() {
  const t = useTranslations('specialties')
  const locale = useLocale()

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">{t('title')}</h2>
          <p className="text-slate-500 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {specialties.map((s) => (
            <Link
              key={s.label}
              href={`/${locale}${s.href}`}
              className="bg-white rounded-2xl p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all border border-slate-100 group"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">
                {s.label}
              </div>
              <div className="text-slate-400 text-xs mt-0.5">{s.labelMn}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
