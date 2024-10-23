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
    <div className='pt-1'>
      {posts.map(post => {
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })

        return (
          <div
            className='group flex w-full flex-row items-center justify-between text-xl'
            key={post.slug}
          >
            <div className='flex flex-col'>
              <div className='mb-1 w-fit border-b text-xs text-muted-foreground'>
                {formattedDate}
              </div>
              <CustomLink
                href={post.permalink}
                className='tracking-wide text-blue-500 no-underline group-hover:text-blue-700
                  dark:text-blue-500'
              >
                {post.title}
              </CustomLink>
              <div className='mt-1 line-clamp-2 text-base text-primary no-underline'>
                {post.description}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
