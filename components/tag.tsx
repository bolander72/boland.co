import { Tag } from '@/.velite'
import { cn } from '@/lib/utils'

interface Props {
  tag: Tag
  className?: string
}

export const getTagColorClasses = (tag: string) => {
  switch (tag) {
    case 'bitcoin':
      return 'text-yellow-600 dark:text-yellow-500'
    case 'money':
      return 'text-green-600 dark:text-green-500'
    default:
      return 'text-blue-600 dark:text-blue-500'
  }
}

export default function Tag({ tag, className = '' }: Props) {
  const tagColorClasses = getTagColorClasses(tag)

  return (
    <div className={cn(className)}>
      <span className='text-muted-foreground'>#</span>
      <span className={cn(tagColorClasses)}>{tag}</span>
    </div>
  )
}
