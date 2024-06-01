import { notFound } from 'next/navigation'
import { posts } from '@/.velite'

import type { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { Title } from '@/components/title'
import Prose from '@/components/prose'
import { MDXContent } from '@/components/mdx-content'

interface Props {
  params: {
    slug: string
    year: string
    month: string
    date: string
  }
}

function getPostBySlug(params: Props['params']) {
  return posts.find(
    post =>
      post.slug === params.slug &&
      post.date.startsWith(`${params.year}-${params.month}-${params.date}`)
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params)
  const ogImage = `https://boland.co/og?title=${post.title}&description=${post.description}`

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://boland.co/blog/${params.year}/${params.month}/${params.date}/${params.slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      title: `${post.title}: ${post.description}`,
      description: post.description,
      images: ogImage
    }
  }
}

export function generateStaticParams(): Partial<Props['params']>[] {
  return posts.map(post => ({
    slug: post.slug
  }))
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params)

  if (!post) {
    notFound()
  }

  return (
    <article className='space-y-6'>
      <div className='space-y-2'>
        <div>
          <Title>{post.title}</Title>
          {post.description && <p className='text-xl'>{post.description}</p>}
        </div>
        <div className='flex items-center text-sm'>
          <span className='text-primary'>
            {' '}
            ~ {post.metadata.readingTime} min
          </span>
        </div>
      </div>
      {post.cover && <img src={post.cover} alt={post.title} />}
      <Separator />
      <Prose>
        <MDXContent code={post.content} />
      </Prose>
    </article>
  )
}
