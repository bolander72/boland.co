import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import { sharedMarkdownStyles } from '@/lib/markdown'

type Props = {
  params: {
    slug: string
  }
}

export const metadata = {
  ...sharedMetadata,
  title: 'home | Michael Boland',
}

export function generateStaticParams(): Props['params'][] {
  return pages.map(() => ({ slug: '/' }))
}

export default function PagePage() {
  const page = pages.find(page => page.slug === 'home')

  return (
    <article className='space-y-6'>
      <Title>{page.title}</Title>
      <div className={sharedMarkdownStyles}>
        <MDXContent code={page.body} />
      </div>
    </article>
  )
}
