import { posts } from '@/.velite'
import BlogTitle from '@/components/notes-title'
import Posts from '@/components/blog/posts'

const nonDraftPosts = posts.filter(post => !post.draft)
const sortedPosts = nonDraftPosts.sort((a, b) => b.date.localeCompare(a.date))

export default function Page() {
  return (
    <section className='space-y-6'>
      <BlogTitle />
      <Posts posts={sortedPosts} />
    </section>
  )
}
