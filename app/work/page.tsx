import sharedMetadata from '@/metadata'
import { Title } from '@/components/title'

export const metadata = {
   ...sharedMetadata
}

export default function Work() {
   return (
      <main className='w-full'>
         <section className='space-y-6'>
            <Title className='text-3xl'>Work</Title>
            <div className='flex justify-between items-center text-xl leading-8'>
               I like to make cool stuff with good people and have fun doing it. Even better if it does some good for the world. The goal is to try not to suck: as a person, as a teammate, and as a maker. Do that, and the rest will follow.
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>Mainline Alpha <sup>🇺🇸</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Founding Engineer</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Founding Engineer</div>
                  <div className='italic'>2024 - Present</div>
               </div>
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>AIMG <sup>🇺🇸</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Lead Product Engineer</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Lead Product Engineer</div>
                  <div className='italic'>2023 - 2024</div>
               </div>
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>SmartLocker <sup>🇺🇸</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Co-Founder</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Co-Founder</div>
                  <div className='italic'>2020 - 2024</div>
               </div>
            </div>
            {/* <div className='flex justify-between items-center text-xl leading-8'>
               <div>Boland Co.</div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground'>Freelance Consultant</div>
                  <div className='italic'>2017 - Present</div>
               </div>
            </div> */}
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>AE Studio <sup>🇺🇸</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Technical Product Manager</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Technical Product Manager</div>
                  <div className='italic'>2022 - 2023</div>
               </div>
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>the.com <sup>🇺🇸</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Senior Software Engineer</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Senior Software Engineer</div>
                  <div className='italic'>2021 - 2022</div>
               </div>
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>BlockEarner <sup>🇦🇺</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Senior Software Engineer</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Senior Software Engineer</div>
                  <div className='italic'>2020 - 2022</div>
               </div>
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>Hy-Vee <sup>🇺🇸</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Software Engineer</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Software Engineer</div>
                  <div className='italic'>2020 - 2022</div>
               </div>
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>mogul.gg <sup>🇦🇺</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Software Engineer</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Software Engineer</div>
                  <div className='italic'>2019 - 2020</div>
               </div>
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>Fastpath <sup>🇺🇸</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Software Engineer</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Software Engineer</div>
                  <div className='italic'>2018 - 2020</div>
               </div>
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>Corteva <sup>🇺🇸</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Software Engineer</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Software Engineer</div>
                  <div className='italic'>2017 - 2018</div>
               </div>
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>Swiss EP <sup>🇲🇰</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Entrepreneur in Residence</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Entrepreneur in Residence</div>
                  <div className='italic'>2016 - 2017</div>
               </div>
            </div>
            <div className='flex justify-between items-center text-xl leading-8'>
               <div className='flex-col sm:flex-row'>
                  <div>New Digital School <sup>🇵🇹</sup></div>
                  <div className='text-muted-foreground flex sm:hidden text-lg'>Researcher in Residence</div>
               </div>
               <div className='flex space-x-4'>
                  <div className='text-muted-foreground hidden sm:flex'>Researcher in Residence</div>
                  <div className='italic'>2016 - 2017</div>
               </div>
            </div>
         </section>
      </main>
   )
}
