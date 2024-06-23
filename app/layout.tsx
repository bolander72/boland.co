import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Nav } from '@/components/nav'
import { Providers } from '@/components/providers'
import sharedMetadata from '@/metadata'
import { Lora, Cabin } from 'next/font/google'

const serif = Lora({ subsets: ['latin'], variable: '--font-lora' })
const sans = Cabin({ subsets: ['latin'], variable: '--font-cabin' })

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
        className={`my-12 text-pretty ${sans.variable} ${serif.variable} font-sans text-xl leading-8 tracking-wide`}
      >
        <Providers
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <>
            <Nav />
            <main className='mx-auto max-w-md px-4'>{children}</main>
          </>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
