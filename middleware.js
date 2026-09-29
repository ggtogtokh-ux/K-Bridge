import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['mn', 'en', 'ko'],
  defaultLocale: 'mn',
})

export default function middleware(request) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/auth')) {
    return NextResponse.next()
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
}
