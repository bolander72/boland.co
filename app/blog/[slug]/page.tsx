import { notFound } from 'next/navigation'
import { posts } from '@/.velite'

import type { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'

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
        className='prose space-y-6 dark:prose-invert prose-headings:font-normal prose-headings:text-primary prose-h1:text-3xl prose-h2:text-2xl prose-p:text-xl prose-p:leading-8 prose-p:text-primary prose-a:font-normal prose-a:text-blue-600 prose-a:underline prose-blockquote:border-l-[1px] prose-blockquote:border-slate-200 prose-blockquote:text-xl prose-blockquote:font-normal prose-blockquote:dark:border-slate-800'
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </article>
  )
}
