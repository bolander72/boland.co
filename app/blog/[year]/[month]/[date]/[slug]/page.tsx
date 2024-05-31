import { notFound } from 'next/navigation'
import { posts } from '@/.velite'

import type { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
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

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params)

  if (!post)
    return {
      ...(sharedMetadata as Metadata)
    }

  return {
    ...(sharedMetadata as Metadata),
    title: post.title,
    description: post.description
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
          {post.description && (
            <Prose>
              <p className='text-lg'>{post.description}</p>
            </Prose>
          )}
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
