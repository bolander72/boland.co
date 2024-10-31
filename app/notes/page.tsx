import { posts } from '@/.velite'
import CustomLink from '@/components/custom-link'

const nonDraftPosts = posts.filter(post => !post.draft)
const sortedPosts = nonDraftPosts.sort((a, b) => b.date.localeCompare(a.date))

export default function Page() {
  return (
    <section className='space-y-4'>
      {sortedPosts.map(post => {
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })

        return (
          <article
            className='flex w-full flex-row items-center justify-between text-xl'
            key={post.slug}
          >
            <div className='flex flex-col'>
              <h2>
                <CustomLink href={post.permalink}>{post.title}</CustomLink>
              </h2>
              <time className='text-xs text-muted-foreground'>
                {formattedDate}
              </time>
              <p className='mt-2 line-clamp-2 text-base text-primary no-underline'>
                {post.description}
              </p>
            </div>
          </article>
        )
      })}
    </section>
  )
}
