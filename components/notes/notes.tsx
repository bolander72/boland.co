import { Post as PostType } from '@/.velite'
import Note from './note'

interface Props {
  posts: PostType[]
}

export default function Posts({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className='grid grid-cols-1 gap-x-8 gap-y-4 pt-1 sm:grid-cols-2'>
      {posts.map(post => (
        <Note key={post.permalink} post={post} />
      ))}
    </div>
  )
}
