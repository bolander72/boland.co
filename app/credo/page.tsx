import { notFound } from 'next/navigation'
import { pages } from '@/.velite'
import { Separator } from '@/components/ui/separator'
import { Title } from '@/components/title'
import { MDXContent } from '@/components/mdx-content'

function getPageBySlug() {
  return pages.find(page => page.slug === 'credo')
}

export default function Page() {
  const page = getPageBySlug()

  console.log(page)

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
      <div className='w-fit text-sm text-muted-foreground border-b -mb-1'>
        Updated on {formattedDate}
      </div>
          <Title>{page.title}</Title>
      </div>
      <Separator />
      <MDXContent code={page.body} />
    </article>
  )
}
