import sharedMetadata from '@/metadata'
import { Title } from '@/components/title'
import { Separator } from '@/components/ui/separator'
import { gigs } from './index'
import { Paragraph } from '@/components/paragraph'

export const metadata = {
  ...sharedMetadata
}

export default function Work() {
  return (
    <main className='w-full'>
      <section className='space-y-6'>
        <Title className='text-3xl'>Work</Title>
        <Paragraph>
          I like to make cool stuff with good people and have fun doing it;
          even&nbsp;
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          better if it does some good for the world. Here's a summary of my work
          so far.
        </Paragraph>
        <Separator />
        {gigs.map(({ name, role, timespan }) => (
          <div
            className='flex items-center justify-between text-xl leading-8'
            key={name}
          >
            <div className='flex-col sm:flex-row'>
              <div>{name}</div>
              <div className='flex text-lg text-muted-foreground sm:hidden'>
                {role}
              </div>
            </div>
            <div className='flex space-x-4'>
              <div className='hidden text-muted-foreground sm:flex'>{role}</div>
              <div>{timespan}</div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
