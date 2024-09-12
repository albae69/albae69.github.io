import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import { twMerge } from 'tailwind-merge'

export const metadata: Metadata = {
  title: 'Bae Dev - Frontend Developer',
  description: 'Web created with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={twMerge(GeistSans.className)}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
