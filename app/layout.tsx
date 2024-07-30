import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Nav } from '@/components/nav'
import { Providers } from '@/components/providers'
import sharedMetadata from '@/metadata'
import localFont from 'next/font/local'

// const marker = Permanent_Marker({ weight: '400', variable: '--font-marker' })

const marker = localFont({
  src: [
    {
      path: '../public/fonts/marker/MarkerScratch-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-marker'
})

const neueMontreal = localFont({
  src: [
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-neue-montreal'
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
        className={`my-12 text-pretty ${neueMontreal.variable} ${marker.variable} bg-[#FFFAF2] dark:bg-background`}
      >
        <Providers
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <>
            <Nav />
            <main className='mx-auto max-w-[380px] px-4'>{children}</main>
          </>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
