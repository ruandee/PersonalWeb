import React from "react"
import type { Metadata } from 'next'
import { Nunito, Space_Mono } from 'next/font/google'
import './globals.css'

const _nunito = Nunito({ subsets: ["latin"], variable: '--font-nunito' });
const _spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ["latin"], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: "Dee Ruan / Web",
  description: 'Why are you looking at my metadata?',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_nunito.variable} ${_spaceMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
