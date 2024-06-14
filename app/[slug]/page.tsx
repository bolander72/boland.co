import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import Prose from '@/components/prose'

type Props = {
  params: {
    slug: string
  }
}

function getPageBySlug(slug: string) {
  return pages.find(page => page.slug === slug)
}

export function generateStaticParams(): Props['params'][] {
  return pages.map(page => ({ slug: page.slug }))
}

export default function PagePage({ params }: Props) {
  const page = getPageBySlug(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <article className='space-y-4'>
      <Title>{page.title}</Title>
      <Prose>
        <MDXContent code={page.body} />
      </Prose>
    </article>
  )
}
