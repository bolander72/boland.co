import { Title } from '@/components/title'
import { Subtitle } from '@/components/subtitle'
import data from './index.json'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import sharedMetadata from '@/metadata'

export const metadata = {
  ...sharedMetadata,
  title: 'reading | Michael Boland'
}

export default function Reading() {
  return (
    <section className='w-full space-y-6'>
      <Title>Reading</Title>
      {Object.entries(data.years).map(([year, items]) => (
        <>
          <Subtitle>{year}</Subtitle>
          {items.map(({ title, authors, link }) => (
            <div className='text-xl' key={title}>
              {title}
              {link && (
                <Link href={link} target='_blank' referrerPolicy='no-referrer'>
                  <ArrowUpRight className='inline-block h-[18px] text-blue-600 dark:text-blue-500' />
                </Link>
              )}
              <div className='flex text-lg text-muted-foreground'>
                {authors.join(', ')}
              </div>
            </div>
          ))}
        </>
      ))}
    </section>
  )
}
