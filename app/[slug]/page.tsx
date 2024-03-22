import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'
import type { Metadata } from 'next'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'

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
      <div className='prose space-y-6 dark:prose-invert prose-headings:font-normal prose-headings:text-primary prose-h1:text-3xl prose-h2:text-2xl prose-p:text-xl prose-p:leading-8 prose-p:text-primary prose-a:font-normal prose-a:text-blue-600 prose-a:underline prose-blockquote:border-l-[1px] prose-blockquote:border-slate-200 prose-blockquote:text-xl prose-blockquote:font-normal prose-a:dark:text-blue-500 prose-blockquote:dark:border-slate-800 prose-ul:text-primary'>
        <MDXContent code={page.body} />
      </div>
    </article>
  )
}
