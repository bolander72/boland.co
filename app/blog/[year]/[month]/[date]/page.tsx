import { Title } from '@/components/title'
import { posts } from '@/.velite'
import Link from 'next/link'
import Post from '@/components/post'
import { notFound } from 'next/navigation'

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
      <Title>Blog :: {formattedDate}</Title>
      {sortedPosts.map(post => (
        <div key={post.permalink}>
          <Link href={post.permalink}>
            <Post post={post} showDate={false} />
          </Link>
        </div>
      ))}
    </section>
  )
}
