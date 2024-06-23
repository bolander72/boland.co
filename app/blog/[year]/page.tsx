import { Title } from '@/components/title'
import { posts } from '@/.velite'
import Link from 'next/link'
import Post from '@/components/post'
import { notFound } from 'next/navigation'
import { cn } from '@/lib/utils'

export async function generateStaticParams() {
  return posts.map(post => {
    const [year] = post.date.split('-')
    return {
      year
    }
  })
}

interface Props {
  params: {
    year: string
  }
}

export default function Page({ params }: Props) {
  const filteredPosts = posts.filter(post => post.date.startsWith(params.year))
  const sortedPosts = filteredPosts.sort((a, b) => b.date.localeCompare(a.date))

  if (sortedPosts.length === 0) {
    notFound()
  }

  return (
    <section className='w-full space-y-4'>
      <div className='flex items-baseline justify-between space-x-2'>
        <Title>Blog</Title>
        <span className='text-xs text-muted-foreground'>{params.year}</span>
      </div>
      {sortedPosts.map((post, index) => (
        <div
          key={post.permalink}
          className={cn('pb-4', index !== sortedPosts.length - 1 && 'border-b')}
        >
          <Link href={post.permalink}>
            <Post post={post} />
          </Link>
        </div>
      ))}
    </section>
  )
}
