import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['mn', 'en', 'ko'],
  defaultLocale: 'mn',
})

export default function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.next()
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
