import Intro from '@/components/Intro'
import Marquee from '@/components/Marquee/Marquee'

export const metadata = {
  title: 'Boland Co.',
  description: 'an indie web studio',
}

export default function Home() {
  return (
    <main className="w-screen">
        <Intro />
        <Marquee />
    </main>
  )
}
