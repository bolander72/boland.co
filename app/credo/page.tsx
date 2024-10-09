import { notFound } from 'next/navigation'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import { MDXContent } from '@/components/mdx-content'

function getPageBySlug() {
  return pages.find(page => page.slug === 'credo')
}

export default function Page() {
  const page = getPageBySlug()

  if (!page) {
    notFound()
  }

  const formattedDate = new Date(page.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className='space-y-4'>
      <div className='space-y-2'>
        <Title>{page.title}</Title>
      </div>
      <MDXContent code={page.body} />
    </article>
  )
}
