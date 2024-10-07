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
    <div className='group flex w-full flex-row items-center justify-between text-xl'>
      <div className='flex flex-col'>
        {showDate && (
          <div className='mb-1 w-fit border-b text-xs text-muted-foreground'>
            {formattedDate}
          </div>
        )}
        <div className='mb-1.5 tracking-wide text-blue-500 group-hover:text-blue-700 dark:text-blue-500'>
          {title}
        </div>
        <div className='line-clamp-2 text-base text-primary'>{description}</div>
      </div>
    </div>
  )
}
