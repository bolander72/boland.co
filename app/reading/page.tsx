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
              <div className='flex-col sm:flex-row'>
                <div className='flex'>
                  {title}{' '}
                  {link && (
                    <Link href={link}>
                      <ArrowUpRight className='ml-0 h-4 text-blue-600' />
                    </Link>
                  )}
                </div>
                <div className='flex text-lg text-muted-foreground sm:hidden'>
                  {authors.join(', ')}
                </div>
              </div>
              <div className='flex space-x-4'>
                <div className='hidden text-muted-foreground sm:flex'>
                  {authors.join(', ')}
                </div>
              </div>
            </div>
          ))}
        </>
      ))}
    </section>
  )
}
