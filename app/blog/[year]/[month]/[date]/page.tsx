import { posts } from '@/.velite'
import { notFound } from 'next/navigation'
import BlogTitle from '@/components/blog-title'
import Posts from '@/components/posts'

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
  const nonDraftPosts = filteredPosts.filter(post => !post.draft)
  const sortedPosts = nonDraftPosts.sort((a, b) => b.date.localeCompare(a.date))

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
        <BlogTitle />
        <span className='text-xs text-muted-foreground'>{formattedDate}</span>
      </div>
      <Posts posts={sortedPosts} />
    </section>
  )
}
