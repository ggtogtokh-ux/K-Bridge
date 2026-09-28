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

const avatarColors = ['bg-blue-100 text-blue-600', 'bg-violet-100 text-violet-600', 'bg-teal-100 text-teal-600']
const accentColors = ['border-blue-400', 'border-violet-400', 'border-teal-400']

export default function ReviewsSection() {
  const t = useTranslations('reviews')

  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            ★★★★★ Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">{t('title')}</h2>
          <p className="text-slate-400 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-7 border-l-4 ${accentColors[i]} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Large quote */}
              <div className="absolute top-5 right-6 text-7xl font-black text-slate-100 leading-none select-none">"</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-base">★</span>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-7 relative z-10">"{r.text}"</p>

              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className={`w-11 h-11 rounded-2xl ${avatarColors[i]} font-black text-lg flex items-center justify-center shrink-0`}>
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
