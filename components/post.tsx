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
    <div className='flex flex-col-reverse sm:flex-row w-full items-start justify-between text-xl'>
      <div>
        <div>{title}</div>
        <Prose>
          <div className='text-base'>{description}</div>
        </Prose>
      </div>
      {showDate && (
        <div className='mt-1 text-sm sm:block mb-2 sm:mb-0 border-b'>
          {formattedDate}
        </div>
      )}
    </div>
  )
}
