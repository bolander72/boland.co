import { Title } from '@/components/title'
import { posts } from '@/.velite'
import Link from 'next/link'
import sharedMetadata from '@/metadata'
import Post from '@/components/post'
import { Subtitle } from '@/components/subtitle'

export const metadata = {
  ...sharedMetadata,
  title: 'blog | Michael Boland'
}

export default function Page() {
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section className='w-full space-y-6'>
      <Title>Blog</Title>
      <Subtitle>Latest</Subtitle>
      <div>
        {sortedPosts
          .filter(post => !post.draft)
          .map(post => (
            <Link key={post.permalink} href={post.permalink}>
              <Post post={post} />
            </Link>
          ))}
      </div>
      <Subtitle>All</Subtitle>
      <div>
        {sortedPosts.map(post => (
          <Link key={post.permalink} href={post.permalink}>
            <Post post={post} />
          </Link>
        ))}
      </div>
    </section>
  )
}
