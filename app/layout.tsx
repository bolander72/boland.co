import Navigation from '@/components/Navigation/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Boland Co - An indie web studio',
  description: 'The subscription web studio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'bg-darkGray')}>
        <Navigation />
        {children}
        </body>
    </html>
  )
}

