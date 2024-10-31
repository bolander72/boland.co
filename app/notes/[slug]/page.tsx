import { notFound } from 'next/navigation'
import { posts } from '@/.velite'
import { Title } from '@/components/title'
import { MDXContent } from '@/components/mdx-content'

export async function generateStaticParams() {
  return posts.map(post => {
    return {
      slug: post.slug
    }
  })
}

interface Props {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: Props) {
  const post = posts.find(post => post.slug === params.slug)

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
      <header className='space-y-2'>
        <div>
          <Title className='-mb-1.5 text-3xl font-medium'>{post.title}</Title>
          <time className='text-xs text-muted-foreground'>{formattedDate}</time>
        </div>
        {post.description && <p className='text-base'>{post.description}</p>}
      </header>
      <hr />
      <MDXContent code={post.content} />
    </article>
  )
}
