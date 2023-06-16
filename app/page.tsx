import HeroSection from '@/components/Hero/HeroSection'
import ProcessSection from '@/components/Process/ProcessSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 my-20">
      <div className='bg-darkGray'>
        <HeroSection />
      </div>
      <div className='bg-easyWhite w-screen'>
        <ProcessSection />
      </div>
    </main>
  )
}
