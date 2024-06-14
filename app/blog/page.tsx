import { Title } from '@/components/title'
import { posts } from '@/.velite'
import Link from 'next/link'
import Post from '@/components/post'
import sharedMetadata from '@/metadata'
import { cn } from '@/lib/utils'

export const metadata = {
  ...sharedMetadata
}

export default function Page() {
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section className='w-full space-y-4'>
      <Title>Blog</Title>
      <div className='space-y-6 sm:space-y-4'>
        {sortedPosts.map((post, index) => (
          <div
            key={post.permalink}
            className={cn(
              sortedPosts.length - 1 !== index &&
                'border-b pb-6 sm:border-b-0 sm:pb-0'
            )}
          >
            <Link href={post.permalink}>
              <Post post={post} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
