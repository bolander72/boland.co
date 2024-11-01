import './globals.css'

import { Nav } from '@/components/nav'
import sharedMetadata from '@/metadata'
import { ViewTransitions } from 'next-view-transitions'

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
        <head>
          <link
            rel='icon'
            type='image/png'
            href='/favicon-96x96.png'
            sizes='96x96'
          />
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <meta name='apple-mobile-web-app-title' content='Boland' />
          <link rel='manifest' href='/site.webmanifest' />
        </head>
        <body
          className={
            'mx-auto max-w-full text-pretty px-6 dark:bg-background sm:max-w-xl'
          }
        >
          <div className='py-14'>
            <Nav />
            <main className='flex-grow'>
              <article>{children}</article>
            </main>
            <footer className='mt-8 flex justify-center text-center text-sm text-muted-foreground'>
              <img src='/b.png' alt='b' className='h-4 w-auto' />
            </footer>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
