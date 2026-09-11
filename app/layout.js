import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'K-Bridge — Korean Medical Service',
  description: 'Your trusted gateway to Korean healthcare',
}

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
