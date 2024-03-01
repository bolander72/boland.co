import sharedMetadata from '@/metadata'
import { Title } from '@/components/title'
import { Separator } from '@/components/ui/separator'
import { Subtitle } from '@/components/subtitle'
import { readings } from './index'
import { Paragraph } from '@/components/paragraph'

export const metadata = {
  ...sharedMetadata
}

export default function Reading() {
  return (
    <main className='w-full'>
      <section className='space-y-6'>
        <Title className='text-3xl'>Reading</Title>
        <Paragraph>
          This is a non-exhaustive list of books, articles, and essays that have
          shaped how I think as well as my perspective and approach to life and
          work.
        </Paragraph>
        <Separator />
        {readings.map(({ year, items }) => (
          <>
            <Subtitle>{year}</Subtitle>
            {items.map(({ title, authors }) => (
              <div
                className='flex items-center justify-between text-xl leading-8'
                key={title}
              >
                <div className='flex-col sm:flex-row'>
                  <div>{title}</div>
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
    </main>
  )
}
