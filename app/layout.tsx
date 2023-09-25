import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Heading from './components/Heading'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Douban',
  description: 'A douban-clone app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className + ' h-screen flex flex-col'}>
        <Heading />
        <main className='grow max-w-7xl px-4 sm:px-6 lg:px-8'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
