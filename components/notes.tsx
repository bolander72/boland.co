import { Post as PostType } from '@/.velite'
import CustomLink from './custom-link'

interface Props {
  posts: PostType[]
}

export default function Notes({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className='space-y-4'>
      {posts.map(post => {
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })

        return (
          <div
            className='flex w-full flex-row items-center justify-between text-xl'
            key={post.slug}
          >
            <div className='flex flex-col'>
              <CustomLink href={post.permalink}>{post.title}</CustomLink>
              <div className='text-xs text-muted-foreground'>
                {formattedDate}
              </div>
              <div className='mt-2 line-clamp-2 text-base text-primary no-underline'>
                {post.description}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
