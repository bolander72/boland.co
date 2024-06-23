import { posts } from '@/.velite'
import BlogTitle from '@/components/blog-title'
import Posts from '@/components/posts'

const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date))

export default function Page() {
  return (
    <section className='w-full space-y-4'>
      <BlogTitle />
      <Posts posts={sortedPosts} />
    </section>
  )
}
