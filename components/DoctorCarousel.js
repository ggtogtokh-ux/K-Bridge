'use client'

import { useState } from 'react'

export default function DoctorCarousel({ doctors, locale }) {
  const [current, setCurrent] = useState(0)

  if (!doctors || doctors.length === 0) return null

  const doc = doctors[current]

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Photo */}
        <div className="w-full sm:w-52 shrink-0">
          {doc.photo ? (
            <img
              src={doc.photo}
              alt={doc.name}
              className="w-full sm:w-52 h-64 object-cover rounded-2xl"
            />
          ) : (
            <div className="w-full sm:w-52 h-64 rounded-2xl bg-blue-50 flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-300">
                {doc.name.replace('Dr. ', '').split(' ').map(w => w[0]).slice(0, 2).join('')}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h3>
          <p className="text-teal-600 font-semibold text-sm mb-3">{doc.credential}</p>
          {doc.bio && (
            <p className="text-slate-500 text-sm leading-relaxed">{doc.bio}</p>
          )}
        </div>
      </div>

      {/* Dots */}
      {doctors.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {doctors.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? 'bg-blue-600' : 'bg-slate-200'
              }`}
              aria-label={`Doctor ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
