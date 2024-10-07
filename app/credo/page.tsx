import { notFound } from 'next/navigation'
import { posts } from '@/.velite'
import { Separator } from '@/components/ui/separator'
import { Title } from '@/components/title'
import { MDXContent } from '@/components/mdx-content'

function getPostBySlug() {
  return posts.find(post => post.slug === 'business-credo')
}

export default function Page() {
  const post = getPostBySlug()

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className='space-y-4'>
      <div className='space-y-2'>
        <div className='space-y-2'>
          <div className='-mb-1 w-fit text-sm text-muted-foreground'>
            Updated on {formattedDate}
          </div>
          <Title>{post.title}</Title>
          {post.description && <p className='text-base'>{post.description}</p>}
        </div>
        <div className='flex items-center text-sm'>
          <span className='text-muted-foreground'>
            {' '}
            ~ {post.metadata.readingTime} min
          </span>
        </div>
      </div>
      <Separator />
      <MDXContent code={post.content} />
    </article>
  )
}
