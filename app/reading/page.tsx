import sharedMetadata from '@/metadata'
import { Paragraph } from '@/components/paragraph'
import { Title } from '@/components/title'
import { Separator } from '@/components/ui/separator'

export const metadata = {
  ...sharedMetadata
}

export default function Reading() {
  return (
    <main className='w-full'>
      <section className='space-y-6'>
        <Title className='text-3xl'>Good Reads</Title>
        <div className='flex items-center justify-between text-xl leading-8'>
          This is a non-exhaustive list of books, articles, and essays that have
          shaped how I think as well as my perspective and approach to life and
          work.
        </div>
        <Separator />
        <h2 className='text-2xl'>2024</h2>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Crypto's Three-Body Problem
            </div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Laura Lotti, Sam Hart, Toby Shorin
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Laura Lotti, Sam Hart, Toby Shorin
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>The Art of Gig, Volume 2: Superstructures</div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Venkatesh Rao
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Venkatesh Rao
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between text-xl leading-8'>
          <div className='flex-col sm:flex-row'>
            <div>The Art of Gig, Volume 1: Foundations</div>
            <div className='flex text-lg text-muted-foreground sm:hidden'>
              Venkatesh Rao
            </div>
          </div>
          <div className='flex space-x-4'>
            <div className='hidden text-muted-foreground sm:flex'>
              Venkatesh Rao
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
