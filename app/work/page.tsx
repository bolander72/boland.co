import { Title } from '@/components/title'
import { gigs } from './index'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Subtitle } from '@/components/subtitle'

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
      <Subtitle>Present</Subtitle>
      <div className='text-xl'>
        {gigs[0].name}
        {gigs[0].link && (
          <Link href={gigs[0].link}>
            <ArrowUpRight className='ml-0 inline-block h-[18px] text-blue-600' />
          </Link>
        )}
        <div className='flex text-lg text-muted-foreground'>{gigs[0].role}</div>
      </div>
      <Subtitle>Past</Subtitle>
      {gigs
        .filter((_, index) => index !== 0)
        .map(({ name, role, link }) => (
          <div key={name} className='text-xl'>
            {name}
            {link && (
              <Link href={link}>
                <ArrowUpRight className='ml-0 inline-block h-[18px] text-blue-600' />
              </Link>
            )}
            <div className='flex text-lg text-muted-foreground'>{role}</div>
          </div>
        ))}
    </section>
  )
}
