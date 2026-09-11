'use client'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const localePath = (path) => `/${locale}${path}`

  const links = [
    { href: '/', label: t('home') },
    { href: '/hospitals', label: t('hospitals') },
    { href: '/hostel', label: t('hostel') },
    { href: '/specialties', label: t('specialties') },
    { href: '/pricing', label: t('pricing') },
    { href: '/reviews', label: t('reviews') },
    { href: '/contact', label: t('contact') },
  ]

  const switchLocale = (newLocale) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={localePath('/')} className="flex items-center gap-2">
            <Image src="/logo.png" alt="경청 INC" width={120} height={40} className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={localePath(l.href)}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right: lang switcher + auth */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-slate-100 rounded-full px-1 py-1">
              {['mn', 'en', 'ko'].map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    locale === loc
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
            <Link
              href={localePath('/login')}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {t('login')}
            </Link>
            <Link
              href={localePath('/signup')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              {t('signup')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={localePath(l.href)}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
            >
              {l.label}
            </Link>
          ))}
          <div className="border-t border-slate-100 pt-3 flex items-center gap-2">
            {['mn', 'en', 'ko'].map((loc) => (
              <button
                key={loc}
                onClick={() => { switchLocale(loc); setMenuOpen(false) }}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  locale === loc ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="flex gap-2 pt-1">
            <Link
              href={localePath('/login')}
              className="flex-1 text-center text-sm font-medium border border-slate-200 rounded-lg py-2 text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              {t('login')}
            </Link>
            <Link
              href={localePath('/signup')}
              className="flex-1 text-center text-sm font-semibold bg-blue-600 text-white rounded-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              {t('signup')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
