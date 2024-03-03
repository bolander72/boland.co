import sharedMetadata from '@/metadata'
import { Title } from '@/components/title'
import { gigs } from './index'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = {
  ...sharedMetadata
}

export default function Work() {
  return (
    <section className='w-full space-y-6'>
      <Title className='text-3xl'>Work</Title>
      {/* <Paragraph>
        I like to make cool stuff with good people and have fun doing it;
        even&nbsp;
        better if it does some good for the world. Here's a summary of my work
        so far.
      </Paragraph>
      <Separator /> */}
      {gigs.map(({ name, role, timespan, link }) => (
        <div
          className='flex items-center justify-between text-xl leading-8'
          key={name}
        >
          <div>
            {name}
            {link && (
              <Link href={link}>
                <ArrowUpRight className='ml-0 inline-block h-[18px] text-blue-600' />
              </Link>
            )}
            <div className='flex text-lg text-muted-foreground'>{role}</div>
          </div>
          <div className='flex space-x-4 text-lg'>
            {/* <div className='hidden text-lg text-muted-foreground sm:flex'>{role}</div> */}
            <div>{timespan}</div>
          </div>
        </div>
      ))}
    </section>
  )
}
