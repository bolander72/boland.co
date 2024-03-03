import sharedMetadata from '@/metadata'
import { Title } from '@/components/title'
import { Subtitle } from '@/components/subtitle'
import { readings } from './index'
import { ArrowUpRight, Link2 } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  ...sharedMetadata
}

export default function Reading() {
  return (
    <section className='w-full space-y-6'>
      <Title className='text-3xl'>Reading</Title>
      {/* <Paragraph>
        This is a non-exhaustive list of books, articles, and essays that have
        shaped how I think as well as my perspective and approach to life and
        work.
      </Paragraph>
      <Separator /> */}
      {readings.map(({ year, items }) => (
        <>
          <Subtitle>{year}</Subtitle>
          {items.map(({ title, authors, link }) => (
            <div
              className='flex items-center justify-between text-xl leading-8'
              key={title}
            >
              <div>
                  {title}
                  {link && (
                    <Link href={link}>
                      <ArrowUpRight className='h-[18px] text-blue-600 inline-block' />
                    </Link>
                  )}
                <div className='flex text-lg text-muted-foreground'>
                  {authors.join(', ')}
                </div>
              </div>
              {/* <div className='flex space-x-4'>
                <div className='hidden text-lg text-muted-foreground sm:block truncate text-ellipsis w-36 text-right'>
                  {authors.join(', ')}
                </div>
              </div> */}
            </div>
          ))}
        </>
      ))}
    </section>
  )
}
