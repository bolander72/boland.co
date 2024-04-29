import { Post as PostType } from '@/.velite'

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
    <div className='flex w-full items-start justify-between text-xl'>
      <div>
        <div>{title}</div>
        <div className='text-base text-primary/85'>{description}</div>
      </div>
      {showDate && (
        <div className='mt-1 text-sm text-primary/85 sm:block'>
          {formattedDate}
        </div>
      )}
    </div>
  )
}
