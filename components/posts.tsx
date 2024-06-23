import { Post as PostType } from '@/.velite'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Post from './post'

interface Props {
  posts: PostType[]
}

export default function Posts({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <>
      {posts.map((post, index) => (
        <div
          key={post.permalink}
          className={cn('pb-4', index !== posts.length - 1 && 'border-b')}
        >
          <Link key={post.permalink} href={post.permalink}>
            <Post post={post} />
          </Link>
        </div>
      ))}
    </>
  )
}
