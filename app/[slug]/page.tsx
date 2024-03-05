import { notFound } from 'next/navigation'

import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'

import type { Metadata } from 'next'

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
  if (page == null) return {}
  return { title: page.title }
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
      <h1 className='text-3xl'>{page.title}</h1>
      <hr />
      <div className='prose space-y-6 dark:prose-invert prose-headings:font-normal prose-headings:text-primary prose-h1:text-3xl prose-h2:text-2xl prose-p:text-xl prose-p:leading-8 prose-p:text-primary prose-a:font-normal prose-a:text-blue-600 prose-a:underline prose-blockquote:border-l-[1px] prose-blockquote:border-slate-200 prose-blockquote:text-xl prose-blockquote:font-normal prose-blockquote:dark:border-slate-800'>
        <MDXContent code={page.body} />
      </div>
    </article>
  )
}
