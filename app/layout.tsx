'use client'

import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react';

import './globals.css'
import { cn } from "@/lib/utils";

const montreal = localFont({
  variable: '--font-montreal',
  src: [
    {
      path: '../public/fonts/NeueMontreal-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMontreal-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMontreal-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMontreal-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(montreal.className, 'bg-easyWhite font-sans uppercase')}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

