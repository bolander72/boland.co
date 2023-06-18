'use client'

import Navigation from '@/components/Navigation/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import classNames from 'classnames'
import { NavigationContextProvider } from '@/contexts/NavigationContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'bg-darkGray')}>
        <NavigationContextProvider>
          <Navigation />
          {children}
        </NavigationContextProvider>
        </body>
    </html>
  )
}

