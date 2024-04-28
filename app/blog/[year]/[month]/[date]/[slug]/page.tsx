import { notFound } from 'next/navigation'
import { posts, Tag as TagType } from '@/.velite'

import type { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Prose from '@/components/prose'
import Tag from '@/components/tag'
import Link from 'next/link'
import { MDXContent } from '@/components/mdx-content'
import { Button } from '@/components/ui/button'

interface Props {
  params: {
    slug: string
  }
}

function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug)
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)

  if (post == null)
    return {
      ...(sharedMetadata as Metadata),
      title: 'not found | Michael Boland'
    }

  return {
    ...(sharedMetadata as Metadata),
    title: `${post.title} | Michael Boland`,
    description: post.description
  }
}

export function generateStaticParams(): Props['params'][] {
  return posts.map(post => ({
    slug: post.slug
  }))
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (post == null) notFound()

  return (
    <article className='space-y-6'>
      <div className='space-y-2'>
        <Title>{post.title}</Title>
        {post.description && (
          <p className='text-lg text-muted-foreground'>{post.description}</p>
        )}
        <div className='flex space-x-2 text-lg'>
          {post.tags.map((tag: TagType) => (
            <Link key={tag} href={`/tags/${tag}`}>
              <Button variant='outline' size='sm' className='text-sm'>
                <Tag key={tag} tag={tag} />
              </Button>
            </Link>
          ))}
        </div>
        <div className='text-sm text-muted-foreground'>
          <span className='text-primary'>{post.metadata.readingTime} min</span>{' '}
          | reading time
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
