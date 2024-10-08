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
        <div className='-mb-1 w-fit border-b text-sm text-muted-foreground'>
          {formattedDate}
        </div>
        <Title>{page.title}</Title>
      </div>
      <hr />
      <MDXContent code={page.body} />
    </article>
  )
}
