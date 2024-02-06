const metadata = {
  title: 'Michael Boland',
  description: 'Developer, strategist, and consultant.',
  metadataBase: new URL('https://boland.co'),
  keywords: [
    'indie consultancy',
    'indie',
    'consultancy',
    'consulting',
    'business',
    'agency',
    'tech',
    'freelance',
    'frontend',
    'developer',
    'strategy',
    'strategist'
  ],
  authors: [{ name: 'Michael Boland', url: 'https://boland.co' }],
  creator: 'Michael Boland',
  openGraph: {
    title: 'Michael Boland',
    description: 'Developer, strategist, and consultant.',
    url: 'https://boland.co',
    siteName: 'Boland Co.',
    images: [
      {
        url: 'https://boland.co/og.jpg',
        width: 1200,
        height: 630
      },
      {
        url: 'https://boland.co/og-alt.jpg',
        width: 1200,
        height: 630,
        alt: 'Boland Co.'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default metadata
