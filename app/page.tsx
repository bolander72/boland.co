import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Prose from '@/components/prose'

type Props = {
  params: {
    slug: string
  }
}

export const metadata = {
  ...sharedMetadata,
  title: 'about | Michael Boland'
}

export function generateStaticParams(): Props['params'][] {
  return pages.map(() => ({ slug: '/' }))
}

export default function PagePage() {
  const page = pages.find(page => page.slug === 'about')

  return (
    <article className='space-y-6'>
      <Title>{page.title}</Title>
      <Prose>
        <MDXContent code={page.body} />
      </Prose>
    </article>
  )
}
