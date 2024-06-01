const metadata = {
  title: `Michael Boland`,
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
        url: 'https://boland.co/og',
        width: 1200,
        height: 630,
        alt: 'Michael Boland'
      },
      {
        url: 'https://boland.co/og',
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
    title: 'Lee Robinson',
    card: 'summary_large_image',
    creator: '@bolander72'
  }
}

export default metadata
