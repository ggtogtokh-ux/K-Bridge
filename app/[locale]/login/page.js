'use client'
import { useLocale } from 'next-intl'
import { createClient } from '@/lib/supabase'

export default function LoginPage() {
  const locale = useLocale()

  const handleGoogleLogin = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/${locale}`,
      },
    })
  }

  const text = {
    title:    locale === 'mn' ? 'Нэвтрэх' : locale === 'ko' ? '로그인' : 'Sign In',
    subtitle: locale === 'mn' ? 'Google акаунтаараа нэвтэрнэ үү' : locale === 'ko' ? 'Google 계정으로 로그인하세요' : 'Continue with your Google account',
    btn:      locale === 'mn' ? 'Google-ээр нэвтрэх' : locale === 'ko' ? 'Google로 로그인' : 'Continue with Google',
    note:     locale === 'mn' ? 'Нэвтэрснээр үйлчилгээний нөхцлийг зөвшөөрч байна.' : locale === 'ko' ? '로그인하면 이용약관에 동의하는 것입니다.' : 'By signing in you agree to our terms of service.',
  }

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-10 flex flex-col items-center gap-6">

          {/* Logo mark */}
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-black text-slate-900 mb-1">{text.title}</h1>
            <p className="text-slate-400 text-sm">{text.subtitle}</p>
          </div>

          {/* Google button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-700 transition-colors shadow-sm"
          >
            {/* Google G icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {text.btn}
          </button>

          <p className="text-xs text-slate-400 text-center">{text.note}</p>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">Gyeongcheong INC</p>
      </div>
    </main>
  )
}
