import { notFound } from 'next/navigation'
import { posts } from '@/.velite'
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

export default function Page({ params }: Props) {
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
        <h1 className='-mb-1.5 text-3xl font-medium'>{post.title}</h1>
        <time className='text-xs text-muted-foreground'>{formattedDate}</time>
        {post.description && <p className='text-base'>{post.description}</p>}
      </header>
      <hr />
      <section>
        <MDXContent code={post.content} />
      </section>
    </article>
  )
}
