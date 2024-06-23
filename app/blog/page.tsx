import { Title } from '@/components/title'
import { posts } from '@/.velite'
import Link from 'next/link'
import Post from '@/components/post'
import sharedMetadata from '@/metadata'
import { cn } from '@/lib/utils'

export const metadata = {
  ...sharedMetadata
}

const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date))

export default function Page() {
  return (
    <section className='w-full space-y-4'>
      <Title>Blog</Title>
      {sortedPosts.map((post, index) => (
        <div
          key={post.permalink}
          className={cn('pb-4', index !== sortedPosts.length - 1 && 'border-b')}
        >
          <Link key={post.permalink} href={post.permalink}>
            <Post post={post} />
          </Link>
        </div>
      ))}
    </section>
  )
}
