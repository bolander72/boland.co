import { Post, Tag as TagType } from '@/.velite'
import Tag from '@/components/tag'
import Link from 'next/link'

export default function Post({ post }: { post: Post }) {
  const { title, tags, permalink, date } = post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <li
      key={permalink}
      className='cursor-pointer transition-all sm:hover:shadow-lg sm:hover:shadow-primary/[.0375]'
    >
      <Link href={permalink}>
        <div className='rounded-lg border p-4 text-xl'>
          <div className='flex items-center justify-between'>
            <div>{title}</div>
            <div className='text-sm text-muted-foreground sm:block'>
              {formattedDate}
            </div>
            {/* <Link2 className='inline-block h-[18px] text-blue-600 dark:text-neutral-500' /> */}
          </div>
          {/* <div className='text-sm block sm:hidden text-muted-foreground'>
                  {formattedDate}
               </div> */}
          <div className='mt-1 flex space-x-2 text-sm'>
            {tags.map((tag: TagType) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </Link>
    </li>
  )
}
