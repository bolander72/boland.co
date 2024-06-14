import { Post as PostType } from '@/.velite'

interface Props {
  post: PostType
  showDate?: boolean
}

export default function Post({ post, showDate = true }: Props) {
  const { title, description, date, cover } = post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className='flex w-full flex-col-reverse items-start justify-between text-xl sm:flex-row sm:items-center'>
      <div className='flex flex-col-reverse sm:flex-col'>
        {showDate && (
          <div className='w-fit border-b text-sm'>{formattedDate}</div>
        )}
        <div className='font-semibold'>{title}</div>
      </div>
      {cover && (
        <img
          src={cover.src}
          alt={post.title}
          className='mb-1 w-full rounded-md sm:mb-0 sm:w-32'
        />
      )}
    </div>
  )
}
