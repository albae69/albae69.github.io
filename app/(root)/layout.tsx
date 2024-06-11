import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import { twMerge } from 'tailwind-merge'

import Header from '@/components/Header'
import '../globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Footer from '@/components/Footer'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = {
  title: 'Bae Dev - Frontend Developer',
  description: "Bae's Personal Web created with NextJS",
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
          'min-h-screen max-w-screen-lg mx-auto p-4 flex flex-1 flex-col justify-between'
        )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div>
            <UnderConstruction />
            <Header />
          </div>
          {children}
          <Footer />
          {process.env.NODE_ENV === 'production' && (
            <>
              <Analytics />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
