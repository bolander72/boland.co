import { notFound } from 'next/navigation'
import { posts } from '@/.velite'

import type { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import { sharedMarkdownStyles } from '@/lib/markdown'

interface PostProps {
  params: {
    slug: string
  }
}

function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug)
}

export function generateMetadata({ params }: PostProps): Metadata {
  const post = getPostBySlug(params.slug)

  if (post == null) return {
    ...sharedMetadata as Metadata,
    title: 'not found | Michael Boland',
  }

  return { ...sharedMetadata as Metadata, title: `${post.title} | Michael Boland`, description: post.description }
}

export function generateStaticParams(): PostProps['params'][] {
  return posts.map(post => ({
    slug: post.slug
  }))
}

export default function PostPage({ params }: PostProps) {
  const post = getPostBySlug(params.slug)

  if (post == null) notFound()

  return (
    <article className='space-y-6'>
      <Title className='text-3xl'>{post.title}</Title>
      {post.description && (
        <p className='text-lg text-muted-foreground'>{post.description}</p>
      )}
      {post.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.cover} alt={post.title} />
      )}
      <Separator />
      <div
        className={sharedMarkdownStyles}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </article>
  )
}
