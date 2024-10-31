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
              <img
                src='/favicon.ico'
                alt='b'
                className='h-5 w-5 invert saturate-200'
              />
            </footer>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
