import { posts } from '@/.velite'
import Notes from '@/components/notes'

const nonDraftPosts = posts.filter(post => !post.draft)
const sortedPosts = nonDraftPosts.sort((a, b) => b.date.localeCompare(a.date))

export default function Page() {
  return (
    <section className='space-y-6'>
      <Notes posts={sortedPosts} />
    </section>
  )
}
