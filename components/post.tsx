import { Post as PostType } from '@/.velite'

export default function Post({ post }: { post: PostType }) {
  const { title, description, date } = post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className='flex w-full items-start justify-between border-s border-blue-600 pl-4 text-xl dark:border-blue-500'>
      <div>
        <div>{title}</div>
        <div className='text-base text-muted-foreground'>{description}</div>
      </div>
      <div className='mt-1 text-sm text-muted-foreground sm:block'>
        {formattedDate}
      </div>
    </div>
  )
}
