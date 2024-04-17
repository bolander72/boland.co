import { MDXContent } from '@/components/mdx-content'
import { Post as PostType, pages, posts } from '@/.velite'
import { Title } from '@/components/title'
import sharedMetadata from '@/metadata'
import Prose from '@/components/prose'
import Link from 'next/link'
import { Subtitle } from '@/components/subtitle'
import Post from '@/components/post'

export const metadata = {
  ...sharedMetadata,
  title: `Michael's Page`
}

export default function Page() {
  const page = pages.find(page => page.slug === 'home')

  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date))

  return (
    <article className='space-y-6'>
      <Title>
        Hello, I&apos;m{' '}
        <Link
          className='text-blue-600 underline dark:text-blue-500'
          href='https://x.com/bolander72'
        >
          Michael
        </Link>
        .
      </Title>
      <Prose>
        <MDXContent code={page.body} />
      </Prose>
      <section className='space-y-4'>
        <Subtitle>Latest</Subtitle>
        <div>
          {sortedPosts.filter((post) => post.slug !== 'career-larping').map((post: PostType) => (
            <Link key={post.permalink} href={post.permalink}>
              <Post post={post} />
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
