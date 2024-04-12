import { Post as PostType, Tag as TagType } from '@/.velite'
import Tag from '@/components/tag'

export default function Post({ post }: { post: PostType }) {
  const { title, tags, permalink, date } = post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div
      key={permalink}
      className='my-4 rounded-lg border p-4 transition-all sm:hover:shadow-lg sm:hover:shadow-primary/[.0375]'
    >
      <div className='text-xl'>
        <div className='flex items-center justify-between'>
          <div className='flex items-start'>
            {title}
            {/* <LinkIcon className=' inline-block h-[14px] text-blue-600 dark:text-blue-500' /> */}
          </div>
          <div className='text-sm text-muted-foreground sm:block'>
            {formattedDate}
          </div>
        </div>
      </div>
      <div className='mt-1 flex space-x-2 text-sm'>
        {tags.map((tag: TagType) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  )
}
