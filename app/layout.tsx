import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Nav } from '@/components/nav'
import { Providers } from '@/components/providers'
import sharedMetadata from '@/metadata'
import { Cabin, Permanent_Marker } from 'next/font/google'

const sans = Cabin({ subsets: ['latin'], variable: '--font-cabin' })
const marker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanent-marker',
})

export const metadata = {
  ...sharedMetadata
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`my-12 text-pretty ${sans.variable} ${marker.variable} bg-off-white font-sans tracking-wide dark:bg-background`}
      >
        <Providers
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <>
            <Nav />
            <main className='mx-auto max-w-[430px] px-4'>{children}</main>
          </>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
