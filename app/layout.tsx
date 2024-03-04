import './globals.css'
import { Nav } from '@/components/nav'
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
        <Nav />
        <main className='mx-auto max-w-lg px-4'>{children}</main>
      </body>
    </html>
  )
}
