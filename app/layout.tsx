import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { DM_Serif_Display, Caveat } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const _geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const _dmSerif = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-dm-serif' })
const _caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })

export const metadata: Metadata = {
  title: 'Heaps Healthy - Coming Soon',
  description: 'Health optimisation for people who like to know their numbers. Join the waitlist for early access.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.variable} ${_geistMono.variable} ${_dmSerif.variable} ${_caveat.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
