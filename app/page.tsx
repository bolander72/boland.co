/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import sharedMetadata from '@/metadata'
import { Paragraph } from '@/components/paragraph'
import { Title } from '@/components/title'

export const metadata = {
  ...sharedMetadata
}

export default function Home() {
  return (
    <div>
      <section className='space-y-6'>
        <Title className='text-3xl'>Hello, I'm Michael.</Title>
        <Paragraph>
          I'm a frontend developer, product strategist, and independent
          consultant. I also write a{' '}
          <Link href='/blog' className='text-blue-600 underline'>
            blog
          </Link>
          , which has existed in scribbles, physical notes, and journals for
          years (and digitally since 2023).
        </Paragraph>
        <Paragraph>
          As a developer, I build applications across web and mobile, do
          contract work for various clients, and build startups and side
          projects. To see more projects, please head to my{' '}
          <Link href='/work' className='text-blue-600 underline'>
            work
          </Link>{' '}
          page.
        </Paragraph>
        <Paragraph>
          In my consulting practice, I partner with startup founders and teams.
          I do my best work providing narrative and product strategy, helping
          define engineering structures, and advising organizational design
          strategy.
        </Paragraph>
      </section>
      <section className='mt-6 space-y-6'>
        <div>
          <Paragraph>Want to chat?</Paragraph>
          <Paragraph>
            Book a time{' '}
            <Link
              href='https://cal.com/boland/chat'
              className='text-blue-600 underline'
            >
              here
            </Link>
            .
          </Paragraph>
        </div>
        <div>
          <Paragraph>Send an email:</Paragraph>
          <Paragraph>hello [at] boland [dot] co.</Paragraph>
        </div>
      </section>
    </div>
  )
}
