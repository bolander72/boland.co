import { posts } from '@/.velite'
import { notFound } from 'next/navigation'
import BlogTitle from '@/components/blog-title'
import Posts from '@/components/posts'

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
        <BlogTitle />
        <span className='text-xs text-muted-foreground'>
          {formattedDateWords}
        </span>
      </div>
      <Posts posts={sortedPosts} />
    </section>
  )
}
