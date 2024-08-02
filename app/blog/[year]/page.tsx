import { posts } from '@/.velite'
import { notFound } from 'next/navigation'
import BlogTitle from '@/components/blog-title'
import Posts from '@/components/blog/posts'

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
  const nonDraftPosts = filteredPosts.filter(post => !post.draft)
  const sortedPosts = nonDraftPosts.sort((a, b) => b.date.localeCompare(a.date))

  if (sortedPosts.length === 0) {
    notFound()
  }

  return (
    <section className='w-full space-y-4'>
      <div className='flex items-baseline justify-between space-x-2'>
        <BlogTitle />
        <span className='text-xs text-muted-foreground'>{params.year}</span>
      </div>
      <Posts posts={sortedPosts} />
    </section>
  )
}
