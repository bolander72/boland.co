import { Post as PostType } from '@/.velite'
import Prose from './prose'

interface Props {
  post: PostType
  showDate?: boolean
}

export default function Post({ post, showDate = true }: Props) {
  const { title, description, date } = post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className='flex w-full flex-col-reverse items-start justify-between text-xl sm:flex-row'>
      <div>
        <div className='font-semibold'>{title}</div>
        <div className='text-base'>{description}</div>
      </div>
      {showDate && (
        <div className='mb-2 mt-1 border-b text-sm sm:mb-0 sm:block'>
          {formattedDate}
        </div>
      )}
    </div>
  )
}
