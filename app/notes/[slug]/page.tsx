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

function getPostBySlug(params: Props['params']) {
  return posts.find(post => post.slug === params.slug)
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params)

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
          <div className='-mb-1 w-fit border-b text-sm text-muted-foreground'>
            {formattedDate}
          </div>
          <Title>{post.title}</Title>
          {post.description && <p className='text-base'>{post.description}</p>}
        </div>
      </div>
      <hr />
      <MDXContent code={post.content} />
    </article>
  )
}
