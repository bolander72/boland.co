import { Post as PostType } from '@/.velite'
import { cn } from '@/lib/utils'
import Post from './post'
import CustomLink from '../custom-link'

interface Props {
  posts: PostType[]
}

export default function Posts({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className='flex flex-col space-y-4 pt-1'>
      {posts.map((post, index) => (
        <CustomLink key={post.permalink} href={post.permalink}>
          <div
            key={post.permalink}
            className={cn('pb-4', index !== posts.length - 1 && 'border-b')}
          >
            <Post post={post} />
          </div>
        </CustomLink>
      ))}
    </div>
  )
}
