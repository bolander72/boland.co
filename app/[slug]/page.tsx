import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import type { Metadata } from 'next'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Prose from '@/components/prose'

type Props = {
  params: {
    slug: string
  }
}

function getPageBySlug(slug: string) {
  return pages.find(page => page.slug === slug)
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getPageBySlug(params.slug)

  if (page == null)
    return {
      ...(sharedMetadata as Metadata),
      title: 'not found | Michael Boland'
    }

  return {
    ...(sharedMetadata as Metadata),
    title: `${params.slug.toLowerCase()} | Michael Boland`
  }
}

export function generateStaticParams(): Props['params'][] {
  return pages.map(page => ({ slug: page.slug }))
}

export default function PagePage({ params }: Props) {
  const page = getPageBySlug(params.slug)

  if (page == null) {
    notFound()
  }

  return (
    <article className='space-y-6'>
      <Title>{page.title}</Title>
      <Prose>
        <MDXContent code={page.body} />
      </Prose>
    </article>
  )
}
