import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/mdx-content'
import { pages } from '@/.velite'

type Props = {
  params: Promise<{
    slug: string
  }>
}

function getPageBySlug(slug: string) {
  return pages.find(page => page.slug === slug)
}

export function generateStaticParams() {
  return pages.map(page => ({ slug: page.slug }))
}

export default async function PagePage(props: Props) {
  const params = await props.params
  const page = getPageBySlug(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <article className='space-y-4'>
      <MDXContent code={page.body} />
    </article>
  )
}
