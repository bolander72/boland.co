import { Title } from '@/components/title'
import data from './index.json'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Subtitle } from '@/components/subtitle'
import sharedMetadata from '@/metadata'

export const metadata = {
  ...sharedMetadata,
  title: 'work | Michael Boland'
}

export default function Work() {
  return (
    <section className='w-full space-y-6'>
      <Title className='text-3xl'>Work</Title>
      <Subtitle>Present</Subtitle>
      {data.present.map(({ name, role, link }) => (
        <div key={name} className='text-xl'>
          {name}
          {link && (
            <Link href={link} target='_blank' referrerPolicy='no-referrer'>
              <ArrowUpRight className='ml-0 inline-block h-[18px] text-blue-600 dark:text-blue-500' />
            </Link>
          )}
          <div className='flex text-lg text-muted-foreground'>{role}</div>
        </div>
      ))}
      <Subtitle>Past</Subtitle>
      {data.past
        .filter((_, index) => index !== 0)
        .map(({ name, role, link }) => (
          <div key={name} className='text-xl'>
            {name}
            {link && (
              <Link href={link} target='_blank' referrerPolicy='no-referrer'>
                <ArrowUpRight className='ml-0 inline-block h-[18px] text-blue-600 dark:text-blue-500' />
              </Link>
            )}
            <div className='flex text-lg text-muted-foreground'>{role}</div>
          </div>
        ))}
    </section>
  )
}
