import localFont from 'next/font/local'

import './globals.css'
import { cn } from '@/lib/utils'
import { Nav } from '@/components/nav'
import sharedMetadata from '@/metadata'

const montreal = localFont({
  variable: '--font-montreal',
  src: [
    {
      path: '../public/fonts/NeueMontreal-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/fonts/NeueMontreal-LightItalic.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../public/fonts/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/NeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/NeueMontreal-MediumItalic.otf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../public/fonts/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/NeueMontreal-BoldItalic.otf',
      weight: '700',
      style: 'italic'
    }
  ]
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
      <body className={cn(montreal.className, 'my-12 text-pretty font-sans')}>
        <Nav />
        <main className='mx-auto max-w-lg px-4'>{children}</main>
      </body>
    </html>
  )
}
