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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-3">
              <Image src="/logo.png" alt="경청 INC" width={120} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">{t('desc')}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={lp('/')} className="hover:text-white transition-colors">{nav('home')}</Link></li>
              <li><Link href={lp('/hospitals')} className="hover:text-white transition-colors">{nav('hospitals')}</Link></li>
              <li><Link href={lp('/specialties')} className="hover:text-white transition-colors">{nav('specialties')}</Link></li>
              <li><Link href={lp('/pricing')} className="hover:text-white transition-colors">{nav('pricing')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>KakaoTalk: k-bridge</li>
              <li>WhatsApp: +82 10-0000-0000</li>
              <li><Link href={lp('/contact')} className="hover:text-white transition-colors">{nav('contact')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-sm text-center">
          &copy; {new Date().getFullYear()} 경청 INC. {t('rights')}.
        </div>
      </div>
    </footer>
  )
}
