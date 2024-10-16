import Footer from '@/components/footer'
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
          className={`text-pretty ${brush.variable} mx-auto max-w-full px-6 dark:bg-background
            sm:max-w-xl`}
        >
          <Providers
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='flex min-h-screen flex-col justify-between py-20'>
              <div className='flex flex-col'>
                <Nav />
                <main className='flex-grow'>{children}</main>
              </div>
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}
