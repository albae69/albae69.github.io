import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import { twMerge } from 'tailwind-merge'
import '../globals.css'
import Header from '@/components/Header'
import UnderConstruction from '@/components/UnderConstruction'
import { ThemeProvider } from '@/components/ThemeProvider'

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
      <body
        className={twMerge(
          GeistSans.className,
          'min-h-screen max-w-screen-lg mx-auto p-4'
        )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <UnderConstruction />
          <Header />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
