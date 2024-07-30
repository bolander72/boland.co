import { posts } from '@/.velite'
import BlogTitle from '@/components/blog-title'
import Posts from '@/components/posts'

const nonDraftPosts = posts.filter(post => !post.draft)
const sortedPosts = nonDraftPosts.sort((a, b) => b.date.localeCompare(a.date))

export default function Page() {
  return (
    <section className='w-full space-y-4'>
      <BlogTitle />
      <Posts posts={sortedPosts} />
    </section>
  )
}
