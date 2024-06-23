import { notFound } from 'next/navigation'
import { posts } from '@/.velite'
import type { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { Title } from '@/components/title'
import Prose from '@/components/prose'
import { MDXContent } from '@/components/mdx-content'

export async function generateStaticParams() {
  return posts.map(post => {
    const [year, month, date] = post.date.split('-')
    return {
      year,
      month,
      date: date.split('T')[0],
      slug: post.slug
    }
  })
}

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
  // const ogImage = `https://boland.co/og?title=${post.title}&description=${post.description}`

  if (!post) {
    return {}
  }

  return {
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://boland.co${post.permalink}`,
      images: [
        {
          url: post.cover.src
        }
      ]
    },
    twitter: {
      title: `${post.title}: ${post.description}`,
      description: post.description,
      images: post.cover.src
    }
  }
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params)

  if (!post) {
    notFound()
  }

  return (
    <article className='space-y-4'>
      <div className='space-y-2'>
        <div className='space-y-2'>
          <Title>{post.title}</Title>
          {post.description && (
            <p className='text-[17px] leading-7'>{post.description}</p>
          )}
        </div>
        <div className='flex items-center text-sm'>
          <span className='text-primary'>
            {' '}
            ~ {post.metadata.readingTime} min
          </span>
        </div>
      </div>
      {post.cover && (
        <img src={post.cover.src} alt={post.title} className='rounded-md' />
      )}
      <Separator />
      <Prose>
        <MDXContent code={post.content} />
      </Prose>
    </article>
  )
}
