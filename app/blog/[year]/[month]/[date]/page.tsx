import { Title } from '@/components/title'
import { posts } from '@/.velite'
import Link from 'next/link'
import Post from '@/components/post'
import { notFound } from 'next/navigation'
import { cn } from '@/lib/utils'

export async function generateStaticParams() {
  return posts.map(post => {
    const [year, month, date] = post.date.split('-')
    return {
      year,
      month,
      date: date.split('T')[0]
    }
  })
}

interface Props {
  params: {
    year: string
    month: string
    date: string
  }
}

export default function Page({ params }: Props) {
  const filteredPosts = posts.filter(post =>
    post.date.startsWith(`${params.year}-${params.month}-${params.date}`)
  )
  const sortedPosts = filteredPosts.sort((a, b) => a.date.localeCompare(b.date))

  if (sortedPosts.length === 0) {
    notFound()
  }

  const date = sortedPosts[0].date

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <section className='w-full space-y-4'>
      <div className='flex items-baseline justify-between space-x-2'>
        <Title>Blog</Title>
        <span className='text-xs text-muted-foreground'>{formattedDate}</span>
      </div>
      {sortedPosts.map((post, index) => (
        <div
          key={post.permalink}
          className={cn('pb-4', index !== sortedPosts.length - 1 && 'border-b')}
        >
          <Link href={post.permalink}>
            <Post post={post} showDate={false} />
          </Link>
        </div>
      ))}
    </section>
  )
}
