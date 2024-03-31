import './globals.css'

import { Nav } from '@/components/nav'
import { Providers } from '@/components/providers'
import sharedMetadata from '@/metadata'

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
      <body className='my-12 text-pretty font-sans'>
        <Providers
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <>
            <Nav />
            <main className='mx-auto max-w-lg px-4'>{children}</main>
          </>
        </Providers>
      </body>
    </html>
  )
}
