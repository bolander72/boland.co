import { notFound } from 'next/navigation'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import { MDXContent } from '@/components/mdx-content'

function getPageBySlug() {
  return pages.find(page => page.slug === 'colophon')
}

export default function Page() {
  const page = getPageBySlug()

  console.log(pages)

  if (!page) {
    notFound()
  }

  return (
    <article className='space-y-4'>
      <div className='space-y-2'>
        <Title>{page.title}</Title>
      </div>
      <MDXContent code={page.body} />
    </article>
  )
}
