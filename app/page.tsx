import About from '@/components/about/about'
import Intro from '@/components/intro'
import Marquee from '@/components/marquee/marquee'
import Pricing from '@/components/pricing/pricing'

export const metadata = {
  title: 'Boland Co.',
  description: 'an indie web studio.',
  metadataBase: new URL('https://boland.co'),
  keywords: ['Next.js', 'Web studio', 'Web Agency', 'Vercel', 'Tailwind CSS', 'shadcn-ui', 'DAAS', 'Development-as-a-service', 'bitcoin', 'lightning', 'web3', 'ai'],
  authors: [{ name: 'Michael Boland', url: 'https://boland.co' }],
  creator: 'Michael Boland',
  openGraph: {
    title: 'Boland Co.',
    description: 'an indie web studio.',
    url: 'https://boland.co',
    siteName: 'Boland Co.',
    images: [
      {
        url: 'https://boland.co/og.jpg',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://boland.co/og-alt.jpg',
        width: 1200,
        height: 630,
        alt: 'Boland Co.',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
      'max-snippet': -1,
    }
  },
}

export default function Home() {
  return (
    <main className="w-screen space-y-24">
      <Intro />
      <Marquee />
      <Pricing />
      <About />
    </main>
  )
}
