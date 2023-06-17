import Divider from '@/components/Divider'
import HeroSection from '@/components/Hero/HeroSection'
import MethodSection from '@/components/Method/MethodSection'
import ProcessSection from '@/components/Process/ProcessSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 my-20">
      <div className='bg-darkGray'>
        <HeroSection />
      </div>
      <div className='bg-gradient-to-b from-easyWhite via-easyWhite to-emerald-50 w-screen border-b'>
        <MethodSection />
        <Divider strokeClass='stroke-emerald-900/10' />
      </div>
      <div className='bg-gradient-to-b from-emerald-50 via-emerald-50 to-blue-100 w-screen'>
        <ProcessSection />
        <Divider strokeClass='stroke-blue-900/10' />
      </div>
    </main>
  )
}
