import LogoMarquee from "./LogoMarquee";
import TextEffect from "../TextEffect";

const words = [
   '(d)app',
   'campaign',
   'demo',
   'event',
   'feature',
   'product',
   'project',
   'website'
]

export default function HeroSection() {
   return (
      <div className='space-y-2 mt-16'>
         <div className='flex flex-col items-center'>
            <div className='flex-col'>
               <h1 className='text-5xl sm:text-6xl md:text-7xl text-easyWhite font-bold'>A web studio</h1>
               <h1 className='text-4xl sm:text-5xl md:text-6xl text-easyWhite font-bold'>for your next
                  <div className='mt-1'>
                     <span className='bg-gradient-to-r bg-clip-text bg-300% text-transparent from-blue-400 to-orange-500 via-purple-500 animate-gradient-x'>
                        {words[Math.floor(Math.random() * words.length)]}
                     </span>.
                  </div>
               </h1>
            </div>
         </div>

         <div className='tracking-normal text-center'>
            <div className='pt-16 text-lg sm:text-2xl text-easyWhite'>
            <span className="hidden md:inline-block">
               Flexible&nbsp;
            </span>
            <span className="uppercase md:normal-case">w</span>eb development subscriptions
            </div>
            <div className='pt-0 text-md sm:text-xl text-blue-300'>Perfect for fixed timelines and budgets</div>
         </div>

         <div className='text-sm pt-6 text-easyWhite text-center'>
            <span>Better results, <span className="italic">guaranteed</span>.</span>
         </div>
         <section aria-labelledby="logocloud-one" className="mt-12 text-center overflow-hidden">
            <div className="relative items-center">
               <div className="mt-20 lg:mt-28 overflow-x-hidden">
                  <LogoMarquee />
               </div>
            </div>
         </section>
      </div>
   )
}