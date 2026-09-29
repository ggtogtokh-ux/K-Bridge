import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

const stats = [
  { value: '50+', labelKey: 'hospitals' },
  { value: '2,000+', labelKey: 'patients' },
  { value: '30+', labelKey: 'specialties' },
  { value: '5+', labelKey: 'years' },
]

const values = [
  {
    icon: '🤝',
    en: 'Trust', mn: 'Итгэл', ko: '신뢰',
    descEn: 'We build honest, transparent relationships with every patient.',
    descMn: 'Бид өвчтөн бүртэй шударга, ил тод харилцаа тогтоодог.',
    descKo: '모든 환자와 정직하고 투명한 관계를 구축합니다.',
  },
  {
    icon: '💛',
    en: 'Care', mn: 'Халамж', ko: '배려',
    descEn: 'Your health and comfort are our top priority, every step of the way.',
    descMn: 'Таны эрүүл мэнд, тайтгарал бидний гол зорилт.',
    descKo: '여러분의 건강과 편안함이 저희의 최우선 과제입니다.',
  },
  {
    icon: '🌏',
    en: 'Bridge', mn: 'Гүүр', ko: '연결',
    descEn: 'We connect Mongolia and Korea through medicine, language, and culture.',
    descMn: 'Бид Монгол, Солонгосыг эм, хэл, соёлоор холбодог.',
    descKo: '의학, 언어, 문화를 통해 몽골과 한국을 연결합니다.',
  },
  {
    icon: '⭐',
    en: 'Excellence', mn: 'Чанар', ko: '탁월함',
    descEn: 'Only certified, top-rated hospitals. No compromises on quality.',
    descMn: 'Зөвхөн баталгаажсан, шилдэг эмнэлгүүд. Чанарт буулт хийхгүй.',
    descKo: '인증된 최고 수준의 병원만 선별합니다. 품질에 타협하지 않습니다.',
  },
]

export default async function AboutPage({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.about' })

  const v = (obj) => locale === 'mn' ? obj.mn : locale === 'ko' ? obj.ko : obj.en
  const vd = (obj) => locale === 'mn' ? obj.descMn : locale === 'ko' ? obj.descKo : obj.descEn

  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-28">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)',
          backgroundSize: '36px 36px',
        }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {t('badge')}
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">{t('title')}</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">{t('subtitle')}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-blue-500/30"
          >
            {t('cta')} →
          </Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.labelKey}>
              <div className="text-4xl font-black text-blue-600 mb-1">{s.value}</div>
              <div className="text-slate-500 text-sm font-medium">{t(`stats.${s.labelKey}`)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{t('storyLabel')}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-6 leading-tight">{t('storyTitle')}</h2>
            <div className="space-y-4 text-slate-500 leading-relaxed text-base">
              <p>{t('storyP1')}</p>
              <p>{t('storyP2')}</p>
              <p>{t('storyP3')}</p>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white">
              <div className="text-6xl mb-6">🇲🇳 → 🇰🇷</div>
              <h3 className="text-2xl font-black mb-3">{t('cardTitle')}</h3>
              <p className="text-blue-100 leading-relaxed">{t('cardDesc')}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-3xl font-black">50+</div>
                  <div className="text-blue-200 text-xs mt-1">{t('stats.hospitals')}</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-3xl font-black">2K+</div>
                  <div className="text-blue-200 text-xs mt-1">{t('stats.patients')}</div>
                </div>
              </div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-teal-400/20 blur-xl" />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{t('valuesLabel')}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">{t('valuesTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.en} className="bg-white rounded-3xl p-7 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-5">{val.icon}</div>
                <h3 className="font-black text-slate-900 text-lg mb-3">{v(val)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{vd(val)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services overview ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{t('servicesLabel')}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4">{t('servicesTitle')}</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">{t('servicesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', titleKey: 'svc1Title', descKey: 'svc1Desc', color: 'bg-blue-50 text-blue-600' },
              { num: '02', titleKey: 'svc2Title', descKey: 'svc2Desc', color: 'bg-teal-50 text-teal-600' },
              { num: '03', titleKey: 'svc3Title', descKey: 'svc3Desc', color: 'bg-violet-50 text-violet-600' },
            ].map((s) => (
              <div key={s.num} className="rounded-3xl border border-slate-100 p-8 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center font-black text-lg mb-6`}>{s.num}</div>
                <h3 className="font-black text-slate-900 text-lg mb-3">{t(s.titleKey)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t(s.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-600">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">{t('ctaTitle')}</h2>
          <p className="text-blue-100 text-lg mb-8">{t('ctaSubtitle')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              {t('ctaBtn')} →
            </Link>
            <Link
              href={`/${locale}/hospitals`}
              className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors"
            >
              {t('ctaBtn2')}
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
