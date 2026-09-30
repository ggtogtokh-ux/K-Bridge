'use client'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setUser(null)
    router.push(`/${locale}`)
  }

  const localePath = (path) => `/${locale}${path}`

  const links = [
    { href: '/', label: t('home') },
    { href: '/hospitals', label: t('hospitals') },
    { href: '/hostel', label: t('hostel') },
    { href: '/specialties', label: t('specialties') },
    { href: '/pricing', label: t('pricing') },
    { href: '/reviews', label: t('reviews') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ]

  const switchLocale = (newLocale) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  const avatarLetter = user?.email?.[0]?.toUpperCase() ?? '?'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/8'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href={localePath('/')} className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              <Image
                src="/logo-main.png"
                alt="경청 INC"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-white text-lg tracking-widest">경청</span>
              <span className="text-[9px] font-semibold tracking-[0.3em] text-white/40 uppercase">Gyeongcheong INC</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={localePath(l.href)}
                className="text-xs font-semibold text-white/60 hover:text-white transition-colors uppercase tracking-widest"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              {['mn', 'en', 'ko'].map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest transition-all ${
                    locale === loc ? 'text-white' : 'text-white/35 hover:text-white/60'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            {user ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 border border-white/15 rounded-lg px-3 py-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#8B7355] flex items-center justify-center text-[10px] font-bold text-white">
                    {avatarLetter}
                  </div>
                  <span className="text-white/60 text-xs max-w-[100px] truncate">{user.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  {locale === 'mn' ? 'Гарах' : locale === 'ko' ? '로그아웃' : 'Sign out'}
                </button>
              </div>
            ) : (
              <Link
                href={localePath('/login')}
                className="border border-white/25 hover:border-white/60 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition-all hover:bg-white/5"
              >
                {t('login')}
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/8 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={localePath(l.href)}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-white/60 hover:text-white uppercase tracking-widest transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-6 flex items-center gap-4">
            {['mn', 'en', 'ko'].map((loc) => (
              <button
                key={loc}
                onClick={() => { switchLocale(loc); setMenuOpen(false) }}
                className={`text-xs font-bold uppercase tracking-widest ${
                  locale === loc ? 'text-white' : 'text-white/35'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
          {user ? (
            <div className="flex flex-col gap-3">
              <span className="text-white/50 text-sm">{user.email}</span>
              <button onClick={() => { handleSignOut(); setMenuOpen(false) }}
                className="text-xs font-bold uppercase tracking-widest text-white/40">
                {locale === 'mn' ? 'Гарах' : 'Sign out'}
              </button>
            </div>
          ) : (
            <Link href={localePath('/login')} onClick={() => setMenuOpen(false)}
              className="border border-white/25 text-white text-xs font-bold uppercase tracking-widest px-5 py-3 text-center">
              {t('login')}
            </Link>
          )}
        </div>
      )}
    </header>
  )
}
