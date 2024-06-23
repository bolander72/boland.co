import { Title } from '@/components/title'
import { posts } from '@/.velite'
import Link from 'next/link'
import Post from '@/components/post'
import { notFound } from 'next/navigation'
import { cn } from '@/lib/utils'

export async function generateStaticParams() {
  return posts.map(post => {
    const [year, month] = post.date.split('-')
    return {
      year,
      month
    }
  })
}

interface Props {
  params: {
    year: string
    month: string
  }
}

export default function Page({ params }: Props) {
  const filteredPosts = posts.filter(post =>
    post.date.startsWith(`${params.year}-${params.month}`)
  )
  const sortedPosts = filteredPosts.sort((a, b) => b.date.localeCompare(a.date))

  if (sortedPosts.length === 0) {
    notFound()
  }

  const date = sortedPosts[0].date

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })

  const formattedDateWords = formattedDate.split(' ').join(', ')

  return (
    <section className='w-full space-y-4'>
      <div className='flex items-baseline justify-between space-x-2'>
        <Title>Blog</Title>
        <span className='text-xs text-muted-foreground'>
          {formattedDateWords}
        </span>
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
