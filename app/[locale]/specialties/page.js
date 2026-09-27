import { specialties } from '@/data/specialties'

export default function SpecialtiesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Specialties</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Эмчилгээний чиглэлүүд</h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          Солонгосын шилдэг эмнэлгүүдэд 23 чиглэлийн мэргэшсэн эмчилгээ авах боломжтой
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((s) => (
          <div
            key={s.id}
            id={s.id}
            className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                {s.icon}
              </div>
              <div>
                <h2 className="font-bold text-slate-900">{s.label}</h2>
                <p className="text-slate-400 text-sm">{s.labelKo}</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm font-medium mb-1">{s.labelMn}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{s.descMn}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
