import BenefitsSection from '@/components/Benefits/BenefitsSection'
import Divider from '@/components/Divider'
import HeroSection from '@/components/Hero/HeroSection'
import MethodSection from '@/components/Method/MethodSection'
import ProcessSection from '@/components/Process/ProcessSection'

export const metadata = {
  title: 'Boland Co - An indie web studio',
  description: 'The subscription web studio.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12">
      <div className='bg-darkGray'>
        <HeroSection />
      </div>
      <div
        className='bg-gradient-to-b from-easyWhite from-10% via-easyWhite via-80% to-emerald-50 to-90% flex flex-col justify-center items-center w-screen'
      >
        <div className="max-w-3xl">
          <MethodSection />
        </div>
        <Divider strokeClass='stroke-emerald-900/10' id='process' />
      </div>
      <div
        className='bg-gradient-to-b from-emerald-50 from-10% via-easyWhite via-20% to-blue-50 to-900%  flex flex-col justify-center items-center w-screen'>
        <div className="max-w-3xl">
          <ProcessSection />
        </div>
        <Divider strokeClass='stroke-blue-900/10' />
      </div>
      <div
        className='bg-gradient-to-b from-emerald-50 from-10% via-easyWhite via-20% to-easyWhite to-90%  flex flex-col justify-center items-center w-screen'>
        <div className="max-w-3xl">
          <BenefitsSection />
        </div>
        <Divider strokeClass='stroke-blue-900/10' />
      </div>
    </main>
  )
}
