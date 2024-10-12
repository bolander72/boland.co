import './globals.css'

import { Nav } from '@/components/nav'
import { Providers } from '@/components/providers'
import sharedMetadata from '@/metadata'
import { ViewTransitions } from 'next-view-transitions'
import localFont from 'next/font/local'

const brush = localFont({
  src: [
    {
      path: '../public/fonts/bomber-brush/BomberBrush-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-brush'
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
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <body
          className={`my-12 text-pretty ${brush.variable} mx-auto w-auto px-6 dark:bg-background
            sm:max-w-2xl md:max-w-3xl lg:max-w-4xl`}
        >
          <Providers
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <>
              <Nav />
              <main className='mx-auto'>{children}</main>
            </>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}
