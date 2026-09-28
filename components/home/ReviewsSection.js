'use client'
import { useTranslations } from 'next-intl'

const reviews = [
  {
    name: 'Дулмаа О.',
    flag: '🇲🇳',
    hospital: 'Samsung Medical Center',
    rating: 5,
    text: 'K-Bridge-ийн тусламжтайгаар Солонгост амжилттай эмчлүүлсэн. Координатор маань монгол хэлээр бүх зүйлийг тайлбарлаж өгсөн. Маш сайн үйлчилгээ.',
  },
  {
    name: 'Батболд Т.',
    flag: '🇲🇳',
    hospital: 'Asan Medical Center',
    rating: 5,
    text: 'Зүрхний мэс засал хийлгэхэд бүх зүйл маш зохион байгуулалттай явсан. Эмнэлэг захиалга, орчуулга бүгдийг K-Bridge шийдсэн. Баярлалаа.',
  },
  {
    name: 'Мөнхзул Б.',
    flag: '🇲🇳',
    hospital: 'Seoul National University Hospital',
    rating: 5,
    text: 'Шүдний эмчилгээнд ирсэн. Үнэ зардал урьдчилан тодорхой байсан, сюрприз байгаагүй. Дараа дахин ирэх бодолтой байна.',
  },
]

const avatarColors = [
  'bg-blue-600',
  'bg-violet-600',
  'bg-teal-600',
]

export default function ReviewsSection() {
  const t = useTranslations('reviews')

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block bg-amber-50 text-amber-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">{t('title')}</h2>
          <p className="text-slate-400 text-lg">{t('subtitle')}</p>
        </div>

        {/* Featured large review */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 sm:p-14 text-white mb-6 overflow-hidden">
          {/* Giant quote mark */}
          <div className="absolute -top-6 -left-2 text-[11rem] font-black text-white/5 leading-none select-none pointer-events-none">"</div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-8 text-blue-50">
                "{reviews[0].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl ${avatarColors[0]} flex items-center justify-center font-black text-2xl text-white shrink-0`}>
                  {reviews[0].name[0]}
                </div>
                <div>
                  <div className="font-bold text-lg">{reviews[0].flag} {reviews[0].name}</div>
                  <div className="text-blue-300 text-sm mt-0.5">{reviews[0].hospital}</div>
                </div>
              </div>
            </div>

            {/* Decorative stat */}
            <div className="shrink-0 bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-8 py-6 text-center">
              <div className="text-5xl font-black text-white mb-1">5.0</div>
              <div className="flex gap-0.5 justify-center mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <div className="text-blue-200 text-xs">Дундаж үнэлгээ</div>
            </div>
          </div>
        </div>

        {/* Two smaller reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.slice(1).map((r, i) => (
            <div
              key={i}
              className="relative bg-slate-50 border border-slate-100 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-5 right-6 text-6xl font-black text-slate-100 leading-none select-none pointer-events-none">"</div>

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-base">★</span>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">"{r.text}"</p>

              <div className="flex items-center gap-3 pt-5 border-t border-slate-200">
                <div className={`w-11 h-11 rounded-2xl ${avatarColors[i + 1]} text-white font-black text-lg flex items-center justify-center shrink-0`}>
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{r.flag} {r.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{r.hospital}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
