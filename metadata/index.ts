import type { Metadata } from 'next'

const metadata: Metadata = {
  title: {
    default: 'Michael Boland',
    template: '%s | Michael Boland'
  },
  description: 'Programmer, designer, and consultant.',
  metadataBase: new URL('https://boland.co'),
  keywords: [
    'indie consultancy',
    'indie',
    'consultant',
    'consultancy',
    'consulting',
    'business',
    'agency',
    'tech',
    'freelance',
    'frontend',
    'developer',
    'strategy',
    'strategist',
    'programmer',
    'programming',
    'blog',
    'blogging',
    'design',
    'designer'
  ],
  authors: [{ name: 'Michael Boland', url: 'https://boland.co' }],
  creator: 'Michael Boland',
  openGraph: {
    title: 'Michael Boland',
    description: 'Programmer, designer, and consultant.',
    url: 'https://boland.co',
    siteName: 'Michael Boland',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://boland.co/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Michael Boland'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    creator: '@bolander72',
    title: 'Michael Boland',
    description: 'Programmer, designer, and consultant.',
    card: 'summary_large_image',
    images: ['https://boland.co/opengraph-image.png']
  },
  alternates: {
    canonical: 'https://boland.co',
    types: {
      'application/rss+xml': 'https://boland.co/rss.xml'
    }
  }
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon.ico',
  //   apple: [
  //     { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
  //   ],
  //   other: [
  //     {
  //       url: '/web-app-manifest-192x192.png',
  //       sizes: '192x192',
  //       type: 'image/png'
  //     },
  //     {
  //       url: '/web-app-manifest-512x512.pngg',
  //       sizes: '512x512',
  //       type: 'image/png'
  //     }
  //   ]
  // },
  // manifest: '/site.webmanifest',
  // appleWebApp: {
  //   title: 'Boland'
  // }
}

export default metadata
