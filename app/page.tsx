import BenefitsSection from '@/components/Benefits/BenefitsSection'
import Divider from '@/components/Divider'
import HeroSection from '@/components/Hero/HeroSection'
import MethodSection from '@/components/Method/MethodSection'
import PricingSection from '@/components/Pricing/PricingSection'
import ProcessSection from '@/components/Process/ProcessSection'

export const metadata = {
  title: 'Boland Co - An indie web studio',
  description: 'The subscription web studio.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12">
      <div className='bg-darkGray' style={{ backgroundImage: `url("/backgrounds/topography-dark.svg")` }}>
        <HeroSection />
      </div>
      <div
        className='flex flex-col justify-center items-center w-screen bg-easyWhite'
        style={{ backgroundImage: `url("/backgrounds/signal.svg")` }}
      >
        <div className="max-w-3xl">
          <MethodSection />
        </div>
        <div className="bg-easyWhite">
          <Divider strokeClass='stroke-easyBlack/5' id='process' />
        </div>
      </div>
      <div
        className='flex flex-col justify-center items-center w-screen bg-easyWhite'
        style={{ backgroundImage: `url("/backgrounds/signal.svg")` }}
      >
        <div className="max-w-3xl">
          <ProcessSection />
        </div>
        <div className="bg-easyWhite">
          <Divider strokeClass='stroke-easyBlack/5' id='benefits' />
        </div>
      </div>
      <div
        className='flex flex-col justify-center items-center w-screen bg-easyWhite'
        style={{ backgroundImage: `url("/backgrounds/signal.svg")` }}
      >
        <div className="max-w-3xl">
          <BenefitsSection />
        </div>
        <div className="bg-easyWhite">
          <Divider strokeClass='stroke-easyBlack/5' id='pricing' />
        </div>
      </div>
      <div
        className='flex flex-col justify-center items-center w-screen bg-easyWhite'
        style={{ backgroundImage: `url("/backgrounds/signal.svg")` }}
      >
        <div className="max-w-5xl">
          <PricingSection />
        </div>
        <div className="bg-easyWhite">
          <Divider strokeClass='stroke-easyBlack/5' id='faqs' />
        </div>
      </div>
    </main>
  )
}
