import { Title } from '@/components/title'
import { posts } from '@/.velite'
import Link from 'next/link'
import sharedMetadata from '@/metadata'
import Post from '@/components/post'

export const metadata = {
  ...sharedMetadata,
  title: 'Blog',
  description: 'Thoughts, stories, and ideas.'
}

export default function Page() {
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section className='w-full space-y-6'>
      <Title>Blog</Title>
      {sortedPosts.map(post => (
        <div key={post.permalink}>
          <Link href={post.permalink}>
            <Post post={post} />
          </Link>
        </div>
      ))}
    </section>
  )
}
