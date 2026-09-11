'use client'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  const locale = useLocale()
  const lp = (p) => `/${locale}${p}`

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 animate-bird-float">
                <Image src="/logo-bird.png" alt="경청 INC" fill className="object-contain brightness-0 invert opacity-80" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-base tracking-wide">경청</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase">Inc</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">{t('desc')}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={lp('/')} className="hover:text-white transition-colors">{nav('home')}</Link></li>
              <li><Link href={lp('/hospitals')} className="hover:text-white transition-colors">{nav('hospitals')}</Link></li>
              <li><Link href={lp('/specialties')} className="hover:text-white transition-colors">{nav('specialties')}</Link></li>
              <li><Link href={lp('/pricing')} className="hover:text-white transition-colors">{nav('pricing')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>KakaoTalk: k-bridge</li>
              <li>WhatsApp: +82 10-0000-0000</li>
              <li><Link href={lp('/contact')} className="hover:text-white transition-colors">{nav('contact')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-sm text-center text-slate-500">
          &copy; {new Date().getFullYear()} 경청 INC. {t('rights')}.
        </div>
      </div>
    </footer>
  )
}
