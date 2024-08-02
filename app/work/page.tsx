import { posts } from '@/.velite'
import AnimatedTitle from '@/components/animated-title'
import Resume from '@/components/work/resume'

const nonDraftPosts = posts.filter(post => !post.draft)
const sortedPosts = nonDraftPosts.sort((a, b) => b.date.localeCompare(a.date))

export default function Page() {
  return (
    <section className='space-y-4'>
      <AnimatedTitle text='Work' className='text-left' />
      <Resume />
    </section>
  )
}
