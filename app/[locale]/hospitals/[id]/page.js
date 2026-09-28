import { hospitals } from '@/data/hospitals'
import { specialties } from '@/data/specialties'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import DoctorCarousel from '@/components/DoctorCarousel'

export function generateStaticParams() {
  return hospitals.map((h) => ({ id: String(h.id) }))
}

const supportFeatures = {
  en: [
    { icon: '🌐', label: 'Multilingual Support', desc: 'English, Mongolian, Korean assistance' },
    { icon: '📋', label: 'Care Coordination', desc: 'Appointment guidance and planning' },
    { icon: '✈️', label: 'Travel Assistance', desc: 'Visa, accommodation, and transfer help' },
    { icon: '📞', label: '24/7 Support', desc: 'Always available for your questions' },
  ],
  mn: [
    { icon: '🌐', label: 'Олон хэлт дэмжлэг', desc: 'Монгол, Солонгос, Англи хэлний туслалцаа' },
    { icon: '📋', label: 'Зохицуулалт', desc: 'Цаг захиалга, төлөвлөлтийн туслалцаа' },
    { icon: '✈️', label: 'Аялалын дэмжлэг', desc: 'Виз, байр, тээврийн туслалцаа' },
    { icon: '📞', label: '24/7 Дэмжлэг', desc: 'Ямар ч цагт асуулт тавьж болно' },
  ],
  ko: [
    { icon: '🌐', label: '다국어 지원', desc: '영어, 몽골어, 한국어 지원' },
    { icon: '📋', label: '케어 코디네이션', desc: '예약 안내 및 일정 계획' },
    { icon: '✈️', label: '여행 지원', desc: '비자, 숙소, 교통 안내' },
    { icon: '📞', label: '24/7 지원', desc: '언제든지 문의 가능' },
  ],
}

export default async function HospitalDetailPage({ params }) {
  const { locale, id } = await params
  const hospital = hospitals.find((h) => String(h.id) === id)
  if (!hospital) notFound()

  const t = await getTranslations({ locale, namespace: 'pages.hospitals' })
  const lang = ['mn', 'ko'].includes(locale) ? locale : 'en'

  const getName = (h) => locale === 'ko' ? h.nameKo : h.name
  const getSpecialtyStr = (h) => locale === 'mn' ? h.specialtyMn : h.specialty
  const getDesc = (h) => locale === 'mn' ? h.descMn : h.desc

  const specialtyTags = getSpecialtyStr(hospital).split(', ')

  const matchedSpecialties = specialtyTags.map((tag) => {
    const found = specialties.find(
      (s) => s.label.toLowerCase() === tag.toLowerCase() ||
             s.labelMn === tag ||
             s.labelKo === tag
    )
    return { tag, id: found?.id ?? null }
  })

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Link
        href={`/${locale}/hospitals`}
        className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {t('back')}
      </Link>

      {/* Hero */}
      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm mb-6">
        <div className="h-72 overflow-hidden bg-slate-50">
          <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{getName(hospital)}</h1>
              <p className="text-slate-400 mt-0.5">{hospital.nameKo}</p>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-50 text-amber-600 font-semibold px-3 py-1.5 rounded-full shrink-0">
              ★ {hospital.rating}
            </div>
          </div>

          <div className="flex items-start gap-2 text-slate-500 text-sm mb-5">
            <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>
              {hospital.address
                ? (locale === 'ko' ? hospital.address.ko : hospital.address.en || hospital.address.ko)
                : hospital.location}
            </span>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">{getDesc(hospital)}</p>

          {/* Specialty tags — clickable if matched */}
          <div className="flex flex-wrap gap-2">
            {matchedSpecialties.map(({ tag, id: sid }) =>
              sid ? (
                <Link
                  key={tag}
                  href={`/${locale}/specialties/${sid}`}
                  className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                >
                  {tag}
                </Link>
              ) : (
                <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* International Patient Support */}
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-6">
          {locale === 'mn' ? 'Олон улсын өвчтөний дэмжлэг' : locale === 'ko' ? '국제 환자 지원' : 'Global Patient Support'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {supportFeatures[lang].map((f) => (
            <div key={f.label} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl">
              <span className="text-2xl shrink-0">{f.icon}</span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{f.label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Address */}
      {hospital.address && (
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            {locale === 'mn' ? 'Хаяг' : locale === 'ko' ? '주소' : 'Address'}
          </h2>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="text-slate-800 font-medium text-sm">{hospital.address.ko}</p>
              {hospital.address.en && hospital.address.en !== hospital.address.ko && (
                <p className="text-slate-500 text-sm mt-0.5">{hospital.address.en}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Medical Team */}
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-6">
          {locale === 'mn' ? 'Эмнэлгийн баг' : locale === 'ko' ? '의료팀' : 'Medical Team'}
        </h2>
        {hospital.doctors && hospital.doctors.length > 0 ? (
          <DoctorCarousel doctors={hospital.doctors} locale={locale} />
        ) : (
          <p className="text-slate-500 text-sm leading-relaxed">
            {locale === 'mn'
              ? 'Энэ эмнэлгийн эмч нарын дэлгэрэнгүй мэдээллийг авахын тулд бидэнтэй холбоо барина уу.'
              : locale === 'ko'
              ? '해당 병원의 의료진 정보는 문의를 통해 확인하실 수 있습니다.'
              : 'Contact us to receive detailed information about the medical team at this hospital.'}
          </p>
        )}
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 mt-6 text-blue-600 text-sm font-semibold hover:underline"
        >
          {locale === 'mn' ? 'Холбоо барих' : locale === 'ko' ? '문의하기' : 'Get in touch'}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-2">
          {locale === 'mn'
            ? `${getName(hospital)}-д эмчилгээ авах`
            : locale === 'ko'
            ? `${getName(hospital)}에서 진료 받기`
            : `Start your journey with ${getName(hospital)}`}
        </h2>
        <p className="text-blue-100 text-sm mb-6">
          {locale === 'mn'
            ? 'Цаг захиалах болон дэлгэрэнгүй мэдээлэл авахын тулд бидэнтэй холбоо барина уу'
            : locale === 'ko'
            ? '예약 및 자세한 정보를 위해 문의해 주세요'
            : 'Contact us for appointments and detailed information'}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
        >
          {t('book')}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </main>
  )
}
