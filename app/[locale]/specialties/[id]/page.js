import { specialties } from '@/data/specialties'
import { hospitals } from '@/data/hospitals'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

export function generateStaticParams() {
  return specialties.map((s) => ({ id: s.id }))
}

const faqContent = {
  en: [
    {
      q: 'Who is the ideal candidate?',
      a: 'Suitable candidates should be in good general health and have realistic expectations. We recommend an initial online consultation to assess your suitability before traveling to Korea.',
    },
    {
      q: 'What are the common side effects?',
      a: 'Temporary swelling, bruising, or mild discomfort may occur following procedures, which typically subsides within a few days to weeks. Your care coordinator will provide full post-procedure guidance.',
    },
    {
      q: 'Is it safe to travel after the procedure?',
      a: 'Travel timing depends on the procedure and your individual condition. You must follow the treating clinician\'s specific clearance before traveling, as timing varies by procedure type.',
    },
  ],
  mn: [
    {
      q: 'Хэн тохиромжтой өвчтөн вэ?',
      a: 'Ерөнхий эрүүл мэнд сайн, бодитой хүлээлттэй хүмүүст тохиромжтой. Солонгост очихын өмнө анхны онлайн зөвлөгөө авахыг зөвлөж байна.',
    },
    {
      q: 'Ямар гаж нөлөө гарч болох вэ?',
      a: 'Эмчилгээний дараа түр зуурын хаван, хөхөрч, бага зэрэг өвдөлт гарч болох бөгөөд хэдэн өдрөөс хэдэн долоо хоногт дотор алга болдог. Координатор эмчилгээний дараах бүрэн зааварчилгааг өгнө.',
    },
    {
      q: 'Эмчилгээний дараа аялах аюулгүй юу?',
      a: 'Аялах цаг нь эмчилгээний төрөл болон таны эдгэрэлтээс хамаарна. Эмчилгээ хийсэн эмчийн зөвшөөрлийг авсны дараа аялах шаардлагатай.',
    },
  ],
  ko: [
    {
      q: '적합한 환자는 누구인가요?',
      a: '일반적으로 건강 상태가 양호하고 현실적인 기대를 가진 분들에게 적합합니다. 한국 방문 전에 초기 온라인 상담을 통해 적합성을 평가받으시기 바랍니다.',
    },
    {
      q: '일반적인 부작용은 무엇인가요?',
      a: '시술 후 일시적인 붓기, 멍 또는 경미한 불편함이 있을 수 있으며, 보통 며칠에서 몇 주 내에 사라집니다. 담당 코디네이터가 시술 후 안내를 드립니다.',
    },
    {
      q: '시술 후 여행이 안전한가요?',
      a: '여행 시기는 시술 종류와 개인 회복 상태에 따라 다릅니다. 담당 의사의 허가를 받은 후 이동하시기 바랍니다.',
    },
  ],
}

const metrics = {
  en: [
    { label: 'Duration', value: 'Variable' },
    { label: 'Anesthesia', value: 'Consultation' },
    { label: 'Recovery', value: 'Variable' },
    { label: 'Hospitalization', value: 'Variable' },
  ],
  mn: [
    { label: 'Үргэлжлэх хугацаа', value: 'Дэлгэрэнгүй' },
    { label: 'Мэдээ алдуулалт', value: 'Зөвлөгөө' },
    { label: 'Эдгэрэлт', value: 'Дэлгэрэнгүй' },
    { label: 'Эмнэлэгт хэвтэх', value: 'Дэлгэрэнгүй' },
  ],
  ko: [
    { label: '소요 시간', value: '다양' },
    { label: '마취', value: '상담 필요' },
    { label: '회복 기간', value: '다양' },
    { label: '입원', value: '다양' },
  ],
}

export default async function SpecialtyDetailPage({ params }) {
  const { locale, id } = await params
  const specialty = specialties.find((s) => s.id === id)
  if (!specialty) notFound()

  const t = await getTranslations({ locale, namespace: 'pages.specialties' })
  const lang = ['mn', 'ko'].includes(locale) ? locale : 'en'

  const getName = (s) => {
    if (locale === 'mn') return s.labelMn
    if (locale === 'ko') return s.labelKo
    return s.label
  }

  const getDesc = (s) => (locale === 'mn' ? s.descMn : s.desc)

  const relatedHospitals = hospitals.filter((h) =>
    h.specialty.toLowerCase().includes(specialty.label.toLowerCase()) ||
    h.specialtyMn.includes(specialty.labelMn.split(',')[0].trim())
  ).slice(0, 6)

  const getHospitalName = (h) => locale === 'ko' ? h.nameKo : h.name
  const getHospitalDesc = (h) => locale === 'mn' ? h.descMn : h.desc

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Link
        href={`/${locale}/specialties`}
        className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {t('back')}
      </Link>

      {/* Hero */}
      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm mb-6">
        <div className="h-64 overflow-hidden bg-slate-50">
          <img src={specialty.image} alt={specialty.label} className="w-full h-full object-cover" />
        </div>
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{specialty.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{getName(specialty)}</h1>
              <p className="text-slate-400 text-sm">{specialty.labelKo}</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">{getDesc(specialty)}</p>
        </div>
      </div>

      {/* Procedure Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {metrics[lang].map((m) => (
          <div key={m.label} className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-sm">
            <p className="text-xs text-slate-400 font-medium mb-1">{m.label}</p>
            <p className="text-base font-bold text-slate-800">{m.value}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-6">
          {locale === 'mn' ? 'Түгээмэл асуултууд' : locale === 'ko' ? '자주 묻는 질문' : 'Frequently Asked Questions'}
        </h2>
        <div className="space-y-5">
          {faqContent[lang].map((item, i) => (
            <div key={i} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
              <p className="font-semibold text-slate-800 mb-2">{item.q}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center mb-6">
        <h2 className="text-xl font-bold mb-2">{t('consult')}</h2>
        <p className="text-blue-100 text-sm mb-6">
          {locale === 'mn'
            ? 'Бидэнтэй холбогдож үнэ болон дэлгэрэнгүй мэдээллийг авна уу'
            : locale === 'ko'
            ? '비용 및 자세한 정보를 위해 문의해 주세요'
            : 'Contact us for cost estimates and detailed information'}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
        >
          {t('consult')}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Related Hospitals */}
      {relatedHospitals.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-5">{t('relatedHospitals')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedHospitals.map((h) => (
              <Link
                key={h.id}
                href={`/${locale}/hospitals/${h.id}`}
                className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-50 shrink-0">
                  <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 text-sm truncate">{getHospitalName(h)}</div>
                  <div className="text-slate-500 text-xs mt-0.5 line-clamp-1">{getHospitalDesc(h)}</div>
                  <div className="text-blue-600 text-xs mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {h.location}
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1 bg-amber-50 text-amber-600 text-xs font-semibold px-2 py-1 rounded-full shrink-0">
                  ★ {h.rating}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
