import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Prose from '@/components/prose'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
  }
}

export const metadata = {
  ...sharedMetadata,
  title: `Michael's Page`
}

export function generateStaticParams(): Props['params'][] {
  return pages.map(() => ({ slug: '/' }))
}

export default function Page() {
  const page = pages.find(page => page.slug === 'home')

  return (
    <article className='space-y-6'>
      <Title>
        Hello, I&apos;m{' '}
        <Link
          className='text-blue-600 underline dark:text-blue-500'
          href='https://x.com/bolander72'
        >
          Michael
        </Link>
        .
      </Title>
      <Prose>
        <MDXContent code={page.body} />
      </Prose>
    </article>
  )
}
