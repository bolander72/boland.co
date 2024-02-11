import sharedMetadata from '@/metadata'
import { Title } from '@/components/title'
import { Separator } from '@/components/ui/separator'

export const metadata = {
  ...sharedMetadata
}

export default function Work() {
  return (
    <main className='w-full'>
      <section className='space-y-6'>
        <Title className='text-3xl'>Work</Title>
        <div className='flex items-center justify-between text-xl leading-8'>
          I like to make cool stuff with good people and have fun doing it; even&nbsp;
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          better if it does some good for the world. Here's a summary of my work so far.
        </div>
        <Separator />
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              Mainline Alpha
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Founding Engineer
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Founding Engineer
            </div>
            <div className='italic'>2024 - Present</div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              AIMG
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Lead Product Engineer
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Lead Product Engineer
            </div>
            <div className='italic'>2023 - 2024</div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              SmartLocker
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Co-Founder
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Co-Founder
            </div>
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
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              AE Studio
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Technical Product Manager
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Technical Product Manager
            </div>
            <div className='italic'>2022 - 2023</div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              the.com
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Senior Software Engineer
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Senior Software Engineer
            </div>
            <div className='italic'>2021 - 2022</div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              BlockEarner
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Senior Software Engineer
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Senior Software Engineer
            </div>
            <div className='italic'>2020 - 2022</div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              Hy-Vee
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Software Engineer
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Software Engineer
            </div>
            <div className='italic'>2020 - 2022</div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              mogul.gg
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Software Engineer
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Software Engineer
            </div>
            <div className='italic'>2019 - 2020</div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              Fastpath
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Software Engineer
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Software Engineer
            </div>
            <div className='italic'>2018 - 2020</div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              Corteva
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Software Engineer
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Software Engineer
            </div>
            <div className='italic'>2017 - 2018</div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              Swiss EP
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Entrepreneur in Residence
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Entrepreneur in Residence
            </div>
            <div className='italic'>2016 - 2017</div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              New Digital School
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Researcher in Residence
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Researcher in Residence
            </div>
            <div className='italic'>2016 - 2017</div>
          </div>
        </div>
      </section>
    </main>
  )
}
