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
    <div className='pt-1'>
      {posts.map(post => (
        <Note key={post.permalink} post={post} />
      ))}
    </div>
  )
}
