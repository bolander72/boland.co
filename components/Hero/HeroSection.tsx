import LogoMarquee from "./LogoMarquee";

export default function HeroSection() {
   const words = [
      '(d)app',
      'campaign',
      'concept',
      'creation',
      'demo',
      'event',
      'feature',
      'idea',
      'iteration',
      'product',
      'project',
      'raise',
      'startup',
      'venture',
      'website'
   ]

   const word: string = words[Math.floor(Math.random() * words.length)]

   return (
      <div className='space-y-2 px-12 mt-16'>
         <div className='flex flex-col items-center'>
            <div className='flex-col'>
               <h1 className='text-5xl sm:text-6xl md:text-7xl text-easyWhite font-bold'>A web studio</h1>
               <h1 className='text-4xl sm:text-5xl md:text-6xl text-easyWhite font-bold'>for your next
                  <div className='mt-1'>
                     <span className='bg-gradient-to-r bg-clip-text bg-300% text-transparent from-blue-400 to-orange-500 via-purple-500 animate-gradient-x'>
                        {word}
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

         {/* <div className='pt-10 text-center'>
            <Link
               href="#pricing"
               type="button"
               className="rounded-lg bg-[#A6A999] px-10 md:px-20 py-2.5 md:py-5 text-sm: md:first-line:text-lg font-semibold text-darkGray shadow-xl shadow-black/50 hover:shadow-none focus-visible:outline cursor-pointer border-8 border-darkGray border-double"
            >
               See Plans
            </Link>
         </div> */}
         <div className='text-sm pt-6 text-easyWhite text-center'>
            <span>Happy results, <span className="italic">guaranteed</span>.</span>
         </div>
         <section aria-labelledby="logocloud-one" className="mt-12 text-center overflow-hidden">
            <div className="relative items-center">
               {/* <p className="text-base text-blue-300">
                  Products trusted by companies big and small -
               </p> */}
               <div className="mt-20 lg:mt-28 overflow-x-hidden">
                  <LogoMarquee />
               </div>
            </div>
         </section>
      </div>
   )
}