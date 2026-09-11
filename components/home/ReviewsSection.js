'use client'
import { useTranslations } from 'next-intl'

const reviews = [
  {
    name: 'Дулмаа О.',
    country: 'Монгол',
    flag: '🇲🇳',
    hospital: 'Samsung Medical Center',
    rating: 5,
    text: 'K-Bridge-ийн тусламжтайгаар Солонгост амжилттай эмчлүүлсэн. Координатор маань монгол хэлээр бүх зүйлийг тайлбарлаж өгсөн. Маш сайн үйлчилгээ.',
  },
  {
    name: 'Батболд Т.',
    country: 'Монгол',
    flag: '🇲🇳',
    hospital: 'Asan Medical Center',
    rating: 5,
    text: 'Зүрхний мэс засал хийлгэхэд бүх зүйл маш зохион байгуулалттай явсан. Эмнэлэг захиалга, орчуулга бүгдийг K-Bridge шийдсэн. Баярлалаа.',
  },
  {
    name: 'Мөнхзул Б.',
    country: 'Монгол',
    flag: '🇲🇳',
    hospital: 'Seoul National University Hospital',
    rating: 5,
    text: 'Шүдний эмчилгээнд ирсэн. Үнэ зардал урьдчилан тодорхой байсан, сюрприз байгаагүй. Дараа дахин ирэх бодолтой байна.',
  },
]

export default function ReviewsSection() {
  const t = useTranslations('reviews')

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">{t('title')}</h2>
          <p className="text-slate-500 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-5">"{r.text}"</p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900">
                    {r.flag} {r.name}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">{r.hospital}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-lg">
                  {r.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
